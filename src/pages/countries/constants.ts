import { country } from 'api/types';
import { IColumn } from '../../shared-components/table/types';

export const CountriesColumns: IColumn<country>[] = [
  {
    value: 'name',
    subValue: 'official',
    label: 'Country',
    flex: 1,
    align: 'left',
  },

  {
    value: 'region',
    label: 'Region',
    align: 'right',
  },

  {
    value: 'capital',
    label: 'Capital',
    align: 'right',
  },
  {
    value: 'currencies',
    label: 'Currency',
    align: 'right',
  },
  {
    value: 'languages',
    label: 'Languages',
    align: 'right',
  },
];

export const CurrencyOptions = [
  {
    value: '',
    label: 'All Currencies',
  },
  { value: 'USD', label: 'USD' },
  {
    value: 'EUR',
    label: 'EUR',
  },
];
