import React, { useState } from "react";

import StateList from "./State";
import '../App.css';


function CountryList({countries , editCountry , deleteCountry  , setCountries}){

    return (
        <>  
        
        <h3>Countries</h3>
        {countries.length===0 ? <p> no country listed </p> : null}

        {countries.map((country , index) => (
            <div key={index} className="list-item" >
                <span>{country.name}</span>

                <button onClick = {()=> editCountry(index)}>editCountry</button>
                <button onClick={()=>deleteCountry(index)}>deleteCountry</button>
                <StateList 

                    countryIndex = {index}
                    countries = {countries}
                    setCountries = {setCountries}
                
                />
            </div>
        ))}
       
        </>
    );
}

export default CountryList;