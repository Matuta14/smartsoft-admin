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
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
}
