import React, { useState } from "react";

const FormInput = ({ onAddEntry }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDOB] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState(1); // Default province is 1 (you can change as required)
  const [country, setCountry] = useState("Nepal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber) return;

    const entry = {
      name,
      email,
      phoneNumber,
      dob,
      address: {
        city,
        district,
        province,
        country,
      },
    };

    onAddEntry(entry);
    // Reset the form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDOB("");
    setCity("");
    setDistrict("");
    setProvince(1);
    setCountry("Nepal");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          pattern="[0-9]{7,}"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date of Birth:
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City:
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          District:
        </label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Province:
        </label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={1}>Province 1</option>
          <option value={2}>Province 2</option>
          <option value={3}>Bagmati Province</option>
          <option value={4}>Gandaki Province</option>
          <option value={5}>Province 5</option>
          <option value={6}>Karnali Province</option>
          <option value={7}>Sudurpashchim Province</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country:
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-[10px]"
      >
        Add Entry
      </button>
    </form>
  );
};

export default FormInput;
