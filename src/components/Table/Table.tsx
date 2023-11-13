import { IPropsData, IdataItem } from "../../data/models";
import styles from "./Table.module.scss";

const Table: React.FC<IPropsData> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Регион</th>
          <th className={styles.table__th_year}>Год</th>
          <th>Показатель</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: IdataItem, index: number) => (
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

export default Table;
