import React from "react";
import { Thumbsup } from "../../../assets/icons/Icons";
const Review = ({ review }) => {
  return (
    <div key={review.id} className="flex border-b-2   justify-start gap-2 p-4">
      <img
        src={review.imageUserReviewing}
        alt="profile image"
        className="rounded-full w-12 h-12"
      />
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-inter">{review.userNameReviewing}</h2>
          <h3 className="text-gray-400 ">{review.emailUserReviewing}</h3>
        </div>
        <p className="font-inter text-gray-700">{review.Text}</p>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">{review.date}</span>
          <span className="text-gray-400 flex hover:bg-blue-500 bg-slate-200 p-1 rounded-xl gap-2">
            <Thumbsup />
            <strong className="text-gray-800 font-inter">
              {" "}
              {review.num_likes}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
