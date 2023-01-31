import styled, { keyframes } from 'styled-components';
import { colors } from '../../const/theme';

const flip = 'rotateY(180deg)';
export const spinAnimation = keyframes`
  0% {transform:rotateY(180deg)}
  100% {transform:rotateY(0deg)}

`;
export const CompleteCard = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: a;
  padding: 35px;
  position: relative;
  transition: all 0.3s ease;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  animation-name: ${(props) => props.animationEnable && spinAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: forwards;
  cursor: default;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
export const CompleteCard2 = styled.div`
  background-color: ${colors['gray-800']};
  border-radius: 16px;
  grid-area: a;
  padding: 35px;
  position: relative;
  transition: all 0.3s ease;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: default;
  animation-name: ${(props) => props.animationEnable && spinAnimation};
  animation-duration: 0.8s;
  animation-iteration-count: forwards;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  :hover {
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

export const Avatar = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

export const FlexB = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 17px;
  font-weight: 400;
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
    width: 70px;
    display: block;
  }
`;
export const Title = styled.h4`
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const AdminIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
export const Reset = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`;

export const Toggle = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
`;
