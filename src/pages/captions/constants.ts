import { wordResponse } from 'api/types';
import { IColumn } from '../../shared-components/table/types';

export const WordColumns: IColumn<wordResponse>[] = [
  {
    value: '_id',
    label: 'Key',
    align: 'left',
    flex: 1,
  },

  {
    value: 'foreign',
    label: 'Foreign',
    align: 'right',
  },

  {
    value: 'national',
    label: 'National',
    align: 'right',
  },
];
