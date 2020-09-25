import { createStore } from "@stencil/store";
import { INITIAL_STATE } from "./const";
import { VirtualKeyboardState } from "./types";

type StoreType = {
  virtualKeyboard: VirtualKeyboardState;
};

const store = createStore<StoreType>({
  virtualKeyboard: INITIAL_STATE,
});

const { set } = store;

export default store.state;
export { set };
