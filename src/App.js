import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import DataTable from "./Components/DataTable";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilesPage from "./Components/ProfilesPage";

const App = () => {
  const [data, setData] = useState([]);

  const handleAddEntry = (entry) => {
    setData((prevData) => [...prevData, entry]);
  };

  const handleDeleteEntry = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleEditEntry = (index, updatedEntry) => {
    setData((prevData) =>
      prevData.map((entry, i) => (i === index ? updatedEntry : entry))
    );
  };

  return (
    <Router>
      <div>
        <h1 className="text-3xl text-center mb-4 font-bold">Form</h1>
        <FormInput onAddEntry={handleAddEntry} />
        <DataTable
          data={data}
          onDeleteEntry={handleDeleteEntry}
          onEditEntry={handleEditEntry}
        />
        <Link to="/profiles">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View Profiles
          </button>
        </Link>
        <Routes>
          <Route
            path="/profiles"
            element={<ProfilesPage data={data} onEditEntry={handleEditEntry} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
