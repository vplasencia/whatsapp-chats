import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import React, { useRef, useEffect, useState } from "react";

export default function ChatForm() {
  const inputRef = useRef();
  const [phoneValue, setPhoneValue] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(phoneValue);
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
          {/* <input
            className="h-12
            px-3
            w-full
            border
            rounded-lg
            focus:outline-none
            bg-transparent
            border-cyan-600 focus:border-cyan-400"
            id="phone"
            type="phone"
            name="phone"
          /> */}
          <div>
            <PhoneInput
              placeholder="+12 3 4567890"
              value={phoneValue}
              onChange={setPhoneValue}
              autoComplete="off"
              ref={inputRef}
            />
          </div>
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
            border-cyan-600
            bg-transparent

            "
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