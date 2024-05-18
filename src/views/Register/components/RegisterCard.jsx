import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const RegisterCard = ({ desc, title, srcImg, registerPage }) => {
  let { path, url } = useSearchParams();

  return (
    <Link to={`/register/${registerPage}`}>
      <article className=" shadow-lg border p-2  rounded-md duration-300 hover:shadow-sm">
        <img
          src={srcImg}
          loading="lazy"
          alt="register JobCard"
          className="w-48 h-48 opacity-90 rounded-t-md"
        />
        <div className="pt-3 ml-4 mr-2 mb-1">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{desc}</p>
        </div>
      </article>
    </Link>
  );
};

export default RegisterCard;
