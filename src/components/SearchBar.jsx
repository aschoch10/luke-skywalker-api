import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    //state variable for categories/api endpoint
    let [arrayOfCategories, setArrayOfCategories] = useState([])
    //state variables to hold information that comes from the form 
    let [selectedCat, setSelectedCat] = useState("people")
    let [id, setId] = useState (null)
    //start useHistory for redirects
    const history = useHistory();

    //anonymous callback arrow function
    useEffect(() => {
        //axios api call to the starwars api
        axios.get("https://swapi.dev/api/")
            .then(response => {
                // console.log("response >>>>", response)
                //finding the endpoints
                // console.log(Object.keys(response.data))
                //setting categories to be the keys that I found with the consolelog
                setArrayOfCategories(Object.keys(response.data))
                //starts off with the 0 index popsition selected in the form 
                setSelectedCat(Object.keys(response.data)[0])
            })
            .catch(err => {
                console.log("error:", err)
            })
    }, [])

    const Search=(e)=>{
        e.preventDefault()
        console.log("Form successfully submitted")
        history.push(`/${selectedCat}/${id}`)
    }


    return (
        <div>
            <form onSubmit={Search}>
                <div className='d-flex'>
                    <div className='form-group'>
                        <label htmlFor="">Search for:</label>
                        <select onChange={(e)=>{setSelectedCat(e.target.value)}}className="form-select" name="" id="">
                            {
                                arrayOfCategories.map((category, i)=>{
                                    return (
                                        <option key={i} value={category}>{category}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Id</label>
                        <input onChange={(e)=>{setId(e.target.value)}}className="form-control" type="number" name="" id="" />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-warning">Search!</button>
                </div>
            </form>
        </div>

    );
};

export default SearchBar;
