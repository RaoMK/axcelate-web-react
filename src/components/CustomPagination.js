import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function CustomPagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
  paginate,
  lastPage,
}) {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        <p className="text-sm text-gray-700">
          Showing {""}
          <span className="font-medium">{currentPage * postsPerPage - 10}</span>
          {""} to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Pagination>
          <PaginationItem
            onClick={() => {
              paginateBack();
            }}
            ripple="dark"
          >
            <Icon name="keyboard_arrow_left" />
          </PaginationItem>
          <PaginationItem
            onClick={() => {
              paginate(1);
            }}
            ripple="dark"
          >
            First
          </PaginationItem>
          <PaginationItem
            onClick={() => {
              currentPage < 2
                ? paginate(currentPage)
                : paginate(currentPage - 1);
            }}
            ripple="dark"
          >
            {currentPage < 2 ? currentPage : currentPage - 1}
          </PaginationItem>
          <PaginationItem color="lightBlue" ripple="light">
            {currentPage}
          </PaginationItem>

          <PaginationItem
            onClick={() => {
              currentPage !== lastPage
                ? paginate(currentPage + 1)
                : paginate(currentPage);
            }}
            ripple="dark"
          >
            {currentPage !== lastPage ? currentPage + 1 : currentPage}
          </PaginationItem>

          <PaginationItem
            onClick={() => {
              paginate(lastPage);
            }}
            ripple="dark"
          >
            Last
          </PaginationItem>
          <PaginationItem
            onClick={() => {
              paginateFront();
            }}
            ripple="dark"
          >
            <Icon name="keyboard_arrow_right" />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
}
