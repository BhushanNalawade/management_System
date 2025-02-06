import React, { useState , useEffect } from "react";
import CountryList from "./component/Country";
import './App.css';

function App() {
  const [countries , setCountries] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("countries");
    if (savedData) {
      setCountries(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const addCountry = () => {

    const name = prompt("enter a country name");
    if(name){
      console.log(countries);
      
      setCountries([...countries , {name , states:[]}]);
    }
  }

  const editCountry = (index) => {
    const newName = prompt("edit country name" );
    if(window.confirm("Are you sure")){
      const updateCountries = [...countries];
      updateCountries[index].name = newName;
      console.log(updateCountries);
      
      setCountries(updateCountries);
    }
  }

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")){
      const updateCountries = [...countries];
      updateCountries.splice(index , 1);
      setCountries(updateCountries);

    }
      
  }

  return (
    <>
      <h1>Country , State , City Management</h1>
      <div className="container">
      <button onClick={addCountry}>add country</button>
      <CountryList 
        countries = {countries}
        editCountry = {editCountry}
        deleteCountry = {deleteCountry}
        setCountries = {setCountries}
      />
      </div>
    </>
  );
}

export default App;
