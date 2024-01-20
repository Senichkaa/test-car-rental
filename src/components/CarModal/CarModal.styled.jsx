import { variables } from 'common/Variables';
import styled from 'styled-components';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.secondaryGray};
`;

export const MainModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 541px;
  max-width: 540px;
  max-height: 700px;
  overflow-y: auto;
  z-index: 100;
  border-radius: 24px;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${variables.secondaryGray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.secondaryGray};
  }
`;
export const ContentContainer = styled.div`
  position: relative;
  padding: 40px 35px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 14px;
  height: 14px;
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CarImage = styled.img`
  display: block;
  width: 461px;
  height: 248px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 13px;
`;

export const FullDescription = styled.p`
  padding-right: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${variables.secondaryGray};

  &:not(:last-child) {
    border-right: 1px solid ${variables.dropdownGray};
    padding-right: 6px;
  }
`;
export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 277px;
  height: 40px;
  margin-bottom: 16px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  color: ${variables.secondaryGray};
`;
export const Article = styled.p`
  font-size: 14px;
  line-height: 1.42;
`;

export const AccessoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const AccessoriesList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  font-size: 12px;
  line-height: 1.5%;
`;

export const RentalConditionsContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const RentTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const RentInformation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 461px;
  margin-bottom: 24px;
`;

export const Information = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  color: ${variables.secondaryGray};
  background-color: ${variables.conditionsBg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const InformationSpan = styled.span`
  color: ${variables.basicBlue};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const RentalButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  margin-top: 28px;

  font-size: 14px;
  line-height: 1.42;
  color: #fff;
  background-color: ${variables.basicBlue};
  border-radius: 12px;
`;

export const IconSvg = styled.svg`
  stroke: ${variables.basicBlack};
`;
