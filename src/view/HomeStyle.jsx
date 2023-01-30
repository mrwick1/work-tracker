import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 15px;
`;

export const Grid = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: 30% 30% 36.4%;
  grid-template-rows: 150px 135px 158px;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-areas:
    'a b c'
    'a d e'
    'a f e ';
  @media (max-width: 1250px) {
    grid-template-areas:
      'a b'
      'a d'
      'a f'
      'c e'
      'c e';
    grid-template-columns: 49% 49%;
  }
  @media (max-width: 740px) {
    grid-template-areas:
      'a'
      'a'
      'b'
      'c'
      'd'
      'f'
      'e';
    grid-template-columns: 100%;
    grid-template-rows: unset;
  }
`;
