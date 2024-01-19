import { variables } from 'common/Variables';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 0 80px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 18px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: ${variables.basicGray};
`;

export const BrandInput = styled.input`
  width: 224px;
  height: 48px;
  padding: 15px;

  border: none;
  outline: none;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  background-color: ${variables.inputGray};
`;

export const DropButton = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  padding: 0;

  cursor: pointer;

  background-color: transparent;
  outline: none;
  border: none;
`;

export const ButtonUp = styled(FaChevronUp)`
  width: 20px;
  height: 20px;
  color: ${variables.basicBlack};
`;

export const ButtonDown = styled(FaChevronDown)`
  width: 20px;
  height: 20px;
  color: ${variables.basicBlack};
`;

export const BrandsDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 224px;
  max-height: 270px;
  top: 100%;
  overflow: auto;
  border-radius: 10px;
  border: 1px solid ${variables.dropdownBorder};
  background: #fff;
  margin-top: 3px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: ${variables.dropdownBorder};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.inputGray};
  }
`;

export const BrandsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 15px;
`;

export const BrandsLi = styled.li`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${variables.secondaryGray};
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &.active {
    color: #121417cc;
    font-weight: 600;
  }
`;

export const PriceInput = styled.input`
  width: 153px;
  height: 48px;
  padding: 15px;

  border: none;
  outline: none;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  background-color: ${variables.inputGray};
`;

export const PriceDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 145px;
  max-height: 190px;
  top: 100%;
  overflow: auto;
  border-radius: 10px;
  border: 1px solid ${variables.dropdownBorder};
  background: #fff;
  margin-top: 3px;

  &::-webkit-scrollbar {
    width: 15px;
    height: 65px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: ${variables.dropdownBorder};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.inputGray};
  }
`;

export const PriceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px;
`;

export const PriceListOption = styled.li`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${variables.secondaryGray};
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &.active {
    color: #121417cc;
    font-weight: 600;
  }
`;

export const MileageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MileageFromText = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const MileageFrom = styled.input`
  width: 160px;
  height: 48px;
  padding-left: 62px;

  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  outline: none;
  background-color: ${variables.inputGray};
  cursor: text;
`;

export const MileageTo = styled.input`
  width: 160px;
  height: 48px;
  padding-left: 40px;
  border-radius: 0;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  outline: none;
  border: none;
  background-color: ${variables.inputGray};
  cursor: text;
`;

export const MileageToText = styled.span`
  position: absolute;
  top: 14px;
  left: 174px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 48px;

  font-size: 16px;
  line-height: 1.42;
  border-radius: 12px;
  background-color: ${variables.basicBlue};
  color: #fff;
  transition: background-color 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${variables.hoverBlue};
  }
`;
