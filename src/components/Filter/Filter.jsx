import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { brands } from './brands';

import {
  FilterSection,
  FilterContainer,
  InputWrapper,
  Label,
  BrandInput,
  DropButton,
  ButtonUp,
  ButtonDown,
  BrandsDropdown,
  BrandsList,
  BrandsLi,
  PriceInput,
  PriceDropdown,
  PriceList,
  PriceListOption,
  MileageFrom,
  MileageTo,
  MileageToText,
  MileageFromText,
  MileageContainer,
  SearchButton,
} from './Filter.styled';

const Filter = ({
  cars,
  filters,
  inFilter,
  isFiltered,
  changeIsFiltered,
  changeFilter,
}) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');

  const [, setSearchParams] = useSearchParams();

  const isFilterEmpty = useCallback(() => {
    for (const key in filters) {
      if (filters.hasOwnProperty(key) && filters[key]) {
        return false;
      }
    }
    return true;
  }, [filters]);

  useEffect(() => {
    if (isFilterEmpty()) {
      setSearchParams({});
    } else {
      setSearchParams({ ...filters });
    }
  }, [filters, isFilterEmpty, setSearchParams]);

  const searchBrandHandler = selectedBrand => {
    changeFilter({ make: selectedBrand });
    setSelectedBrand(selectedBrand);
    setIsDropdownOpen(false);
  };

  const switchDropdownMenu = dropdownType => {
    if (isDropdownOpen === dropdownType) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(dropdownType);
    }
  };

  const filterCars = (car, filters) => {
    return Object.entries(filters).every(([param, value]) => {
      value = Number(value);
      switch (param) {
        case 'make':
          return !value || value >= car[param];
        case 'rentalPrice':
          return !value || value >= car[param];
        case 'startMileage':
          return (
            value <= car['mileage'] &&
            (!filters.endMileage ||
              car['mileage'] <= filters.endMileage ||
              !filters.startMileage)
          );
        case 'endMileage':
          return (
            value >= car['mileage'] &&
            (!filters.startMileage ||
              car['mileage'] >= filters.startMileage ||
              !filters.endMileage)
          );
        default:
          return true;
      }
    });
  };

  const resetHandler = () => {
    changeFilter({
      make: '',
    });
    changeIsFiltered(false);
  };

  const searchHandler = () => {
    const filteredCars = cars.filter(car => filterCars(car, filters));
    inFilter(filteredCars);
    changeIsFiltered(true);
  };

  const gradation = 10;
  const minimalPrice = 30;
  const maximumPrice = 500;

  function priceArray(min, max, gradation) {
    const result = [];
    for (let idx = min; idx <= max; idx += gradation) {
      result.push(idx.toString());
    }
    return result;
  }

  const priceOptions = priceArray(minimalPrice, maximumPrice, gradation).map(
    item => ({
      label: item,
      value: item,
    })
  );

  const selectPriceHandler = selectedPrice => {
    changeFilter({ rentalPrice: selectedPrice });
    setIsDropdownOpen(false);
  };

  return (
    <FilterSection>
      <FilterContainer>
        <InputWrapper>
          <Label htmlFor="brand">Car brand</Label>
          <BrandInput
            id="brand"
            placeholder="Enter the text"
            readOnly
            value={selectedBrand}
          />
          <DropButton
            type="button"
            onClick={() => switchDropdownMenu('brandName')}
          >
            {isDropdownOpen === 'brandName' ? <ButtonUp /> : <ButtonDown />}
          </DropButton>
          {isDropdownOpen === 'brandName' && (
            <BrandsDropdown>
              <BrandsList>
                {brands.map((item, index) => (
                  <BrandsLi
                    key={index}
                    className={
                      filters && filters.make && item === filters.make
                        ? 'active'
                        : ''
                    }
                    onClick={() => searchBrandHandler(item)}
                  >
                    {item}
                  </BrandsLi>
                ))}
              </BrandsList>
            </BrandsDropdown>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="price">Price/ 1 hour</Label>
          <PriceInput id="price" readOnly placeholder="to $" />
          <DropButton
            type="button"
            onClick={() => switchDropdownMenu('priceList')}
          >
            {isDropdownOpen === 'priceList' ? <ButtonUp /> : <ButtonDown />}
          </DropButton>
          {isDropdownOpen === 'priceList' && (
            <PriceDropdown>
              <PriceList>
                {priceOptions.map((item, index) => (
                  <PriceListOption
                    key={index}
                    className={
                      item.label ===
                      (filters && filters.rentalPrice === item.value)
                        ? 'active'
                        : ''
                    }
                    onClick={() => selectPriceHandler(item.value)}
                  >
                    {item.label}
                  </PriceListOption>
                ))}
              </PriceList>
            </PriceDropdown>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="mileage">Car mileage / km</Label>
          <MileageContainer>
            <MileageFromText>From</MileageFromText>
            <MileageFrom
              id="mileage"
              value={filters && filters.startMileage}
              min="500"
              type="number"
              onChange={event => {
                dispatch(changeFilter({ startMileage: event.target.value }));
              }}
            />

            <MileageToText>To</MileageToText>
            <MileageTo
              id="mileage"
              value={filters && filters.endMileage}
              min="500"
              type="number"
              onChange={event => {
                dispatch(changeFilter({ endMileage: event.target.value }));
              }}
            />
          </MileageContainer>
        </InputWrapper>
        <SearchButton type="button" onClick={searchHandler}>
          Search
        </SearchButton>
        {isFiltered && (
          <SearchButton type="button" onClick={resetHandler}>
            Reset
          </SearchButton>
        )}
      </FilterContainer>
    </FilterSection>
  );
};

export default Filter;
