import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;

// type 지정해주기
export const View = styled.View((props: {flex: number}) => ({
  // flex
  flex: props.flex,
  // alignItems: props.alignItems || 'stretch',
  // justifyContent: props.justifyContent || 'flex-start',

  // // size
  // width: props.width || 'auto',
  // height: props.height || 'auto',

  // // color
  // backgroundColor: Common.BACKGROUND_COLOR(props),

  // // margin
  // marginLeft: Common.MARGIN_LEFT(props),
  // marginRight: Common.MARGIN_RIGHT(props),
  // marginTop: Common.MARGIN_TOP(props),
  // marginBottom: Common.MARGIN_BOTTOM(props),

  // // padding
  // paddingLeft: Common.PADDING_LEFT(props),
  // paddingRight: Common.PADDING_RIGHT(props),
  // paddingTop: Common.PADDING_TOP(props),
  // paddingBottom: Common.PADDING_BOTTOM(props),

  // margin: props.margin,
  // padding: props.padding,

  // // zIndex
  // zIndex: props.zIndex || 1,
}));
