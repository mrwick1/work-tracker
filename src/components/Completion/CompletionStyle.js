import styled from 'styled-components';
import { colors } from '../../const/theme';

export const CompleteCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: a;
  padding: 35px;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    transform: translateX(1px) translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const Circle = styled.div`
  height: 275px;
  width: 275px;
  margin: auto;
  svg {
    display: block;
  }
  text {
    font-weight: 600;
    font-size: 26px !important;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
`;
export const SubTitle = styled.h4`
  font-weight: 600;
  font-size: 23px;

  margin: 25px 0 0px;
`;

export const Desc = styled.span`
  color: ${colors['gray-600']};
  font-size: 18px;
  font-weight: 500;
`;
export const ColorPad = styled.div`
  background-color: ${(props) => props.color};
  height: 18px;
  width: 18px;
  margin-top: -4px;
`;

export const FlexMain = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Tag = styled.span`
  font-size: 19px;
`;
