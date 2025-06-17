//TODO: fix this ugly imports
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
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared-components/loader/loader.tsx';

export const CountriesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const totalPages = Math.ceil(data?.data?.length / pageSize);
  const [showOnlyIndependent, setShowOnlyIndependent] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const navigate = useNavigate();

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

  useEffect(() => {
    setCurrentPage(1);
  }, [showOnlyIndependent, selectedCurrency]);

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
            onChange={setShowOnlyIndependent}
            label={'Independent'}
          />

          <Select
            value={selectedCurrency}
            onChange={(e: any) => setSelectedCurrency(e)}
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
                setCurrentPage={setCurrentPage}
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
