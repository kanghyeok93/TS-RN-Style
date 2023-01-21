import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {TextAlign} from '../../types/Styled.type';
import * as Common from './Common';

interface InputType {
  width: number | string;
  height: number | string;
  textAlign: string;
}

export const Input = styled(TextInput)((props: InputType) => ({
  // size
  width: props.width || '100%',
  height: props.height || 39,

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),
  color: Common.FONT_COLOR(props),

  // margin
  margin: Common.MARGIN(props),
  marginTop: Common.MARGIN_TOP(props),
  marginRight: Common.MARGIN_RIGHT(props),
  marginBottom: Common.MARGIN_BOTTOM(props),
  marginLeft: Common.MARGIN_LEFT(props),

  // padding
  padding: Common.PADDING(props),
  paddingTop: Common.PADDING_TOP(props),
  paddingRight: Common.PADDING_RIGHT(props),
  paddingBottom: Common.PADDING_BOTTOM(props),
  paddingLeft: Common.PADDING_LEFT(props),

  // align
  textAlign: (props.textAlign as TextAlign) || 'center',
}));

// export const InputBorder = styled(Input)(props => ({
//   borderColor: Common.BORDER_COLOR(props),
//   borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),
//   borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
//   borderTopWidth: Common.BORDER_TOP_WIDTH(props),
//   borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),

//   borderTopLeftRadius: Common.BORDER_TOP_LEFT_WIDTH(props),
//   borderTopRightRadius: Common.BORDER_TOP_RIGHT_WIDTH(props),
//   borderBottomLeftRadius: Common.BORDER_BOTTOM_LEFT_WIDTH(props),
//   borderBottomRightRadius: Common.BORDER_BOTTOM_RIGHT_WIDTH(props),

//   borderWidth: props.borderWidth,
//   borderRadius: props.borderRadius,
// }));
