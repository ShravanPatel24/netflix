import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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

  const result = await fetch(url, options);
  const arrayData = await result.json();
  const main_data = arrayData[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          {" "}
          Netflix \ <span> {main_data.type} </span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              width={600}
              height={300}
            />
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
