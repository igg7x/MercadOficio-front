import React from "react";
import Review from "./Review";
import { MessajesIcon } from "../../../assets/icons/Icons";
import Error from "@components/Errors/Error";
import Pagination from "@components/Pagination";
import { useReviews } from "@hooks/useReviews";
import Loading from "@components/Loading";
import { useParams } from "react-router-dom";
const Reviews = () => {
  let { userEmail } = useParams();
  const {
    data: reviews,
    isError,
    isLoading,
    isPreviousData,
    nextPage,
    prevPage,
    page,
  } = useReviews(userEmail);

  console.log(reviews);
  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl flex items-center gap-0.5 font-inter">
          <MessajesIcon />
          Reseñas
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Aqui podras ver las reseñas que han dejado otros usuarios sobre ti
        </p>
      </div>
      <div className="flex-col px-4 py-1 mx-4 items-center justify-center   max-[640px]:mb-14">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error
            messaje={"Ups ! Ocurrio un error"}
            img={"/src/assets/images/undraw_server_down_s4lk.png"}
          />
        ) : reviews.content.length === 0 ? (
          <Error
            messaje={"No se encontraron reseñas"}
            img={"/src/assets/images/undraw_People_search_re_5rre.png"}
          />
        ) : (
          reviews.content.map((review) => (
            <Review key={review.id} review={review} />
          ))
        )}
      </div>
      <div className="flex items-center w-full justify-center">
        <Pagination
          isDataExists={isLoading || isError}
          isPreviousData={isPreviousData}
          isDataLast={reviews?.last}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </>
  );
};

export default Reviews;
