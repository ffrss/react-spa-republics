import React from "react";
import { IFilteredTableProps } from "../../data/models"; // Предполагается, что у вас есть соответствующие типы
import styles from "./FilteredTable.module.scss";

const FilteredTable: React.FC<IFilteredTableProps> = ({
  data,
  selectedRegions,
}) => {
  const filteredData = data.filter((item) =>
    selectedRegions?.includes(item["Регион"])
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Регион</th>
          <th>Год</th>
          <th>Показатель</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item["Регион"]}</td>
            <td>{item["Год"]}</td>
            <td>{item["Показатель"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilteredTable;
