import styled from 'styled-components';
import { colors } from '../../const/theme';

export const StartingCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: d;
  cursor: default;
  padding: 15px 15px 25px;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    transform: translateX(1px) translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 20px;
    cursor: pointer;
  }
`;
export const TextBorder = styled.div`
  border-left: 5px solid white;
  padding-left: 10px;
  font-size: 23px;
  font-weight: 500;
  padding-bottom: 5px;

  span {
    display: block;
    font-size: 13px;
    color: ${colors['gray-600']};
    font-weight: 500;
    margin-top: -5px;
  }
`;

export const StartTime = styled.div``;
