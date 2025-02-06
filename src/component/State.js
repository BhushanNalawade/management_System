import React from "react";
import CityList from "./City";
import '../App.css';

function StateList({countryIndex , countries , setCountries}){
           const addStates = () => {
                const name = prompt("add a state");
                if(name) {
                    const updateCountries = [...countries];
                    // console.log(updateCountries[countryIndex].states(name));
                    updateCountries[countryIndex].states.push({name , cities:[]});

                    setCountries(updateCountries);
                    
                }
           }

           const editState = (stateindex) =>{
                const newName = prompt("edit state name");
                if(window.confirm("Are you sure")){
                const updateCountries = [...countries];
                updateCountries[countryIndex].states[stateindex].name = newName;
                setCountries(updateCountries);
                }
           }

           const deleteState = (stateindex) => {
            if (window.confirm("Are you sure you want to delete this country?")){
                const updateCountries = [...countries];
                updateCountries[countryIndex].states.splice(stateindex , 1);
                setCountries(updateCountries);
            }
                
           }

        return (
            <>
               <div className="sub-container">
                <h4>States</h4>
                <button onClick={addStates}>add state</button>
               
                {
                    countries[countryIndex].states.map((state , stateindex)=>(
                        <div key={stateindex} className="list-item">
                                <span>{state.name}</span>

                                <button onClick={()=> editState(stateindex)}>editState</button>
                                <button onClick={()=> deleteState(stateindex)}>deleteState</button>

                                <CityList 
                                    countryIndex = {countryIndex}
                                    stateIndex = {stateindex}
                                    countries = {countries}
                                    setCountries = {setCountries}
                                
                                />
                        </div>


                    ))
                }
              </div>
               
            </>

        );


}


export default StateList;