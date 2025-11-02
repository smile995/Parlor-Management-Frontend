

const PaymentPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Secure Payment
      </h2>

      <form className="space-y-5">
        {/* Name on Card */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name on Card
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-pink-400 transition">
              <input type="radio" name="paymentMethod" value="card" defaultChecked />
              <span>Credit / Debit Card</span>
            </label>
            <label className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-pink-400 transition">
              <input type="radio" name="paymentMethod" value="bkash" />
              <span>bKash / Nagad</span>
            </label>
          </div>
        </div>

        {/* Card Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={19}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
          />
        </div>

        {/* Expiry Date & CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="password"
              placeholder="123"
              maxLength={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
            />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Amount
          </label>
          <input
            type="text"
            value="৳ 1500.00"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
