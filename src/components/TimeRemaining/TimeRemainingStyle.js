import styled from 'styled-components';
import { colors } from '../../const/theme';

export const TimeCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: b;
  cursor: default;
  padding: 25px 30px 35px 40px;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    transform: translateX(1px) translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  @media (max-width: 670px) {
    padding: 20px;
  }
`;
export const FlexTime = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 25px;
  @media (max-width: 670px) {
    img {
      height: 30px;
    }
  }
`;

export const Time = styled.span`
  display: block;
  font-size: 63px;
  font-weight: 600;
  line-height: 60px;
  @media (max-width: 670px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
export const Remaining = styled.div`
  color: ${colors['gray-600']};
  font-size: 18px;
  margin-top: -10px;
`;
