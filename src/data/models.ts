export interface IdataItem {
  Регион: string;
  Год: number;
  Показатель: number;
}

export interface IPropsData {
  data: IdataItem[];
}

export interface IFilteredTableProps {
  data: IdataItem[];
  selectedRegions?: string[];
}
