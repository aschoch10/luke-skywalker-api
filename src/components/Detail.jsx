import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Detail = () => {
    const { category, id } = useParams();
    let [axiosInfo, setAxiosInfo] = useState({})


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((response) => {
                console.log("response from axios call..>>>>", response.data)
                setAxiosInfo(response.data)
            })
            .catch(err => console.log("There was an error>>>", err))
    }, [category, id])


    return (
        <div>
            {category==="people" ?
                <>
                    <h2>Name: {axiosInfo.name}</h2>
                    <h2>Height: {axiosInfo.height}</h2>
                    <h2>Mass: {axiosInfo.mass}</h2>
                    <h2>Eye Color: {axiosInfo.eye_color}</h2>
                </>
                : category==="planets" ?
                <>
                    <h2>Name: {axiosInfo.name}</h2>
                    <h2>Diameter: {axiosInfo.diameter}</h2>
                    <h2>population: {axiosInfo.population}</h2>
                    <h2>rotation period: {axiosInfo.rotation_period}</h2>
                </>
                : category==="films" ?
                <>
                    <h2>Name: {axiosInfo.title}</h2>
                    <h2>Height: {axiosInfo.director}</h2>
                    <h2>Mass: {axiosInfo.producer}</h2>
                    <h2>Eye Color: {axiosInfo.release_date}</h2>
                </>: category==="species" ?
                <>
                    <h2>Name: {axiosInfo.name}</h2>
                    <h2>classification: {axiosInfo.classification}</h2>
                    <h2>designation: {axiosInfo.designation}</h2>
                    <h2>language: {axiosInfo.language}</h2>
                </>: category==="starships" ?
                <>
                    <h2>Name: {axiosInfo.name}</h2>
                    <h2>model: {axiosInfo.model}</h2>
                    <h2>passengers: {axiosInfo.passengers}</h2>
                    <h2>cargo capacity: {axiosInfo.cargo_capacity}</h2>
                </>: category==="vehicles" ?
                <>
                    <h2>Name: {axiosInfo.name}</h2>
                    <h2>model: {axiosInfo.model}</h2>
                    <h2>manufacturer: {axiosInfo.manufacturer}</h2>
                    <h2>crew: {axiosInfo.crew}</h2>
                </>
                :
                <>
                <p>These aren't the droids you're looking for</p>
                <img src="https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg" alt="" />
                </>
            }
        </div>
    );
};

export default Detail;
