
import React from "react";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

export default function CityList({ cities, isLoading }) {
    if (isLoading) {
        return <Spinner />;
    }
  return (
    <>
      <ul className={styles.cityList}>
       <CityItem cities={cities} key={cities.id}/>
      </ul>
    </>
  );
}
