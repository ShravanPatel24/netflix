import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
import axios from "axios";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = "https://netflix54.p.rapidapi.com/search/";
  const options = {
    method: "GET",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "409324c4fcmshc98c1354e19dfdcp18be2ejsnac8ff9e2fe34",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const result = await axios.get(url, options);
  const arrayData = result.data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {arrayData.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
