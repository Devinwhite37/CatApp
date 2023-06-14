import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

var randomTag1 = "random"
var randomTag2 = "fluffy"
var randomTag3 = "cute"
var randomTag4 = "fat"

const Navigation = () => {
  const [random, setRandom] = useState([]);
  const getRandom = () => {
    axios
      .get(
        `https://cataas.com/api/tags`
      )
      .then(response => {
        setRandom(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });  
    }
    randomTag1 = random[Math.floor(Math.random() * random.length)];
    randomTag2 = random[Math.floor(Math.random() * random.length)];
    randomTag3 = random[Math.floor(Math.random() * random.length)];
    randomTag4 = random[Math.floor(Math.random() * random.length)];

    if(randomTag1 == 'undefined' || randomTag1 == undefined){
      randomTag1 = "random";
      randomTag2 = "fluffy";
      randomTag3 = "cute";
      randomTag4 = "fat";
    }

  return (
    <div>
      <button
      className="randomButton"
      type="button"
      name="Random Tag"
      onClick={getRandom}
      >
        Random Tags
        </button>
    <nav className="main-nav">
      <ul>
        <li><NavLink className="nav0" to={`/search/${randomTag1}`} replace>{randomTag1} <br/>Cats</NavLink></li>
        <li><NavLink className="nav1" to={`/search/${randomTag2}`} replace>{randomTag2} <br/>Cats</NavLink></li>
        <li><NavLink className="nav2" to={`/search/${randomTag3}`} replace>{randomTag3} <br/>Cats</NavLink></li>
        <li><NavLink className="nav3" to={`/search/${randomTag4}`} replace>{randomTag4} <br/>Cats</NavLink></li>
      </ul>
    </nav>
    </div>
  );
}
export {randomTag1, randomTag2, randomTag3, randomTag4};
export default Navigation;
