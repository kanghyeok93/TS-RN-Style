// Index Signature 선언
export type Color = {
  [index: string]: string;
};

export type FontSize = {
  ftVerySmall: string | undefined;
  ftSmall: string | undefined;
  ftLarge: string | undefined;
  ftBigLarge: string | undefined;
  fontSize: string | undefined;
};

export type FontWeight = {
  bold: string | undefined;
};

export type TextAlign =
  | 'end'
  | 'left'
  | 'center'
  | 'right'
  | 'start'
  | undefined;
