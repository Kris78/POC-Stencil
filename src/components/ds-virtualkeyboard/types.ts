export type VirtualKeyboardState = {
  cursorIndex: number;
  inputValue: string[];
  mode: VirtualKeyboardMode;
};

export type VirtualKeyboardModeLowercase = "lowercase";
export type VirtualKeyboardModeUppercase = "uppercase";
export type VirtualKeyboardModeSpecials = "specials";

export type VirtualKeyboardMode =
  | VirtualKeyboardModeLowercase
  | VirtualKeyboardModeUppercase
  | VirtualKeyboardModeSpecials;

export type VirtualKeyboardModes = {
  LOWERCASE: VirtualKeyboardModeLowercase;
  UPPERCASE: VirtualKeyboardModeUppercase;
  SPECIALS: VirtualKeyboardModeSpecials;
};

export type VirtualKeyboardKey = {
  id: string;
  sign: string;
  special?: string;
};
