"use client";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Sheet,
  Typography,
} from "@mui/joy";
import { useMedia } from "react-use";
import theme from "../themeRegistry/theme";
import { ChurchData } from "./footer.dto";
import { footerStyles } from "./footer.styles";

function FooterDivider() {
  return useMedia(`(max-width: ${theme.breakpoints.values.md}px)`, false) ? (
    <Divider orientation="horizontal" />
  ) : (
    <Divider orientation="vertical" />
  );
}

export default function Footer() {
  const churchData: ChurchData = {
    adress: "Rua Ernesto Zanrosso, 2669 - Jardim Itália, Caxias do Sul - RS",
    phone: "(54) 98129-9294",
    boards: [
      {
        id: 1,
        type: "Diretoria",
        members: [
          {
            id: 1,
            role: "Reverendo",
            name: "Silvânio Matias",
          },
          {
            id: 2,
            role: "Presbítero",
            name: "Marlon Vargas",
          },
          {
            id: 3,
            role: "Presbítero",
            name: "Paulo Alves",
          },
        ],
      },
      {
        id: 2,
        type: "UPH",
        members: [
          {
            id: 1,
            role: "Presidente",
            name: "Marlon Vargas",
          },
          {
            id: 2,
            role: "Secretário",
            name: "Alisson Matias",
          },
          {
            id: 3,
            role: "Tesoureiro",
            name: "Matheus Santi",
          },
        ],
      },
      {
        id: 3,
        type: "SAF",
        members: [
          {
            id: 1,
            role: "Presidente",
            name: "Andréia Ribeiro",
          },
          {
            id: 2,
            role: "Secretária",
            name: "Andrea Miyabukuro",
          },
          {
            id: 3,
            role: "Tesoureira",
            name: "Clarissa Rech",
          },
        ],
      },
    ],
    events: [
      {
        id: 1,
        name: "Culto Solene",
        time: "08:30h",
      },
      {
        id: 2,
        name: "EDB",
        time: "10:00h",
        description: "São Paulo",
      },
      {
        id: 3,
        name: "Culto Solene",
        time: "18:00h",
      },
    ],
  };
  console.log(theme.breakpoints.values.md);
  return (
    <Sheet
      variant="solid"
      color="primary"
      component={"footer"}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          padding: { xs: 4, md: 2 },
          gap: { xs: 4, md: 2 },
        }}
      >
        <Box sx={footerStyles.avatarContainer}>
          <Avatar
            src={"/images/l-vertical_bege.png"}
            alt="Logo"
            sx={footerStyles.avatar}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <FooterDivider />
            {churchData.boards.map((board, index) => (
              <Box
                key={board.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <List sx={footerStyles.list}>
                  <ListSubheader>
                    <Typography level="body-md" textColor="common.white">
                      {board.type}
                    </Typography>
                  </ListSubheader>
                  {board.members.map((member) => (
                    <ListItem key={member.id}>
                      <Typography level="body-md" textColor="common.white">
                        {member.role}: {member.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
                <FooterDivider />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              level="body-md"
              textColor="common.white"
              textAlign={"center"}
            >
              {churchData.adress}
            </Typography>
            <Typography level="body-md" textColor="common.white">
              {churchData.phone}
            </Typography>
          </Box>
          {useMedia(`(max-width: ${theme.breakpoints.values.md}px)`, false) && (
            <Divider orientation="horizontal" />
          )}
        </Box>
        <Box sx={footerStyles.avatarContainer}>
          <Avatar
            src={"/images/logo-ipb-branco.png"}
            alt="Logo"
            sx={footerStyles.avatar}
          />
        </Box>
      </Box>
    </Sheet>
  );
}
