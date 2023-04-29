import styled from 'styled-components/native';

interface ImageType {
  height: number | string;
  width: number | string;
}

export const Image = styled.Image((props: ImageType) => ({
  // size
  width: props.width || '100%',
  height: props.height || '100%',
}));
