import { MODES } from "./const";
import { VirtualKeyboardMode, VirtualKeyboardState } from "./types";

const addChar = (
  cursorIndex: number,
  input: string[],
  id?: string
): string[] => {
  const char = id ? document?.getElementById(id)?.innerText : " ";

  if (!char) {
    return input;
  }

  return [...input.slice(0, cursorIndex), char, ...input.slice(cursorIndex)];
};

const deleteChar = (cursorIndex: number, input: string[]): string[] => {
  return [...input.slice(0, cursorIndex - 1), ...input.slice(cursorIndex)];
};

export const formatSign = (
  argSign: string,
  mode?: VirtualKeyboardMode,
  special?: string
): string => {
  let sign = argSign;

  if (sign.length === 1) {
    sign = mode === MODES.UPPERCASE ? sign.toUpperCase() : sign.toLowerCase();
  }

  if (mode === MODES.SPECIALS) {
    sign = special || sign;
  }

  return sign;
};

export const getNewState = (
  state: VirtualKeyboardState,
  id: string
): VirtualKeyboardState => {
  const { cursorIndex, inputValue } = state;
  const keyPressed = id.split("kb-").pop();

  switch (keyPressed) {
    case "upper":
      return {
        ...state,
        mode: MODES.UPPERCASE,
      };

    case "lower":
      return {
        ...state,
        mode: MODES.LOWERCASE,
      };

    case "specials":
      return {
        ...state,
        mode: MODES.SPECIALS,
      };

    case "space":
      return {
        ...state,
        cursorIndex: cursorIndex + 1,
        inputValue: addChar(cursorIndex, inputValue),
      };

    case "clear":
      return {
        ...state,
        cursorIndex: cursorIndex ? cursorIndex - 1 : cursorIndex,
        inputValue: deleteChar(cursorIndex, inputValue),
      };

    case "next":
      return {
        ...state,
        cursorIndex:
          cursorIndex + 1 <= inputValue.length ? cursorIndex + 1 : cursorIndex,
      };

    case "prev":
      return {
        ...state,
        cursorIndex: cursorIndex ? cursorIndex - 1 : cursorIndex,
      };

    default:
      return {
        ...state,
        cursorIndex: cursorIndex + 1,
        inputValue: addChar(cursorIndex, inputValue, id),
      };
  }
};
