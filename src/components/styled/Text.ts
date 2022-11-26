import styled from 'styled-components/native';
import {IContainerProps} from '../../interfaces/Styled.interface';

export const MainText = styled.Text`
  font-size: ${(props: IContainerProps) =>
    props.theme && props.theme.fonts.normal};
  text-align: center;
  margin: 10px;
  color: white;
`;
