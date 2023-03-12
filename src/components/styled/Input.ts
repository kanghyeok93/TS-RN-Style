import styled from 'styled-components/native';
import {
  BorderRadius,
  BorderWidth,
  FontSize,
  FontWeight,
} from '../../types/Styled.type';
import * as Common from './Common';

interface InputType extends FontSize, FontWeight {
  height: number | string;
  width: number | string;
}

interface InputBorderType extends BorderWidth, BorderRadius {
  borderColor: string;
}

export const Input = styled.TextInput((props: InputType) => ({
  // size
  width: props.width || '100%',
  height: props.height || 39,

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),
  color: Common.FONT_COLOR(props),
}));

export const InputBorder = styled(Input)((props: InputBorderType) => ({
  borderColor: Common.BORDER_COLOR(props),

  // borderWidth: Common.BORDER_WIDTH(props),
  // borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),
  // borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
  // borderTopWidth: Common.BORDER_TOP_WIDTH(props),
  // borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),

  // borderRadius: Common.BORDER_RADIUS(props),
  // borderTopLeftRadius: Common.BORDER_TOP_LEFT_RADIUS(props),
  // borderTopRightRadius: Common.BORDER_TOP_RIGHT_RADIUS(props),
  // borderBottomLeftRadius: Common.BORDER_BOTTOM_LEFT_RADIUS(props),
  // borderBottomRightRadius: Common.BORDER_BOTTOM_RIGHT_RADIUS(props),
}));
