import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./DataTable";  // Adjust the import path according to your project structure

const App2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  if (loading) return <div><h1>Loading...</h1></div>;
  if (error) return <div><h1>Error!</h1></div>;

  return (
    <div>
      <DataTable rows={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App2;
