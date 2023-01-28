import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';
import {
  AlignItems,
  JustifyContent,
  Margin,
  Padding,
} from '../../types/Styled.type';
import * as Common from './Common';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;

interface ViewType extends Margin, Padding {
  flex: number;
  alignItems: AlignItems;
  justifyContent: JustifyContent;
  width: number | string;
  height: number | string;
  zIndex: number;
}

export const View = styled.View((props: ViewType) => ({
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

export const SafeAreaView = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const ViewRow = styled(View)({
  flexDirection: 'row',
});

export const ViewAbsolute = styled(View)(props => ({
  position: 'absolute',

  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
}));

export const ViewBorder = styled(View)(props => ({
  borderColor: Common.BORDER_COLOR(props),

  borderWidth: Common.BORDER_WIDTH(props),
  borderTopWidth: Common.BORDER_TOP_WIDTH(props),
  borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
  borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),
  borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),

  borderRadius: Common.BORDER_RADIUS(props),
  borderTopLeftRadius: Common.BORDER_TOP_LEFT_RADIUS(props),
  borderTopRightRadius: Common.BORDER_TOP_RIGHT_RADIUS(props),
  borderBottomLeftRadius: Common.BORDER_BOTTOM_LEFT_RADIUS(props),
  borderBottomRightRadius: Common.BORDER_BOTTOM_RIGHT_RADIUS(props),
}));

export const ViewRowBorder = styled(ViewBorder)({
  flexDirection: 'row',
});
