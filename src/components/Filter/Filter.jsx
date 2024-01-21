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
  const [selectedPrice, setSelectedPrice] = useState('');

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
      switch (param) {
        case 'make':
          return !value || car[param] === value;
        case 'rentalPrice':
          value = Number(value);
          return !value || car[param] <= value;
        case 'startMileage':
          value = Number(value);
          if (filters.endMileage !== '') {
            return (
              !value ||
              (car['mileage'] !== '' &&
                Number(car['mileage']) >= value &&
                Number(car['mileage']) <= Number(filters.endMileage))
            );
          }
          return (
            !value || (car['mileage'] !== '' && Number(car['mileage']) >= value)
          );
        case 'endMileage':
          value = Number(value);
          if (filters.startMileage !== '') {
            return (
              !value ||
              (car['mileage'] !== '' &&
                Number(car['mileage']) <= value &&
                Number(car['mileage']) >= Number(filters.startMileage))
            );
          }
          return (
            !value || (car['mileage'] !== '' && Number(car['mileage']) <= value)
          );

        default:
          return true;
      }
    });
  };

  const resetHandler = () => {
    changeFilter({
      make: '',
      rentalPrice: '',
      startMileage: '',
      endMileage: '',
    });
    changeIsFiltered(false);
  };

  const searchHandler = () => {
    if (isFilterEmpty()) {
      return;
    }

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
    setSelectedPrice(selectedPrice);
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
                    className={item === filters.make ? 'active' : ''}
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
          <PriceInput
            id="price"
            readOnly
            placeholder="to $"
            value={selectedPrice}
          />
          <DropButton
            type="button"
            onClick={() => switchDropdownMenu('priceList')}
          >
            {isDropdownOpen === 'priceList' ? <ButtonUp /> : <ButtonDown />}
          </DropButton>
          {isDropdownOpen === 'priceList' && (
            <PriceDropdown>
              <PriceList>
                {priceOptions.map((option, idx) => (
                  <PriceListOption
                    key={idx}
                    className={
                      option.label === filters.rentalPrice ? 'active' : ''
                    }
                    onClick={() => selectPriceHandler(option.value)}
                  >
                    {option.label}
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
              id="mileageFrom"
              value={filters && filters.startMileage}
              min="500"
              type="number"
              onChange={event => {
                dispatch(changeFilter({ startMileage: event.target.value }));
              }}
            />

            <MileageToText>To</MileageToText>
            <MileageTo
              id="mileageTo"
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
