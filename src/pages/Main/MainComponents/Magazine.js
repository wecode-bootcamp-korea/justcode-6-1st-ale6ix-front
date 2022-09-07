import React, { useEffect, useState } from "react";
import Title from "./Title";
import "./Magazine.scss";
import MagazineImg from "./MagazineImg";

function Magazine() {
  const [magazine, setMagazine] = useState([]);
  const title = "MAGAZINE";
  const color = "#000";

  useEffect(() => {
    fetch("/data/main.json")
      .then((res) => res.json())
      .then((data) => setMagazine(data.magazine));
  }, []);

  return (
    <section className="Magazine-container">
      <Title title={title} color={color} />
      <div className="Magazine-list-container">
        {magazine?.map((data) => {
          return <MagazineImg magazine={data} />;
        })}
      </div>
    </section>
  );
}

export default Magazine;
