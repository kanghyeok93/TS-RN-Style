import {Color, FontSize, FontWeight} from '../../types/Styled.type';

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

// font color
export const FONT_COLOR = (props: object) => {
  return colorFrame(props, 'ft', '#000000');
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
