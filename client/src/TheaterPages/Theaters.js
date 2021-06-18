import Axios from "axios";
import { useEffect, useState } from "react";

export const Theaters = () => {
  const [theaters, setTheaters] = useState([]);
  const getTheaters = async () => {
    try {
      let res = await Axios.get("/api/theaters");
      console.log(res.data);
      setTheaters(res.data);
    } catch (e) {
      console.log("error getting theaters", e);
    }
  };

  useEffect(() => {
    getTheaters();
  }, []);

  const renderTheaters = () => {
    return theaters.map((theater) => (
      <>
        <a href={`/theater/${theater.id}`}>{theater.name}</a>
        <br />
      </>
    ));
  };
  return (
    <>
      {renderTheaters()}
      <h1>Theaters</h1>
    </>
  );
};
