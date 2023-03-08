import React, { useState } from 'react'
import {data} from '../../dummy'
import './index.css'

export default function Dropdown() {
    const [stateName,setActiveState] = useState('');
    const [isChanged,setIsChanged] = useState(false)
    const [stateData,setStateData] = useState(data)
    
    function handleStatusChange(stateName, index) {
        // Create a copy of the state object
        const newData = { ...data };
    
        // Update the status of the item at the specified index
        newData[stateName][index].status = newData[stateName][index].status === "not_selected" ? "selected" : "not_selected";
        // Update the state with the new data object
        setStateData(newData);
      }
    
  return (
    <div  className='region-select-container'>
      <div className='region-state'>
        {
            Object.keys(stateData).map(state => {
                return(
                    <button 
                    value={state} 
                    onClick={(e)=>{setActiveState(e.target.value)}} 
                    className={`${state === stateName ? `active`:''} state-btn`}>
                        {state}
                    </button>
                )
            })
        }
      </div>
      <div className={stateName ?'state-city' : ''}>
        {stateName ? 
        data[stateName].map((city,i) => {
            return(
                <div className={`input__group ${city["status"] === "selected" ? "checked" : ""}`} onChange={()=>{setIsChanged(true)}}>
                    <input type="checkbox" checked={city["status"] === "selected" ? true :false} id={'city-'+i} 
                    onChange={()=>{handleStatusChange(stateName, i)}}
                    /> 
                    <label htmlFor={'city-'+i}>{city.city}</label>
                </div>
            )
        }):(
            <div></div>
        )
        }
      </div>
    </div>
  )
}
