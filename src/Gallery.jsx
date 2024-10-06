import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchTerm}`;

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading..</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section>
        <h4>Error: {error.response}</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    <section>
      <h4>No results found...</h4>
    </section>;
  }

  console.log(results);
  console.log("here");
  return (
    <section className="image-container">
      {results.map((item) => {
        const image_url = item?.urls?.regular;
        return (
          <img
            src={image_url}
            key={item.id}
            alt={item.description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
