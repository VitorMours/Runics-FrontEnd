import './App.css';
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";



function App() {

  const [data, setData] = useState();


  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard/").then((response) => {
    
      console.log(response);
      console.log(response.data);
 
      setData(JSON.stringify(response.data));
    });
  },[])

  return (
    <div className="flex h-full w-full">
      <Button className="content-center align-center justify-center" variant="contained">{data}</Button>
    </div>
  );
}

export default App;
