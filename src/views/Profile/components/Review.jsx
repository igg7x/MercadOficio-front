import React from "react";
import Thumbsup from "../../../assets/icons/Thumbsup";
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
          <h2 className="text-lg font-semibold">{review.userNameReviewing}</h2>
          <h3 className="text-gray-400">{review.emailUserReviewing}</h3>
        </div>
        <p className="font-normal">{review.Text}</p>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">{review.date}</span>
          <span className="text-gray-400 flex hover:bg-blue-500 bg-slate-200 p-1 rounded-xl gap-2">
            <strong className="text-gray-800 font-bold ">
              {" "}
              {review.num_likes}
            </strong>
            <Thumbsup />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
