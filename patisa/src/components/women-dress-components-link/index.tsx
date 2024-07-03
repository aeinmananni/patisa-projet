/* eslint-disable @typescript-eslint/no-explicit-any */
import flash from "./components/icons/false-icons.svg";
import Crap from "./components/images/crap.png";
import shomize from "./components/images/shomiz.png";
import shalvark from "./components/images/shalvarak.png";
import short from "./components/images/short.png";
import t_shirt2 from "./components/images/t-shirt2.png";
import top_2 from "./components/images/top-2.png";
import shalvar from "./components/images/shalvar.png";
import Input from "../sales/components/input";
import { useStorePatisaManager } from "../store/store-patisa";
import { useState } from "react";
import LatestProductCarts from "../latest-products/components/latest-product-carts";
import flashPagination from "../sales/components/icons/flash-pagination.svg";
import { useWindowSize } from "react-use";

const WomenDressComponent = () => {
  const { productsCartInfoSales } = useStorePatisaManager();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productsCartInfoSales.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsCartInfoSales.length / itemsPerPage);

  const { width } = useWindowSize();
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

  const items = [
    { id: 1, icons: Crap, title: "کراپ", width: 80 },
    { id: 2, icons: shomize, title: "شومیز", width: 50 },
    { id: 3, icons: shalvark, title: "شلوارک", width: 50 },
    { id: 4, icons: short, title: "شرت", width: 100 },
    { id: 5, icons: t_shirt2, title: "تی - شرت" },
    { id: 6, icons: top_2, title: "تاپ", width: 45 },
    { id: 7, icons: shalvar, title: "شلوار" },
  ];

  const getWithHandel = () => {
    if (width < 600) {
      return items.slice(0, 3);
    } else {
      return items;
    }
  };
  return (
    <>
      <div className="bg-redLigth w-full h-max flex py-1 justify-start items-center px-2">
        <span className="text-grayCustom3">دسته بندی</span>
        <img src={flash} />
        <span className="text-sm">لباس زنانه</span>
      </div>
      <div className="flex justify-center gap-6">
        {getWithHandel().map((item, index) => (
          <>
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="border border-redLigth  h-24 w-24 rounded-full flex justify-center items-center overflow-hidden">
                <div className="w-20 h-20 rounded-full p-2 overflow-hidden   bg-redLigth flex justify-center items-start">
                  <img width={item.width} className="" src={item.icons} />
                </div>
              </div>
              <span>{item.title}</span>
            </div>
          </>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-20">
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
    </>
  );
};

export default WomenDressComponent;
