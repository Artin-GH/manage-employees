import { Dispatch, SetStateAction } from 'react';
import { Employee } from '../../types';

export default function Pagination(props: {
  employees: Employee[];
  pageEmployees: Employee[];
  pageState: [number, Dispatch<SetStateAction<number>>];
  maxPageEmployeesLen: number;
}) {
  const { employees, pageEmployees, pageState, maxPageEmployeesLen } = props;
  const [page, setPage] = pageState
  const pageCount = Math.ceil(employees.length / maxPageEmployeesLen);
  const paginationItems = [
    <li className="page-item" key={-1}>
      <button
        className="page-link"
        onClick={() => {
          if (page === 0) {
            setPage(pageCount - 1);
          } else {
            setPage(page - 1);
          }
        }}
      >
        Prev
      </button>
    </li>,
  ];
  for (let i = 1; i <= pageCount; i++) {
    paginationItems.push(
      <li
        className={`page-item ${i - 1 === page ? 'active' : null}`}
        key={i}
      >
        <button
          className="page-link"
          onClick={() => {
            setPage(i - 1);
          }}
        >
          {i}
        </button>
      </li>
    );
  }
  paginationItems.push(
    <li className="page-item" key={-2}>
      <button className="page-link" onClick={() => {
        if (page === pageCount - 1) {
          setPage(0)
        }else{
          setPage(page + 1)
        }
      }}>Next</button>
    </li>
  );

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{pageEmployees.length}</b> out of <b>{employees.length}</b>{' '}
        entries
      </div>
      <ul className="pagination">{paginationItems}</ul>
    </div>
  );
}
