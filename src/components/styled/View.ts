import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;
