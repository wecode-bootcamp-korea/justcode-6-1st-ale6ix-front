import ReactPaginate from "react-paginate";

import "./Paginate.scss";

function Paginate(props) {
  const handlePageClick = (data) => {
    props.offsetHandler(data.selected * 10);
  };

  return (
    <div className="paginatie-container">
      <ReactPaginate
        previousLabel="&laquo;"
        nextLabel="&raquo;"
        pageCount={Math.ceil(props.totalCount / 10)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeLinkClassName={"active-button"}
      />
    </div>
  );
}

export default Paginate;
