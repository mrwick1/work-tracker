import styled from 'styled-components';
import { colors } from '../../const/theme';

export const BreakCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: e;
  padding: 18px;
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

export const BreaksTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Total = styled.p`
  font-size: 20px;
  font-weight: 500;
  span {
    font-size: 16px;
    font-weight: 400;
    color: ${colors['gray-600']};
  }
`;

export const ScrollView = styled.div`
  margin-top: 13px;
  overflow-y: scroll;
  height: 232px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
