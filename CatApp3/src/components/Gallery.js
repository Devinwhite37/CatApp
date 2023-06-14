import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import ModalImage from "react-modal-image";


const Gallery = props => {
  const results = props.data;
  let images = [];
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let tags = image.tags;
      let id = image._id;
      let rawdate = image.createdAt;
      let date = rawdate.substring(0,15);
      let url = `https://cataas.com/cat/${id}`;
      
      console.log(<Image url={url} key={id} tags={tags} date={date}/>)
      
      return <Image url={url} key={id} tags={tags} date={date}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  console.log(images)
  return (
    <div>
      <ul>
        {images[0] ? 
        <ModalImage
        small={images[0].props.url}
        large={images[0].props.url}
        alt={"Tags: " + images[0].props.tags + ". Date Created: " + images[0].props.date}
        className="img0"
        /> : null}
      
      {images[1] ? 
        <ModalImage
        small={images[1].props.url}
        large={images[1].props.url}
        alt={"Tags: " + images[1].props.tags + ". Date Created: " + images[1].props.date}
        className="img1"
        /> : null}
      {images[2] ? 
        <ModalImage
        small={images[2].props.url}
        large={images[2].props.url}
        alt={"Tags: " + images[2].props.tags + ". Date Created: " + images[2].props.date}
        className="img2"
        /> : null}
      {images[3] ? 
        <ModalImage
        small={images[3].props.url}
        large={images[3].props.url}
        alt={"Tags: " + images[3].props.tags + ". Date Created: " + images[3].props.date}
        className="img3"
        /> : null}
      </ul>
      {noImages}
    </div>
  );
};


export default Gallery;
