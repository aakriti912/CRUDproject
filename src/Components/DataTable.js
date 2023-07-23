import React, { useState } from "react";

const DataTable = ({ data, onDeleteEntry, onEditEntry }) => {
  const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (index) => {
    // Save the updated entry
    const updatedEntry = data[index];
    onEditEntry(index, updatedEntry);

  
    setEditIndex(-1);
  };

  return (
    <table className="table-auto w-full mt-[50px]">
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
          <th className="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">
              {editIndex === index ? (
                <input
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    onEditEntry(index, { ...entry, name: e.target.value })
                  }
                  className="w-full"
                />
              ) : (
                entry.name
              )}
            </td>
            <td className="border px-4 py-2">
              {editIndex === index ? (
                <input
                  type="email"
                  value={entry.email}
                  onChange={(e) =>
                    onEditEntry(index, { ...entry, email: e.target.value })
                  }
                  className="w-full"
                />
              ) : (
                entry.email
              )}
            </td>
            <td className="border px-4 py-2">
              {editIndex === index ? (
                <input
                  type="tel"
                  pattern="[0-9]{7,}"
                  value={entry.phoneNumber}
                  onChange={(e) =>
                    onEditEntry(index, {
                      ...entry,
                      phoneNumber: e.target.value,
                    })
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
              {editIndex === index ? (
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
            <td className="border px-4 py-2">
              <button
                onClick={() => onDeleteEntry(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
