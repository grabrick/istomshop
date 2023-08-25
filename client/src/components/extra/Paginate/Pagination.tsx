import { FC, useState } from "react";
import m from './Pagination.module.scss'

type TProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: any
}

const Pagination: FC<TProps> = ({ totalPages, currentPage, onPageChange }) => { 
  const [pageRange] = useState(0); // Количество отображаемых номеров страниц

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
  
    let start = Math.max(currentPage - pageRange, 1); 
    let end = Math.min(currentPage + pageRange, totalPages);
  
    
    if (start > totalPages - 2 * pageRange) {
      start = Math.max(totalPages - 2 * pageRange, 1);
      end = totalPages;
    }
  
    for (let page = start; page <= end; page++) {
      pageNumbers.push(
        <li
          key={page}
          className={`${m.pageItem__number} ${currentPage === page ? `${m.active}` : ''}`}
          onClick={() => handlePageChange(page)}
        >
          <span className={m.pageNumber}>{page}</span>
        </li>
      );
    }
  
    return pageNumbers;
  };

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <nav className={m.nav}>
          <ul className={m.ul}>
            <li
              className={`${m.pageItem} ${currentPage === 1 ? `${m.disabled}` : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={m.pageLink}>{"<"}</span>
            </li>
            {renderPageNumbers()}
            <li
              className={`${m.pageItem} ${
                currentPage === totalPages ? `${m.disabled}` : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={m.pageLink}>{">"}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;