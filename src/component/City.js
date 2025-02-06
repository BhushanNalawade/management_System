import React from "react";
import '../App.css';

function CityList({countryIndex, stateIndex , countries , setCountries}){
    const addCity = () => {
        const name = prompt("enter city name");
        const updateCountries = [...countries];
        updateCountries[countryIndex].states[stateIndex].cities.push(name);
        setCountries(updateCountries);
        console.log(updateCountries);
        
    }
    const editCity = (cityIndex)=> {
        const newName = prompt("edit city name");
        if(window.confirm("Are you sure")){
            const updateCountries = [...countries];
            updateCountries[countryIndex].states[stateIndex].cities[cityIndex] = newName;
            console.log(updateCountries);
            
            setCountries(updateCountries);
        }
       

    }


    const deleteCity = (cityIndex)=>{
        if (window.confirm("Are you sure you want to delete this country?")){

        
        const updateCountries = [...countries];
        updateCountries[countryIndex].states[stateIndex].cities.splice(cityIndex , 1);
        setCountries(updateCountries);
        }
    }

    return (
        <> 
         <div className="sub-container">
            <h5>add Cities</h5>
            <button onClick={addCity}>Add city</button>
            {
                countries[countryIndex].states[stateIndex].cities.map((city , cityIndex)=> (
                    <div key={cityIndex} className="list-item">
                        <span>{city}</span>
                        <button onClick={() => editCity(cityIndex)}>Edit</button>
                        <button onClick={() => deleteCity(cityIndex)}>Delete</button>
                    </div>
                ))
            }
            </div>

        </>
    );



}


export default CityList;