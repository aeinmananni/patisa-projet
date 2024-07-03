/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SalesHead from "./sales-head";
import Input from "./input";
import { useStorePatisaManager } from "../../store/store-patisa";
import LatestProductCarts from "../../latest-products/components/latest-product-carts";
import flashPagination from "./icons/flash-pagination.svg";
import filterIcon from "./icons/filter.svg";

const Layoue = () => {
  const { productsCartInfoSales } = useStorePatisaManager();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(productsCartInfoSales.length / itemsPerPage);

  // Calculate the items to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productsCartInfoSales.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    if (totalPages <= 8 || showAllPages) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={
            currentPage === index + 1 ? "active border px-4 rounded-lg" : "px-4"
          }
        >
          {index + 1}
        </button>
      ));
    } else {
      return (
        <div className="flex gap-8 flex-row-reverse">
          <button
            onClick={() => handlePageChange(1)}
            className={
              currentPage === 1 ? "active border px-4 rounded-lg" : "px-4"
            }
          >
            1
          </button>
          <button
            onClick={() => handlePageChange(2)}
            className={
              currentPage === 2 ? "active border px-4 rounded-lg" : "px-4"
            }
          >
            2
          </button>
          <button
            onClick={() => handlePageChange(3)}
            className={
              currentPage === 3 ? "active border px-4 rounded-lg" : "px-4"
            }
          >
            3
          </button>

          <button onClick={() => setShowAllPages(true)}>...</button>

          <button
            onClick={() => handlePageChange(totalPages - 2)}
            className={
              currentPage === totalPages - 2
                ? "active border px-4 rounded-lg"
                : "px-4"
            }
          >
            {totalPages - 2}
          </button>
          <button
            onClick={() => handlePageChange(totalPages - 1)}
            className={
              currentPage === totalPages - 1
                ? "active border px-4 rounded-lg"
                : "px-4"
            }
          >
            {totalPages - 1}
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className={
              currentPage === totalPages
                ? "active border px-4 rounded-lg"
                : "px-4"
            }
          >
            {totalPages}
          </button>
        </div>
      );
    }
  };
  const [state, setstate] = useState<boolean>(false);
  return (
    <>
      <div className="h-full w-full flex flex-col overflow-hidden">
        <SalesHead />
        <div className="w-full h-full overflow-x-hidden   overflow-y-auto flex flex-col gap-4 ">
          <div className="">
            <button
              onClick={() => setstate(!state)}
              className="bg-blueLigth flex sm:hidden  flex-row-reverse gap-3 justify-center items-center px-4 py-3 rounded-lg border"
            >
              <span className="text-colorPrimary">فیلتر</span>

              <img src={filterIcon} />
            </button>
          </div>
          <div
            className={`w-full ${
              state ? "grid grid-cols-1 gap-2" : "hidden"
            } sm:grid sm:grid-cols-1 lg:grid-cols-3  gap-2`}
          >
            <Input label="دسته بندی" />
            <Input label="مرتب سازی بر اساس" />
            <Input label="انتخاب بازه ی قیمت" />
          </div>
          <div className="grid grid-cols-2 justify-center items-center sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-12">
            {currentItems.map((item, index) => (
              <LatestProductCarts
                key={index}
                colors={item.colors}
                imageAddres={item.imageAddres}
                dressTitle={item.dressTitle}
                code={item.code}
                price={item.price}
                sizes={item.sizes}
                off={"off" in item ? item.off : undefined}
              />
            ))}
          </div>
          <div className=" hidden justify-between mt-4 xl:flex">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex flex-row-reverse gap-2 border py-2 px-2 rounded-lg shadow-sm"
            >
              بعدی <img src={flashPagination} />
            </button>
            <div className="flex flex-row-reverse gap-2">
              {renderPaginationButtons()}
            </div>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex flex-row-reverse gap-2 border py-2 px-2 rounded-lg shadow-sm"
            >
              قبلی <img className="rotate-180" src={flashPagination} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layoue;
