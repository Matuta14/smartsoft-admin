import { getCountries } from '../../api/requests.tsx';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from '../../shared-components/table/table.tsx';
import { CountriesStyles, FiltersBox, TableBox } from './countries.styled.ts';
import { CountriesColumns, CurrencyOptions } from './constants.ts';
import { ContentLayoutStyled } from '../../shared-components/styled.ts';
import { Checkbox } from '../../shared-components/checkbox.tsx/checkbox.tsx';
import { Select } from '../../shared-components/select/select.tsx';
import { TablePagination } from '../../shared-components/table/tablePagination.tsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../../shared-components/loader/loader.tsx';

export const CountriesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const showOnlyIndependent = searchParams.get('independent') === 'true';
  const selectedCurrency = searchParams.get('currency') || '';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 15;

  const filteredCountries = data?.data?.filter((country: any) => {
    if (showOnlyIndependent && country.independent !== true) return false;

    if (selectedCurrency) {
      const currencyKeys = Object.keys(country.currencies || {});
      return currencyKeys.includes(selectedCurrency);
    }

    return true;
  });

  const currentCountries = filteredCountries?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const totalPages = Math.ceil(filteredCountries?.length / pageSize);

  const handleIndependentChange = (val: boolean) => {
    const newParams = new URLSearchParams(searchParams);
    if (val) newParams.set('independent', 'true');
    else newParams.delete('independent');
    newParams.set('page', '1'); // reset to page 1
    setSearchParams(newParams);
  };

  const handleCurrencyChange = (currency: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (currency) newParams.set('currency', currency);
    else newParams.delete('currency');
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <ContentLayoutStyled>
      <CountriesStyles>
        <FiltersBox>
          <Checkbox
            checked={showOnlyIndependent}
            onChange={handleIndependentChange}
            label={'Independent'}
          />

          <Select
            value={selectedCurrency}
            onChange={(e: any) => handleCurrencyChange(e)}
            options={CurrencyOptions}
          />
        </FiltersBox>

        <TableBox>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Table columns={CountriesColumns} data={currentCountries} />
              <TablePagination
                currentPage={currentPage}
                setCurrentPage={handlePageChange}
                totalPages={totalPages}
              />
            </>
          )}
        </TableBox>
      </CountriesStyles>
    </ContentLayoutStyled>
  );
};

export default CountriesPage;
