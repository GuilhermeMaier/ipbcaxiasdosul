"use client";
import { IconHolder } from "@/components/our/iconHolder";
import { CommonTableHeader } from "@/utils/typeUtils.dto";
import { Box, Table } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdRemove } from "react-icons/md";

export interface ICalvinusMember {
  MembroID: number;
  Nome: string;
  Telefone: string;
  Celular: string;
  Email: string;
  Membro: string;
  Oficial: string;
  Diferenca: number;
  IgrejaNome: string;
  Situa: string;
  MeioDemissao: string;
}

export const iCalvinusMemberHeaders: CommonTableHeader<
  ICalvinusMember,
  | "MembroID"
  | "Nome"
  | "Telefone"
  | "Celular"
  | "Email"
  | "Membro"
  | "Oficial"
  | "IgrejaNome"
  | "Situa"
>[] = [
  {
    id: "MembroID",
    headerName: "ID",
    align: "right",
    width: "75px",
  },
  {
    id: "Nome",
    headerName: "Nome",
  },
  {
    id: "Email",
    headerName: "Email",
  },
  {
    id: "Telefone",
    headerName: "Telefone",
    width: "150px",
    align: "right",
  },
  {
    id: "Celular",
    headerName: "Celular",
    width: "150px",
    align: "right",
  },
  {
    id: "Membro",
    headerName: "Membro",
    width: "150px",
  },
  {
    id: "Situa",
    headerName: "",
    align: "center",
    width: "50px",
  },
];

async function Form() {
  const [membros, setMembros] = useState<ICalvinusMember[]>([]);
  const fetchMembers = async () => {
    const response = await axios.get(
      "https://api.ipbcaxiasdosul.com.br/members"
    );
    setMembros(response.data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      gap={2}
    >
      <Table sx={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            {iCalvinusMemberHeaders.map((c) => (
              <th
                key={c.id}
                align={c.headerAlign || "left"}
                style={{
                  width: c.width || "auto",
                  textAlign: c.headerAlign || "left",
                }}
              >
                {c.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {membros.map((membro) => (
            <tr key={membro.MembroID}>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "MembroID")
                    ?.align || "left"
                }
              >
                {membro.MembroID || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Nome")?.align ||
                  "left"
                }
              >
                {membro.Nome || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Email")?.align ||
                  "left"
                }
              >
                {membro.Email || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Telefone")
                    ?.align || "left"
                }
              >
                {membro.Telefone || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Celular")
                    ?.align || "left"
                }
              >
                {membro.Celular || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Membro")
                    ?.align || "left"
                }
              >
                {membro.Membro || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  iCalvinusMemberHeaders.find((c) => c.id === "Situa")?.align ||
                  "left"
                }
              >
                <IconHolder
                  size="sm"
                  color={membro.Situa === "Ativo" ? "success" : "danger"}
                >
                  <MdCheckCircle />
                </IconHolder>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}

export default Form;
