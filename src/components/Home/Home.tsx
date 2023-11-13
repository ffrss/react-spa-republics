import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Table from "../Table/Table";
import styles from "./Home.module.scss";
import data from "/src/data/csvjson.js";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Тестовое задание по Frontend разработке</h1>
      <main>
        <Table data={data} />
        <Dropdown data={data} />
      </main>
    </div>
  );
};

export default Home;
