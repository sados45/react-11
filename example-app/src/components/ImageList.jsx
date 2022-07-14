import React from 'react'

export default function ImageList({images}) {

    console.log(images);
  return (
    <div>
       {

        images.map((image) => ( 
            <img 
            src={image.urls.regular}
            key={images.id}
            alt ={images.alt_description}
            />

        ))
            
       }
    
    </div>
  );
}
