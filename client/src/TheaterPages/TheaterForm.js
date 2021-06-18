import Axios from "axios";
import { useState } from "react";

export const TheaterForm = (props) => {
  // const [theaterState, setTheaterState] = useState({});
  const [name, setName] = useState("");
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/theaters", { name: name })
      .then((res) => {
        console.log(res.data);
        props.history.goBack();
      })
      .catch((err) => alert(err));
  };

  // const handleChange = (e) => {
  // setTheaterState({ ...theaterState, [e.target.name]: e.target.value });
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add theater</button>
      </form>
    </>
  );
};
