import { variables } from 'common/Variables';
import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 274px;
  height: 424px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 12px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 40px;
  gap: 6px;
  overflow: hidden;

  font-size: 12px;
  line-height: 1.5;
  color: ${variables.secondaryGray};
`;

export const DescriptionPart = styled.p`
  &:not(:last-child) {
    border-right: 1px solid ${variables.dropdownGray};
    padding-right: 6px;
  }
`;

export const TextSpan = styled.span`
  color: ${variables.basicBlue};
`;

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  margin-top: 28px;
  padding: 12px 98px;

  font-size: 14px;
  line-height: 1.42;
  color: #fff;
  background-color: ${variables.basicBlue};
  border-radius: 12px;
`;
export const CardsGrid = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 44px;
  padding: 12px 66px;

  font-size: 18px;
  line-height: 1.42;
  color: #fff;
  background-color: ${variables.basicBlue};
  border-radius: 12px;
`;

export const FavoriteHeart = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CatalogSection = styled.section`
  padding-bottom: 30px;
`;
