import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InputBox from "./InputBox";
import Table from "./Table";
import Title from "./Title";
import Story from "./Story";
import NewText from "./NewText";
import Navbar from "./Navbar";

function Crud() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const[image,setImage]=useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);

  const activeEditMode = () => {
    setEditMode(true);
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const setValuenull = () => {
    setName("");
    setEmail("");
    setCity("");
    setAddress("");
    setPrice("");
    setImage("");

  };
  async function getDataHandler() {
    axios
      .get("https://63be8dd3e348cb076211daa0.mockapi.io/test2")
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }

  async function putDataHandler() {
    let newData = {
      id: id,
      name: name,
      image:image,
      price:price,
      city: city,
      email: email,
      address:address
    };
    axios
      .put(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`, newData)
      .then(() => getDataHandler(), setValuenull())
      .catch((error) => console.log(error));
  }
  async function postDataHandler(e) {
    e.preventDefault();
    let newData = {
      id: id,
      name: name,
      image:image,
      price:price,
      city: city,
      email: email,
      address:address
    };
    axios
      .post("https://63be8dd3e348cb076211daa0.mockapi.io/test2", newData)
      .then(() => getDataHandler(), setValuenull())
      .catch((error) => console.log(error));
  }

  async function deleteDataHandler(id) {
    axios
      .delete(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`)
      .then(() => getDataHandler())
      .catch((error) => console.log(error));
  }
  return (
    <div>
      
      <Table
        data={data}
        removeData={deleteDataHandler}
        setValueTrue={activeEditMode}
        setname={setName}
        setemail={setEmail}
        setcity={setCity}
        setid={setId}
        setimage={setImage}
        setaddress={setAddress}
        setprice={setPrice}
      />
      <InputBox
        name={name}
        email={email}
        city={city}
        price={price}
        image={image}
        address={address}
        setname={setName}
        setemail={setEmail}
        setcity={setCity}
        setaddress={setAddress}
        setprice={setPrice}
        setimage={setImage}
        onSubmit={postDataHandler}
        editHandler={putDataHandler}
      />
      <br />

    </div>
  );
}
export default Crud;
