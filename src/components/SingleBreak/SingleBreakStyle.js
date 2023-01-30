import styled from 'styled-components';
import { colors } from '../../const/theme';

export const SingleCard = styled.div`
  background-color: ${colors['blue-500']};
  border-radius: 10px;
  padding: 13px 13px 5px;
  position: relative;
  margin-bottom: 15px;
`;
export const FlexTime = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: -10px;
  @media (max-width: 720px) {
    padding-right: 20px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
export const Time = styled.span`
  font-weight: 600;
  font-size: 35px;
  @media (max-width: 840px) {
    font-size: 25px;
  }
`;

export const Delete = styled.img`
  position: absolute;
  right: 11px;
  top: 10px;
  cursor: pointer;
`;
