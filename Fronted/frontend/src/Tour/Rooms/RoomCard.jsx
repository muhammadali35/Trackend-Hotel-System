import { FaMapMarkerAlt, FaRegClock, FaUsers, FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const TourCard = ({
  image = "/placeholder.jpg",
  featured = false,
  title = "Untitled Tour",
  location = "Unknown",
  price = 0,
  rating = 4.5,
  days = 1,
  guests = 1,
  isFav = false,
  id
}) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    if (id) navigate(`/tours/${id}`);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer max-w-[320px] mx-auto"
      onClick={handleExplore}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500 ease-in-out"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] uppercase font-semibold px-2 py-1 rounded-full shadow">
            Featured
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
          <FaHeart className={isFav ? "text-red-500" : "text-gray-400"} />
        </button>
      </div>

      {/* Card Info */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center text-yellow-500 text-sm">
          <div className="flex items-center gap-1">
            <FaStar />
            <span className="text-gray-800 font-medium">{rating}</span>
          </div>
          <span className="text-xs text-gray-500">({Math.floor(100 + Math.random() * 100)} reviews)</span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 leading-tight line-clamp-2">{title}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          <FaMapMarkerAlt className="text-red-500" /> {location}
        </p>

        {/* Price */}
        <p className="text-md mt-2">
          <span className="text-gray-600 text-sm">Starting from</span>{' '}
          <span className="text-red-600 text-lg font-bold">PKR {price}</span>
        </p>

        {/* Bottom Info */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
          <div className="flex items-center gap-1"><FaRegClock /> {days} days</div>
          <div className="flex items-center gap-1"><FaUsers /> {guests}</div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleExplore();
            }}
            className="text-white bg-red-500 px-4 py-2 rounded-lg font-semibold w-full hover:bg-red-600 transition"
          >
            Explore Tour →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
