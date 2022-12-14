import {
  BorderRadius,
  BorderWidth,
  Color,
  FontSize,
  FontWeight,
  Margin,
  Padding,
} from '../../types/Styled.type';

export const colors: Color = {
  Danger: '#ff4444',
  Warning: '#ffbb33',
  Success: '#00C851',
  Info: '#33b5e5',
  DangerDark: '#CC0000',
  WarningDark: '#FF8800',
  SuccessDark: '#007E33',
  InfoDark: '#0099CC',
  Black: '#000000',
  Silver: '#C0C0C0',
  Gray: '#808080',
  White: '#FFFFFF',
  Red: '#FF0000',
  Orange: '#ffa500',
  Yellow: '#FFFF00',
  Green: '#008000',
  Blue: '#0000FF',
  Navy: '#000080',
  Purple: '#800080',
  Lime: '#00FF00',
  Olive: '#808000',
  Aqua: '#00FFFF',
  Brown: '#a52a2a',
  Chocolate: '#d2691e',
  CornflowerBlue: '#6495ed',
  Tomato: '#ff6347',
  LightPink: '#ffb6c1',
};

const colorFrame = (props: object, keyword: string, defaultColor: string) => {
  // colorsKeys ["Danger", "Warning", "Success", "Info", "DangerDark", "WarningDark", "SuccessDark", "InfoDark"]
  const colorsKeys = Object.keys(colors);

  // ["bgInfo", "children", "forwardedComponent", "forwardedRef", "theme"]
  const propsKeys = Object.keys(props);

  const filter = colorsKeys.filter(data =>
    propsKeys.includes(`${keyword}${data}`),
  );

  return filter.length ? colors[filter[0]] : defaultColor;
};

// background color
export const BACKGROUND_COLOR = (props: object) => {
  return colorFrame(props, 'bg', 'transparent');
};

// border color
export const BORDER_COLOR = (props: object) => {
  return colorFrame(props, 'br', 'transparent');
};

// font color
export const FONT_COLOR = (props: object) => {
  return colorFrame(props, 'ft', '#000000');
};

// margin
export const MARGIN = (props: Margin) => {
  return props.margin;
};
export const MARGIN_TOP = (props: Margin) => {
  return props.marginTop;
};
export const MARGIN_RIGHT = (props: Margin) => {
  return props.marginRight;
};
export const MARGIN_BOTTOM = (props: Margin) => {
  return props.marginBottom;
};
export const MARGIN_LEFT = (props: Margin) => {
  return props.marginLeft;
};

// padding
export const PADDING = (props: Padding) => {
  return props.padding;
};
export const PADDING_TOP = (props: Padding) => {
  return props.paddingTop;
};
export const PADDING_RIGHT = (props: Padding) => {
  return props.paddingRight;
};
export const PADDING_BOTTOM = (props: Padding) => {
  return props.paddingBottom;
};
export const PADDING_LEFT = (props: Padding) => {
  return props.paddingLeft;
};

// border width
export const BORDER_WIDTH = (props: BorderWidth) => {
  return props.borderWidth;
};
export const BORDER_TOP_WIDTH = (props: BorderWidth) => {
  return props.borderTopWidth;
};
export const BORDER_RIGHT_WIDTH = (props: BorderWidth) => {
  return props.borderRightWidth;
};
export const BORDER_BOTTOM_WIDTH = (props: BorderWidth) => {
  return props.borderBottomWidth;
};

export const BORDER_LEFT_WIDTH = (props: BorderWidth) => {
  return props.borderLeftWidth;
};

// border radius
export const BORDER_RADIUS = (props: BorderRadius) => {
  return props.borderRadius;
};
export const BORDER_TOP_LEFT_RADIUS = (props: BorderRadius) => {
  return props.borderTopLeftRadius;
};
export const BORDER_TOP_RIGHT_RADIUS = (props: BorderRadius) => {
  return props.borderTopRightRadius;
};
export const BORDER_BOTTOM_LEFT_RADIUS = (props: BorderRadius) => {
  return props.borderBottomLeftRadius;
};
export const BORDER_BOTTOM_RIGHT_RADIUS = (props: BorderRadius) => {
  return props.borderBottomRightRadius;
};

// font size
export const FONT_SIZE = (props: FontSize) => {
  if (props.ftVerySmall) {
    return '8px';
  }
  if (props.ftSmall) {
    return '11px';
  }
  if (props.ftLarge) {
    return '18px';
  }
  if (props.ftBigLarge) {
    return '28px';
  }
  if (props.fontSize) {
    return props.fontSize;
  }
  return '14px';
};

// font weight
export const FONT_WEIGHT = (props: FontWeight) => {
  if (props.bold) {
    return 'bold';
  }
  return 'normal';
};
