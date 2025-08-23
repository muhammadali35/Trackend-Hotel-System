import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [sortOrder, setSortOrder] = useState("default"); // default, asc, desc
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("https://trackend-hotel-system-id7k.vercel.app/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
      }
    };

    fetchRooms();
  }, []);

  // ✅ Sort rooms before rendering
  const sortedRooms = [...rooms].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;   // Low → High
    if (sortOrder === "desc") return b.price - a.price; // High → Low
    return 0; // default (no sorting)
  });

  const handleExplore = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-6 underline underline-offset-8 decoration-[#F2D17A]">
        🏨 Our Available Rooms
      </h2>

      {/* 🔽 Sorting Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {rooms.length === 0 ? (
        <p className="text-center text-gray-600">No rooms available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sortedRooms.map((room) => (
            <div
              key={room._id}
              onClick={() => handleExplore(room._id)}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer bg-gray-50"
            >
              <img
                src={`https://trackend-hotel-system-id7k.vercel.app/${room.images[0]}`}
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
