// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const{ images, isLoading } = useFetchGifs( category );
  // console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h3>Cargando...</h3> 
      }
     
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
