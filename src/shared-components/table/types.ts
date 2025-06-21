export interface TableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  editFn?: Function;
  deleteFn?: Function;
}
export interface IColumn<T> {
  label: string;
  flex?: number;
  align?: 'right' | 'left';
  value: keyof T;
  subValue?: string;
}

export interface IPagination {
  setCurrentPage: Function;
  totalPages: number;
  currentPage: number;
}
