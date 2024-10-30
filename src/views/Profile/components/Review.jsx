import React from "react";
import ModalJobInfo from "./ModalJobInfo";
import { useJobsByID } from "../../../hooks/useJobs";
import { useModal } from "../../../hooks/useModal";
import Loading from "../../../components/Loading";
import { StarIcon } from "../../../assets/icons/Icons";
const Review = ({ review }) => {
  const {
    data: job,
    isError,
    isLoading: isLoadingData,
  } = useJobsByID(review.jobId);

  const { show, toogle } = useModal();
  return (
    <div key={review.id} className="flex border-b-2 justify-start gap-2 p-4">
      <img
        src={review.userReviewer_img}
        alt="profile image"
        className="rounded-full w-12 h-12"
      />
      <div className="flex flex-col">
        <div className="flex  flex-col text-xs gap-1">
          <h2 className="text-base">{review.userEmailReviewer}</h2>
        </div>
        <div className="flex flex-col">
          <p className=" text-gray-700">{review.text}</p>
          <p className="text-gray-400">
            La reseña ha sido sobre el siguiente empleo :{" "}
            <button
              onClick={() => toogle()}
              className="underline text-blue-500">
              {" "}
              Detalles del empleo{" "}
            </button>
          </p>
          <div className="flex justify-start flex-col gap-1">
            <span className="text-gray-700  flex items-center text-xs font-light">
              {[...Array(review.rating)].map((_, index) => (
                <StarIcon key={index} />
              ))}
            </span>
            <span className="text-gray-400 text-xs font-light">
              {new Date(review.created_at)
                .toLocaleString("en-GB")
                .substring(0, 10)}
            </span>
          </div>
          {isLoadingData ? (
            <Loading />
          ) : (
            <ModalJobInfo job={job} show={show} toogle={toogle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
