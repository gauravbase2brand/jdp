import React from 'react'

const Otp = () => {
  return (
    <div className="max-w-sm mx-auto border mt-20 rounded">
      <form className="shadow-md px-4 py-6">
        <div className="flex justify-center gap-2 mb-6">
          <input
            className="w-12 h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Verify
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4"
            href="#"
          >
            Resend OTP
          </a>
        </div>
      </form>
    </div>
  )
}

export default Otp
