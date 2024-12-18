export interface CommonValidator<T> {
  field: T;
  message: string;
  lastIndex?: number;
  lastParent?: string;
}

export interface CommonTableHeader<T, K extends keyof T = keyof T>
  extends TableHeaderProps<K> {}

export interface TableHeaderProps<T> {
  id: T | "expandable" | "actions";
  headerName: string;
  width?: string;
  headerAlign?: "left" | "center" | "right";
  align?: "left" | "center" | "right";
}
