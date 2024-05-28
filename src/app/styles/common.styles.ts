import { SxProps } from "@mui/joy/styles/types";

export interface ICommonSxProps {
  sx?: SxProps;
}

export function SXStyleMaker<T extends Record<string, SxProps>>(arg: T): T {
  return arg;
}
