import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
      }
    };

    fetchRooms();
  }, []);

  const handleExplore = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10 underline underline-offset-8 decoration-[#F2D17A]">
        🏨 Our Available Rooms
      </h2>

      {rooms.length === 0 ? (
        <p className="text-center text-gray-600">No rooms available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room._id}
              onClick={() => handleExplore(room._id)}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer bg-gray-50"
            >
              <img
                src={`http://localhost:5000/${room.images[0]}`}
                alt={room.roomType}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">{room.roomType}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{room.description}</p>
              <p className="mt-2 text-yellow-600 font-bold text-lg">PKR {room.price}</p>
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                {room.facilities.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExplore(room._id);
                  }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-all"
                >
                  Explore Room →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
