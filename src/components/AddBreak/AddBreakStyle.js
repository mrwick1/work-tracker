import styled from 'styled-components';
import { colors } from '../../const/theme';

export const AddCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: c;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    transform: translateX(1px) translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  position: relative;
`;

export const AddSubTitle = styled.span`
  font-size: 25px;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
export const TimeFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 5px;
  /* @media (max-width: 780px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 35px;
  } */
`;
export const ToText = styled.span`
  font-size: 18px;
  @media (min-width: 780px) {
    display: none;
  }
`;
export const To = styled.div`
  height: 4px;
  width: 23px;
  background-color: white;
  @media (max-width: 780px) {
    display: none;
  }
`;
export const Minutes = styled.span`
  color: ${colors['gray-600']};
  font-size: 16px;
  position: absolute;
  right: 15px;
  bottom: 6px;
`;
