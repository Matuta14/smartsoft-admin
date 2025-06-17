import Button from '../../shared-components/button/button';
import { TablePaginationStyled } from './table.styled';
import { IPagination } from './types';

export const TablePagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: IPagination) => {
  return (
    <TablePaginationStyled>
      <Button
        onClick={() => setCurrentPage((p: number) => Math.max(p - 1, 1))}
        text={'Prev'}
      />

      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() =>
          setCurrentPage((p: number) => Math.min(p + 1, totalPages))
        }
        text="Next"
      />
    </TablePaginationStyled>
  );
};
