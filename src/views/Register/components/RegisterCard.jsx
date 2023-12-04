import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const RegisterCard = ({ desc, title, srcImg, registerPage, setView }) => {
  let { path, url } = useSearchParams();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/register/${registerPage}`);
    setView(true);
  };

  return (
    // <Link to={`/register/${registerPage}`}>
    <article
      onClick={handleClick}
      className=" shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <img
        src={srcImg}
        loading="lazy"
        alt="register card"
        className="w-full h-72 opacity-90 rounded-t-md"
      />
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{desc}</p>
      </div>
    </article>
    // </Link>
  );
};

export default RegisterCard;
