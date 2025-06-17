import Button from '../../shared-components/button/button';
import { EmptyTable } from './emptyTable';
import {
  MobileBlock,
  MobileTableRow,
  MobileTableStyled,
  RowBtnBox,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableStyled,
} from './table.styled';
import { TableProps } from './types';
import useViewport from '../../context/useViewport';

export const Table = function <T>({
  columns,
  data,
  editFn,
  deleteFn,
}: TableProps<T>) {
  const { isMobile } = useViewport();
  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }

    if (typeof value === 'object' && value !== null) {
      return Object.values(value)
        .map((v) =>
          typeof v === 'object' && v !== null ? Object.values(v).join(', ') : v,
        )
        .join(', ');
    }

    return String(value);
  };
  return !isMobile ? (
    <TableStyled>
      <TableHeader>
        {columns.map(({ label, flex, align }, index) => {
          return (
            <TableCell
              className="header-cell"
              $flex={flex}
              $align={align}
              key={index}
            >
              {label}
            </TableCell>
          );
        })}
        {(editFn || deleteFn) && <TableCell />}
      </TableHeader>

      {data?.length > 0 ? (
        <TableBody>
          {data.map((r, index) => {
            return (
              <TableRow key={index}>
                {columns.map(({ value, flex, align, subValue }, index) => {
                  return (
                    <TableCell $flex={flex} $align={align} key={index}>
                      <span className="hide-overflow">
                        {subValue &&
                        typeof r[value] === 'object' &&
                        r[value] !== null
                          ? formatValue(
                              (r[value] as Record<string, any>)[subValue],
                            )
                          : formatValue(r[value])}{' '}
                      </span>
                    </TableCell>
                  );
                })}
                {(editFn || deleteFn) && (
                  <TableCell $align="right">
                    <RowBtnBox>
                      {editFn && (
                        <Button text="edit" onClick={() => editFn(r)} />
                      )}
                      {deleteFn && (
                        <Button text="delete" onClick={() => deleteFn(r)} />
                      )}
                    </RowBtnBox>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      ) : (
        <EmptyTable />
      )}
    </TableStyled>
  ) : (
    <MobileTableStyled>
      {data.map((r) => (
        <MobileBlock>
          {columns.map((c, index) => {
            return (
              <MobileTableRow key={index}>
                <span className="label">{c.label}</span>
                <span className="value">
                  {c.subValue &&
                  typeof r[c.value] === 'object' &&
                  r[c.value] !== null
                    ? formatValue(
                        (r[c.value] as Record<string, any>)[c.subValue],
                      )
                    : formatValue(r[c.value])}
                </span>
              </MobileTableRow>
            );
          })}
        </MobileBlock>
      ))}
    </MobileTableStyled>
  );
};
