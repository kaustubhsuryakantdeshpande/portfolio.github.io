import React, { useState } from "react";

export default function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        {/* About Me Section */}
        <h1 className="text-2xl text-gray-600 dark:text-orange-400 font-bold mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-500 dark:text-teal-400 font-semibold mb-12 px-4">
          I'm specializing in Android development that’s efficient, thoughtful, and crafted with intention. My mission? Bridging aesthetic UI with rock-solid architecture. I believe in writing clean, maintainable code and creating experiences that feel good to use. Whether it’s scaling an app from scratch, mapping out intuitive user journeys, or experimenting with fresh design patterns—I'm all in.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 mx-auto max-w-2xl"
        >
          <h3 className="text-3xl font-bold text-teal-600 text-center mb-4">
            Contact Me
          </h3>

          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Sam"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Altman"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Company Name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Open AI"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="sam.altman@openai.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="(+91) 123654789"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Dear Kaustubh,  
                We want you to helm the future of intelligence — ready to accept the CEO seat?"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
