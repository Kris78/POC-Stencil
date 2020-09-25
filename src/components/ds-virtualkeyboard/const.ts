import {
  VirtualKeyboardKey,
  VirtualKeyboardModes,
  VirtualKeyboardState,
} from "./types";

export const SPACE_KEY: VirtualKeyboardKey = {
  id: "kb-space",
  sign: "esp.",
};

export const CLEAR_KEY: VirtualKeyboardKey = {
  id: "kb-clear",
  sign: "",
};

export const CONTENT_KEYS: VirtualKeyboardKey[] = [
  {
    id: "kb-a",
    sign: "A",
    special: "£",
  },
  {
    id: "kb-b",
    sign: "B",
    special: "*",
  },
  {
    id: "kb-c",
    sign: "C",
    special: "=",
  },
  {
    id: "kb-d",
    sign: "D",
    special: "+",
  },
  {
    id: "kb-e",
    sign: "E",
    special: ";",
  },
  {
    id: "kb-f",
    sign: "F",
    special: ":",
  },
  {
    id: "kb-g",
    sign: "G",
    special: "ç",
  },
  {
    id: "kb-h",
    sign: "H",
    special: "?",
  },
  {
    id: "kb-i",
    sign: "I",
    special: "/",
  },
  {
    id: "kb-j",
    sign: "J",
    special: "°",
  },
  {
    id: "kb-k",
    sign: "K",
    special: "(",
  },
  {
    id: "kb-l",
    sign: "L",
    special: ")",
  },
  {
    id: "kb-prev",
    sign: "",
  },
  {
    id: "kb-next",
    sign: "",
  },
  {
    id: "kb-m",
    sign: "M",
    special: '"',
  },
  {
    id: "kb-n",
    sign: "N",
    special: "'",
  },
  {
    id: "kb-o",
    sign: "O",
    special: "[",
  },
  {
    id: "kb-p",
    sign: "P",
    special: "]",
  },
  {
    id: "kb-q",
    sign: "Q",
    special: "§",
  },
  {
    id: "kb-r",
    sign: "R",
    special: "ê",
  },
  {
    id: "kb-s",
    sign: "S",
    special: "è",
  },
  {
    id: "kb-t",
    sign: "T",
    special: "é",
  },
  {
    id: "kb-u",
    sign: "U",
    special: "ù",
  },
  {
    id: "kb-v",
    sign: "V",
    special: "à",
  },
  {
    id: "kb-w",
    sign: "W",
    special: "ô",
  },
  {
    id: "kb-x",
    sign: "X",
    special: "î",
  },
  {
    id: "kb-y",
    sign: "Y",
    special: "ï",
  },
  {
    id: "kb-z",
    sign: "Z",
    special: "ö",
  },
  {
    id: "kb-0",
    sign: "0",
    special: "$",
  },
  {
    id: "kb-1",
    sign: "1",
    special: "€",
  },
  {
    id: "kb-2",
    sign: "2",
    special: "\\",
  },
  {
    id: "kb-3",
    sign: "3",
    special: "{",
  },
  {
    id: "kb-4",
    sign: "4",
    special: "}",
  },
  {
    id: "kb-5",
    sign: "5",
    special: "!",
  },
  {
    id: "kb-6",
    sign: "6",
    special: "&",
  },
  {
    id: "kb-7",
    sign: "7",
    special: "%",
  },
  {
    id: "kb-8",
    sign: "8",
    special: "#",
  },
  {
    id: "kb-9",
    sign: "9",
    special: "~",
  },
  {
    id: "kb-at",
    sign: ".",
    special: "<",
  },
  {
    id: "kb-dot",
    sign: "-",
    special: ">",
  },
  {
    id: "kb-midline",
    sign: "@",
    special: "^",
  },
  {
    id: "kb-line",
    sign: "_",
    special: ",",
  },
];

export const FOOTER_KEYS: VirtualKeyboardKey[] = [
  {
    id: "kb-upper",
    sign: "ABC",
    special: "ABC",
  },
  {
    id: "kb-lower",
    sign: "abc",
    special: "abc",
  },
  {
    id: "kb-specials",
    sign: "&+/",
  },
];

export const MODES: VirtualKeyboardModes = {
  LOWERCASE: "lowercase",
  UPPERCASE: "uppercase",
  SPECIALS: "specials",
};

export const INITIAL_STATE: VirtualKeyboardState = {
  cursorIndex: 0,
  inputValue: [],
  mode: MODES.LOWERCASE,
};
