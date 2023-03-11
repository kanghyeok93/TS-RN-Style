import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';
import {FontSize, FontWeight, TextAlign} from '../../types/Styled.type';
import * as Common from './Common';

export const MainText = styled.Text`
  font-size: ${(props: IContainerProps) =>
    props.theme && props.theme.fonts.normal};
  text-align: center;
  margin: 10px;
  color: white;
`;

interface TextType extends FontSize, FontWeight {
  width: number | string;
  height: number | string;
  textAlign: TextAlign;
  lineHeight: number;
}

export const Text = styled.Text((props: TextType) => ({
  // size
  width: props.width || 'auto',
  height: props.height || 'auto',

  // AOS의 경우 font family 적용 시 기본적으로 들어가는 마진 값 제거
  includeFontPadding: 'false',

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),
  // fontFamily: `NotoSansKR-${Common.FONT_WEIGHT(props)}`,

  // color
  color: Common.FONT_COLOR(props),

  // align
  textAlign: props.textAlign,

  // line Height
  lineHeight: props.lineHeight,
}));
