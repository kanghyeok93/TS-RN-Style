import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';
import {Margin, Padding} from '../../types/Styled.type';
import * as Common from './Common';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;

interface Props extends Margin, Padding {
  flex: number;
  alignItems: string;
  justifyContent: string;
  width: number | string;
  height: number | string;
  zIndex: number;
}

// type 지정해주기
export const View = styled.View((props: Props) => ({
  // flex
  flex: props.flex,
  alignItems: props.alignItems || 'stretch',
  justifyContent: props.justifyContent || 'flex-start',

  // size
  width: props.width || 'auto',
  height: props.height || 'auto',

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),

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

  // zIndex
  zIndex: props.zIndex || 1,
}));
