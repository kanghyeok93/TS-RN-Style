// Index Signature 선언
export type Color = {
  [index: string]: string;
};

export type Margin = {
  margin: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export type Padding = {
  padding: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

export type BorderWidth = {
  borderWidth: number;
  borderTopWidth: number;
  borderRightWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
};

export type BorderRadius = {
  borderRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
};

export type FontSize = {
  ftVerySmall: string;
  ftSmall: string;
  ftLarge: string;
  ftBigLarge: string;
  fontSize: string;
};

export type FontWeight = {
  bold: string;
};

export type TextAlign =
  | 'end'
  | 'left'
  | 'center'
  | 'right'
  | 'start'
  | undefined;

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | undefined;

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
