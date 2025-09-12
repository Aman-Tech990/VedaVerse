import React, { useState } from "react";
import { CreditCard, MapPin, User, Landmark, Smartphone } from "lucide-react";

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        address: "",
        upiId: "",
        bank: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Payment Successful via ${paymentMethod.toUpperCase()}!`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl p-8 grid md:grid-cols-2 gap-8">

                {/* Payment Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose Payment Method</h2>

                    {/* Payment Method Tabs */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => setPaymentMethod("card")}
                            className={`flex-1 py-2 rounded-lg font-semibold border ${paymentMethod === "card"
                                ? "bg-purple-950 text-white"
                                : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            <CreditCard className="inline w-5 h-5 mr-2" /> Card
                        </button>
                        <button
                            onClick={() => setPaymentMethod("upi")}
                            className={`flex-1 py-2 rounded-lg font-semibold border ${paymentMethod === "upi"
                                ? "bg-purple-950 text-white"
                                : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            <Smartphone className="inline w-5 h-5 mr-2" /> UPI
                        </button>
                        <button
                            onClick={() => setPaymentMethod("netbanking")}
                            className={`flex-1 py-2 rounded-lg font-semibold border ${paymentMethod === "netbanking"
                                ? "bg-purple-950 text-white"
                                : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            <Landmark className="inline w-5 h-5 mr-2" /> Net Banking
                        </button>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {paymentMethod === "card" && (
                            <>
                                <div>
                                    <label className="text-gray-700 mb-1 flex items-center gap-2">
                                        <User className="w-5 h-5" /> Name on Card
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Arjun"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700 mb-1 flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" /> Card Number
                                    </label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block text-gray-700 mb-1">Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiry"
                                            value={formData.expiry}
                                            onChange={handleChange}
                                            placeholder="MM/YY"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-gray-700 mb-1">CVV</label>
                                        <input
                                            type="password"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            placeholder="123"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {paymentMethod === "upi" && (
                            <div>
                                <label className="text-gray-700 mb-1 flex items-center gap-2">
                                    <Smartphone className="w-5 h-5" /> UPI ID
                                </label>
                                <input
                                    type="text"
                                    name="upiId"
                                    value={formData.upiId}
                                    onChange={handleChange}
                                    placeholder="example@upi"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    required
                                />
                            </div>
                        )}

                        {paymentMethod === "netbanking" && (
                            <div>
                                <label className="text-gray-700 mb-1 flex items-center gap-2">
                                    <Landmark className="w-5 h-5" /> Select Bank
                                </label>
                                <select
                                    name="bank"
                                    value={formData.bank}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    required
                                >
                                    <option value="">-- Choose Bank --</option>
                                    <option value="SBI">State Bank of India</option>
                                    <option value="HDFC">HDFC Bank</option>
                                    <option value="ICICI">ICICI Bank</option>
                                    <option value="AXIS">Axis Bank</option>
                                    <option value="PNB">Punjab National Bank</option>
                                </select>
                            </div>
                        )}

                        <div>
                            <label className="text-gray-700 mb-1 flex items-center gap-2">
                                <MapPin className="w-5 h-5" /> Billing Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Bhubaneswar, Odisha"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-950 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors shadow-md"
                        >
                            Pay Now
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span>Product 1</span>
                            <span>₹500</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Product 2</span>
                            <span>₹300</span>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex justify-between font-bold text-gray-800">
                            <span>Total</span>
                            <span>₹800</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentPage;
