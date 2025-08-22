import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Home/Nav";
import Footer from "../Footer";

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`https://trackend-hotel-system-id7k.vercel.app/api/rooms/${id}`);
        if (!response.ok) throw new Error("Room not found");
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="bg-zinc-100 min-h-screen py-14 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center text-gray-600 text-lg">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-600 font-semibold text-lg">{error}</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl shadow-xl border border-zinc-200">
              {/* Left Side Image */}
              <div className="rounded-xl overflow-hidden shadow-md h-[350px]">
                <img
                  src={`https://trackend-hotel-system-id7k.vercel.app/${room?.images?.[0] || "placeholder.jpg"}`}
                  alt={room?.roomType}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Right Side Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-zinc-800 mb-4 underline underline-offset-8 decoration-[#F2D17A]">
                    {room.roomType}
                  </h1>

                  <p className="text-md text-zinc-600 mb-6 whitespace-pre-line break-words">
                    {room.description}
                  </p>

                  <div className="space-y-3 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-3 bg-yellow-100 p-3 rounded-lg font-semibold text-yellow-800 shadow">
                      💵 Price: <span className="text-lg">PKR {room.price}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {room.facilities?.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-100 p-2 rounded-md"
                        >
                          <span className="text-green-500">✔</span>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/booking/${room._id}`)}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-xl shadow hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 text-lg"
                >
                  🛏️ Book This Room
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoomDetail;
