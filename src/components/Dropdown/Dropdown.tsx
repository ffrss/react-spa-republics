import React, { useState } from "react";
import { IPropsData } from "../../data/models";
import styles from "./Dropdown.module.scss";
import FilteredTable from "../FilteredTable/FilteredTable";
import LineChart from "../LineChart/LineChart";

const Dropdown: React.FC<IPropsData> = ({ data }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedRegions(selectedOptions);
  };

  const calculateAverage = () => {
    const selectedData = data.filter(
      (item) => selectedRegions.includes(item["Регион"]) && item["Год"] === 2023
    );
    if (selectedData.length === 0) {
      return "Нет данных";
    }
    const sum = selectedData.reduce(
      (total, item) => total + item["Показатель"],
      0
    );
    const average = sum / selectedData.length;
    return average.toFixed(2);
  };

  const averageValue = parseFloat(calculateAverage());
  const averageStyle: React.CSSProperties = {
    color: averageValue < 58.88 ? "red" : "green",
  };

  return (
    <>
      <div className={styles.container}>
        <label>Выберите регионы:</label>
        <select multiple onChange={handleRegionChange}>
          {data
            .reduce((acc: string[], item) => {
              if (item["Год"] === 2023 && !acc.includes(item["Регион"])) {
                acc.push(item["Регион"]);
              }
              return acc;
            }, [])
            .map((region: string, index: number) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
        </select>
        <span className={styles.container__info}>
          *Через Ctrl можно выбрать несколько регионов
        </span>
        <div>
          {selectedRegions.length > 0 && (
            <p className={styles.container__average}>
              Среднее значение за 2023 год:
              <span style={averageStyle}>{averageValue}</span>
            </p>
          )}
        </div>
        <FilteredTable data={data} selectedRegions={selectedRegions} />
        <LineChart
          data={data}
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </div>
    </>
  );
};

export default Dropdown;
