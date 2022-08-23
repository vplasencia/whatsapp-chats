import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import React, { useRef, useEffect, useState } from "react";

export default function ChatForm() {
  const inputRef = useRef();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const link = `https://api.whatsapp.com/send?phone=${phone}${
    message && `&text=${encodeURIComponent(message)}`
  }`;

  const validatePhoneNumber = () => {
    if (isPossiblePhoneNumber(phone)) return true;
    setError("Invalid Phone Number");
    return false;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (validatePhoneNumber(phone)) {
      console.log(phone);
      console.log(message);
      window.location.assign(link);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center md:my-5 py-5">
      <form
        className="space-y-10"
        noValidate
        autoComplete="off"
        onSubmit={sendMessage}
      >
        <div className="grid space-y-2">
          <label htmlFor="phone" className="text-lg">
            Enter phone number
          </label>
          <PhoneInput
            placeholder="+12 3 4567890"
            value={phone}
            onChange={setPhone}
            autoComplete="off"
            ref={inputRef}
          />
        </div>
        <div className="grid space-y-2">
          <label htmlFor="message" className="text-lg">
            Enter Message <span className="text-sm">(Optional)</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols="50"
            placeholder="Write a message..."
            className="
            h-48
            p-3
            w-full
            border
            rounded-lg
            focus:outline-none
            focus:border-cyan-400
            border-cyan-600
            bg-transparent

            "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="border border-cyan-500 text-slate-900 text-lg font-semibold w-full py-3 px-3 rounded-lg bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50
            transition-shadow"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
