"use client";
import { IconHolder } from "@/components/our/iconHolder";
import axios from "@/utils/axiosRequester";
import { Box, Table } from "@mui/joy";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdRemove } from "react-icons/md";
import { IMember, membersHeaders } from "./dto/form.dto";

function FormContent() {
  const [membros, setMembros] = useState<IMember[]>([]);

  const fetchMembers = async () => {
    const response = await axios.get<IMember[]>("/members");
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
      p={2}
    >
      <Table sx={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            {membersHeaders.map((c) => (
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
            <tr key={membro.iCalvinusMemberID}>
              <td
                align={
                  membersHeaders.find((c) => c.id === "iCalvinusMemberID")
                    ?.align || "left"
                }
              >
                {membro.iCalvinusMemberID || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "name")?.align || "left"
                }
              >
                {membro.name || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "email")?.align || "left"
                }
              >
                {membro.email || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "phone")?.align || "left"
                }
              >
                {membro.phone || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "cellphone")?.align ||
                  "left"
                }
              >
                {membro.cellphone || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "status")?.align || "left"
                }
              >
                {membro.status || (
                  <IconHolder size="sm" color="neutral">
                    <MdRemove />
                  </IconHolder>
                )}
              </td>
              <td
                align={
                  membersHeaders.find((c) => c.id === "enabled")?.align ||
                  "left"
                }
              >
                <IconHolder
                  size="sm"
                  color={membro.enabled ? "success" : "danger"}
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

export default FormContent;
