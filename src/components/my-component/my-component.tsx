import { Component, Prop, h, Listen } from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Listen("buttonClick", { capture: true })
  handleButtonClick(event: number) {
    console.log("catch event", event);
  }

  @Listen("virtualKeyboardStateEvent", { capture: true })
  handleVirtualKeyboardClick(event: CustomEvent) {
    console.log("catch vk event", event.detail);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <slot></slot>
      </div>
    );
  }
}
