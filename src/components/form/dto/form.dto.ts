import { CommonTableHeader } from "@/utils/typeUtils.dto";

export type MemberStatus = "Não membro" | "Comungante" | "Não comungante";

export interface IMember {
  _id: string;
  iCalvinusMemberID: number;
  name: string;
  email: string;
  phone: string;
  cellphone: string;
  status: string;
  enabled: boolean;
  __v: number;
}

export const membersHeaders: CommonTableHeader<
  IMember,
  | "iCalvinusMemberID"
  | "name"
  | "email"
  | "phone"
  | "cellphone"
  | "status"
  | "enabled"
>[] = [
  {
    id: "iCalvinusMemberID",
    headerName: "ID",
    align: "right",
    width: "75px",
  },
  {
    id: "name",
    headerName: "Nome",
  },
  {
    id: "email",
    headerName: "Email",
  },
  {
    id: "phone",
    headerName: "Telefone",
    width: "150px",
    align: "right",
  },
  {
    id: "cellphone",
    headerName: "Celular",
    width: "150px",
    align: "right",
  },
  {
    id: "status",
    headerName: "Membro",
    width: "150px",
  },
  {
    id: "enabled",
    headerName: "",
    align: "center",
    width: "50px",
  },
];
