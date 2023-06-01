import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl text-red-600 font-bold ">Price: {price}</p>
      </div>
      <div className="card-actions justify-end mr-10 mb-5">
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-circle bg-white text-black hover:text-white">
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
