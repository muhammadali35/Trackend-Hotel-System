import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Home/Nav";
import Footer from "../Footer";
import forge from "node-forge";

// 🔐 Public Key
const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBDEQMUSFducfIANbnb2UDV
W3AVbvV4Awe/DjJCTJq7ESmR+yM668EVPENtHtE5VrNX/aXtTs8q9wKYvfbHOCLv
IhybCTkqD7s+jyTQhXDNJFAe0RG8xpTs1gQDau+i5WFxfWT++0WUajZuDhVz/zAQ
S9Ltk6MACNpgMPF9wMHKXQQNQVIo040k2UqvY5zsP8rCm2R3haZqBzE/jBxwjTka
xvOU+UWHiTxxwuhupbGCOF9DPL1K8oZeA8tIu8nvjPfTqyFP15I+eJuQZNMp7238
nC+TaFTwFefy7Uckj+y552XAtyEq9nBFrdIVlpC6VwrhL6kyXjerha2YDxNjiAx5
AgMBAAE=
-----END PUBLIC KEY-----`;

const Confirmation = () => {
  const location = useLocation();
  const { room, formData } = location.state || {};
  const [showForm, setShowForm] = useState(false);
  const [paid, setPaid] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const totalPrice = room?.price * formData?.persons;

  if (!room || !formData)
    return <div className="p-6 text-center text-red-600">Invalid confirmation data.</div>;

  const handlePaymentClick = () => setShowForm(true);
  const handleCardChange = (e) =>
    setCardData({ ...cardData, [e.target.name]: e.target.value });

  const handlePay = async (e) => {
    e.preventDefault();
    try {
      const rsa = forge.pki.publicKeyFromPem(publicKeyPem);
      const encrypted = rsa.encrypt(JSON.stringify(cardData));
      const encryptedCardData = forge.util.encode64(encrypted);

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room, formData, totalPrice, encryptedCardData }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to confirm booking");

      setPaid(true);
      setShowForm(false);
    } catch (err) {
      alert("Payment failed. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen mt-24 px-4 py-16 bg-gradient-to-b from-yellow-100 to-white">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            {paid ? "✅ Payment Successful!" : "📝 Confirm Your Booking"}
          </h2>

          <div className="mb-4">
            {!paid ? (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded">
                Please complete your payment to confirm this booking.
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded">
                Your booking is confirmed. Thank you!
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4 mb-6 flex gap-4">
            <img
              src={`http://localhost:5000/${room.images?.[0]}`}
              alt={room.roomType}
              className="w-32 h-24 rounded object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{room.roomType}</h3>
              <p className="text-sm text-gray-600">{room.description.slice(0, 150)}...</p>
              <p className="text-sm mt-1">
                <strong>Persons:</strong> ×{formData.persons}
              </p>
            </div>
            <div className="text-right text-yellow-600 text-lg font-bold">
              PKR {totalPrice}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Your Info</h4>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Guests:</strong> {formData.persons}</p>
          </div>

          {!paid && (
            <button
              onClick={handlePaymentClick}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              Pay Now – PKR {totalPrice}
            </button>
          )}
        </div>
      </section>

      {/* Payment Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
            <h3 className="text-xl font-bold text-yellow-600 mb-6 text-center">💳 Card Payment</h3>
            <form onSubmit={handlePay} className="space-y-5">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  value={cardData.name}
                  onChange={handleCardChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g. Ali Khan"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Card Number</label>
                <input
                  type="text"
                  name="number"
                  value={cardData.number}
                  onChange={handleCardChange}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-sm text-gray-600 block mb-1">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardChange}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-sm text-gray-600 block mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold"
                >
                  Pay PKR {totalPrice}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Confirmation;
