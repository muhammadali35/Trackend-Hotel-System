import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Home/Nav";
import Footer from "../Footer";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: 1,
  });

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/rooms/${id}`);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "persons" ? Math.max(1, parseInt(value) || 1) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { room, formData } });
  };

  const totalCost = room?.price * formData.persons;

  if (loading)
    return <div className="p-6 text-center text-gray-500 text-lg">Loading...</div>;
  if (error || !room)
    return <div className="p-6 text-center text-red-600 text-xl">Room not found</div>;

  return (
    <>
      <Navbar />
      <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-yellow-50 to-white mt-20">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 border border-gray-200">
          {/* Left: Room Info */}
          <div className="p-8 bg-gradient-to-br from-white to-yellow-100 border-r border-gray-100">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">
              {room.roomType}
            </h2>
            <img
              src={`http://localhost:5000/${room.images?.[0]}`}
              alt={room.roomType}
              className="rounded-xl w-full h-64 object-cover shadow-md mb-6"
            />

            <div className="space-y-3 text-gray-700 text-sm">
              <p className="font-medium text-gray-800">Facilities:</p>
              <ul className="list-disc list-inside pl-1">
                {room.facilities?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-white border border-yellow-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing Summary</h3>
              <div className="text-sm space-y-1 text-gray-600">
                <p>💵 <strong>Per Person:</strong> PKR {room.price}</p>
                <p>👥 <strong>Guests:</strong> {formData.persons}</p>
                <p className="text-lg font-bold text-yellow-700 mt-2">
                  Total: PKR {totalCost}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="p-8 bg-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 300 1234567"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label htmlFor="persons" className="text-sm font-medium text-gray-600">Number of Guests</label>
                <input
                  type="number"
                  name="persons"
                  id="persons"
                  min="1"
                  max="10"
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg shadow-lg font-semibold text-lg transition-all"
              >
                Confirm Booking – PKR {totalCost}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
