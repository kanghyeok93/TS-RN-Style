import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';
import * as Common from './Common';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;

export const View = styled.View(props => ({
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const SafeAreaView = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const ViewRow = styled(View)({
  flexDirection: 'row',
});

export const ViewAbsolute = styled(View)({
  position: 'absolute',
});
