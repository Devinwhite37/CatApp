import React, { createContext, useState } from "react";
import axios from "axios";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    if(query == "random"){
      axios
      .get(
        `https://cataas.com/api/cats?limit=4&skip=0`
      )
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
    }
    else{
      axios
        .get(
          `https://cataas.com/api/cats?limit=4&skip=0&tags=${query}`
        )
        .then(response => {
          console.log(query)
          setImages(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    };
  }
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
