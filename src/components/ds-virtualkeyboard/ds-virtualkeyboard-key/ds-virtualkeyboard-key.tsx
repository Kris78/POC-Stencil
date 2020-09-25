import { Component, h, Prop, State } from "@stencil/core";
import { VirtualKeyboardMode } from "../types";
import { formatSign } from "../utils";
import classnames from "classnames";

@Component({
  assetsDirs: ["src/assets"],
  tag: "ds-virtualkeyboard-key",
  styleUrl: "ds-virtualkeyboard-key.scss",
  shadow: false,
})
export class DsVirtualkeyboardKey {
  clickedTimeout: NodeJS.Timeout;

  /**
   * Used for the component animation\
   * Add `virtualkeyboard-key--isClicked` className on the component for 300ms
   */
  @State() isClicked = false;

  /** The `id` of the component */
  @Prop() idProp!: string;

  /** The `active` state of the component */
  @Prop() isActive: boolean;

  /** The `selected` state of the component */
  @Prop() isSelected: boolean;

  /**
   * The `Mode` of the component
   * > `lowercase`, `uppercase` or `specials`
   */
  @Prop() mode: VirtualKeyboardMode;

  /** A function triggered on `click` event on the component */
  @Prop() pressKey: (T: string) => void;

  /** The symbol displayed on the component */
  @Prop() sign!: string;

  /** An alternative symbol displayed after clicked on the *special button* */
  @Prop() special: string;

  private getFormatedSign() {
    return formatSign(this.sign, this.mode, this.special);
  }

  private handleClick() {
    this.pressKey(this.idProp);

    this.isClicked = true;

    this.clickedTimeout = setTimeout(() => {
      this.isClicked = false;
    }, 300);
  }

  disconnectedCallback() {
    clearInterval(this.clickedTimeout);
  }

  render() {
    return (
      <span
        class={classnames("virtualkeyboard-key", {
          "virtualkeyboard-key--isSpecial": this.sign.length > 1,
          "virtualkeyboard-key--isSelected": this.isSelected,
          "virtualkeyboard-key--isActive": this.isActive,
          "virtualkeyboard-key--isClicked": this.isClicked,
          "virtualkeyboard-key--isBackspace": this.idProp === "kb-space",
          "virtualkeyboard-key--isClear": this.idProp === "kb-clear",
          "virtualkeyboard-key--isPrevArrow": this.idProp === "kb-prev",
          "virtualkeyboard-key--isNextArrow": this.idProp === "kb-next",
          "virtualkeyboard-key--isFooter":
            this.idProp === "kb-upper" ||
            this.idProp === "kb-lower" ||
            this.idProp === "kb-specials",
        })}
        id={this.idProp}
        onClick={() => this.handleClick()}
      >
        {this.getFormatedSign()}
      </span>
    );
  }
}
