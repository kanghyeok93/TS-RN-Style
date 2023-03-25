import styled from 'styled-components/native';
import * as Common from './Common';

interface ImageType {
  height: number | string;
  width: number | string;
}

export const Image = styled.Image((props: ImageType) => ({
  // size
  width: props.width || '100%',
  height: props.height || '100%',
}));

export const ImageBorder = styled(Image)(props => ({
  // borderColor: Common.BORDER_COLOR(props),
  // borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),
  // borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
  // borderTopWidth: Common.BORDER_TOP_WIDTH(props),
  // borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),
  // borderTopLeftRadius: Common.BORDER_TOP_LEFT_WIDTH(props),
  // borderTopRightRadius: Common.BORDER_TOP_RIGHT_WIDTH(props),
  // borderBottomLeftRadius: Common.BORDER_BOTTOM_LEFT_WIDTH(props),
  // borderBottomRightRadius: Common.BORDER_BOTTOM_RIGHT_WIDTH(props),
  // borderWidth: props.borderWidth,
  // borderRadius: props.borderRadius,
}));
