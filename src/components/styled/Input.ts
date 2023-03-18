import styled from 'styled-components/native';
import {FontSize, FontWeight} from '../../types/Styled.type';
import * as Common from './Common';

interface InputType extends FontSize, FontWeight {
  height: number | string;
  width: number | string;
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
  borderColor: Common.BORDER_COLOR(props),
}));
