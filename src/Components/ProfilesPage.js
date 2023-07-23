import React, { useState } from "react";

const ProfilesPage = ({ data, onEditEntry }) => {
  const [editedData, setEditedData] = useState([...data]);
  const [editedIndex, setEditedIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditedIndex(index);
  };

  const handleSave = (index) => {
    const updatedEntry = editedData[index];
    onEditEntry(index, updatedEntry);
    setEditedIndex(-1);
  };

  const handleChange = (index, field, value) => {
    const newData = [...editedData];
    newData[index][field] = value;
    setEditedData(newData);
  };

  return (
    <table className="w-full bg-white shadow-md rounded my-4 mt-[50px]">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Phone Number</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">District</th>
          <th className="px-4 py-2">Province</th>
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">Edit</th>
        </tr>
      </thead>
      <tbody>
        {editedData.map((entry, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">
              {editedIndex === index ? (
                <input
                  type="text"
                  value={entry.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full"
                />
              ) : (
                entry.name
              )}
            </td>
            <td className="border px-4 py-2">
              {editedIndex === index ? (
                <input
                  type="email"
                  value={entry.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                  className="w-full"
                />
              ) : (
                entry.email
              )}
            </td>
            <td className="border px-4 py-2">
              {editedIndex === index ? (
                <input
                  type="tel"
                  pattern="[0-9]{7,}"
                  value={entry.phoneNumber}
                  onChange={(e) =>
                    handleChange(index, "phoneNumber", e.target.value)
                  }
                  className="w-full"
                />
              ) : (
                entry.phoneNumber
              )}
            </td>
            <td className="border px-4 py-2">{entry.address.city}</td>
            <td className="border px-4 py-2">{entry.address.district}</td>
            <td className="border px-4 py-2">{entry.address.province}</td>
            <td className="border px-4 py-2">{entry.address.country}</td>
            <td className="border px-4 py-2">
              {editedIndex === index ? (
                <button
                  onClick={() => handleSave(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfilesPage;
