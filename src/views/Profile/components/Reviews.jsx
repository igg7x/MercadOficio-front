import React from "react";
import Review from "./Review";
import NewReview from "./NewReview";
const Reviews = () => {
  const reviews = [
    {
      id: 1,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 2,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 3,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 4,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 5,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 6,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
    {
      id: 7,

      userNameReviewing: "John Doe",
      emailUserReviewing: "johnDoe@Gamil.com",

      imageUserReviewing: " https://randomuser.me/api/portraits/men/50.jpg",

      Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.",

      date: "14/03/2021",

      num_likes: 5,
    },
  ];

  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl font-inter">Reseñas</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Escribe una reseña sobre tu experiencia con el profesional.
        </p>
      </div>
      <NewReview />
      <div className="flex-col px-4 py-1 mx-4 items-center justify-center   max-[640px]:mb-14">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
