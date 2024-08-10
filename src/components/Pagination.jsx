import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons/Icons";

const Pagination = ({
  prevPage,
  nextPage,
  page,
  isPreviousData,
  isDataLast,
  isDataExists,
}) => {
  return (
    <div className="flex gap-2 max-[640px]:text-sm p-4 items-center">
      <button
        className={`bg-gray-200  ${
          page === 0 || isDataExists ? "text-gray-400" : ""
        } flex gap-1 items-center justify-start  p-1 rounded-md`}
        onClick={prevPage}
        disabled={page === 0 || isDataExists}>
        <ChevronLeftIcon />
        Anterior
      </button>{" "}
      <div> Pagina: {page + 1}</div>
      <button
        className={`bg-gray-200 flex ${
          isPreviousData || isDataLast || isDataExists ? "text-gray-400" : ""
        } gap-1 items-center justify-start p-1 rounded-md`}
        onClick={nextPage}
        disabled={isPreviousData || isDataLast || isDataExists}>
        Siguiente
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
