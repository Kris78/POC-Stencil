import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import {
  CLEAR_KEY,
  CONTENT_KEYS,
  FOOTER_KEYS,
  MODES,
  SPACE_KEY,
} from "./const";
import state, { set } from "./store";
import { VirtualKeyboardState } from "./types";
import { getNewState } from "./utils";

@Component({
  tag: "ds-virtualkeyboard",
  styleUrl: "ds-virtualkeyboard.scss",
  shadow: false,
})
export class DsVirtualkeyboard {
  /** Put the focus on a key by its `id` */
  @Prop() selectedId: string;

  /** Set a custom state before mount the component */
  @Prop() initialState: VirtualKeyboardState;

  /** Emit component's state after each changes */
  @Event() virtualKeyboardStateEvent: EventEmitter<VirtualKeyboardState>;

  private pressKey(id: string) {
    set("virtualKeyboard", getNewState(state.virtualKeyboard, id));
  }

  connectedCallback() {
    if (this.initialState) {
      set("virtualKeyboard", this.initialState);
    }
  }

  componentDidUpdate() {
    this.virtualKeyboardStateEvent.emit(state.virtualKeyboard);
  }

  render() {
    const { mode } = state.virtualKeyboard;

    return (
      <div id="virtualkeyboard" class="virtualkeyboard">
        <div class="virtualkeyboard__wrapper">
          <ds-virtualkeyboard-key
            idProp={SPACE_KEY.id}
            sign={SPACE_KEY.sign}
            mode={mode}
            pressKey={this.pressKey}
            isSelected={SPACE_KEY.id === this.selectedId}
          ></ds-virtualkeyboard-key>

          <div class="virtualkeyboard__content">
            {CONTENT_KEYS.map((key) => (
              <ds-virtualkeyboard-key
                idProp={key.id}
                key={key.id}
                mode={mode}
                sign={key.sign}
                special={key.special}
                pressKey={this.pressKey}
                isSelected={key.id === this.selectedId}
              ></ds-virtualkeyboard-key>
            ))}
          </div>

          <ds-virtualkeyboard-key
            idProp={CLEAR_KEY.id}
            sign={CLEAR_KEY.sign}
            mode={mode}
            pressKey={this.pressKey}
            isSelected={CLEAR_KEY.id === this.selectedId}
          ></ds-virtualkeyboard-key>
        </div>

        <div class="virtualkeyboard__footer">
          {FOOTER_KEYS.map((key) => {
            const isActive =
              (key.id === "kb-upper" && mode === MODES.UPPERCASE) ||
              (key.id === "kb-lower" && mode === MODES.LOWERCASE) ||
              (key.id === "kb-specials" && mode === MODES.SPECIALS);

            return (
              <ds-virtualkeyboard-key
                idProp={key.id}
                key={key.id}
                sign={key.sign}
                special={key.special}
                isActive={isActive}
                pressKey={this.pressKey}
                isSelected={key.id === this.selectedId}
              ></ds-virtualkeyboard-key>
            );
          })}
        </div>
      </div>
    );
  }
}
