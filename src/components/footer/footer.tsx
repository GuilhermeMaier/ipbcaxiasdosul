"use client";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Sheet,
  Typography,
} from "@mui/joy";
import { ChurchData } from "./footer.dto";
import { footerStyles } from "./footer.styles";

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
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          flexGrow: 1,
          margin: 0,
          padding: 2,
        }}
      >
        <Grid sx={footerStyles.avatarContainer} md={2} sm={12}>
          <Avatar
            src={"/images/l-vertical_bege.png"}
            alt="Logo"
            sx={footerStyles.avatar}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
          md={"auto"}
          sm={12}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { sm: "column", md: "row" },
            }}
          >
            <Divider orientation={"vertical"} />
            {churchData.boards.map((board, index) => (
              <Box key={board.id} sx={{ display: "flex", gap: 2 }}>
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
                <Divider orientation="vertical" />
              </Box>
            ))}
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <List sx={footerStyles.list}>
              <ListSubheader>
                <Typography level="body-md" textColor="common.white">
                  Programação
                </Typography>
              </ListSubheader>
              {churchData.events.map((event) => (
                <ListItem key={event.id}>
                  <Typography level="body-md" textColor="common.white">
                    {event.name}: {event.time}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box> */}
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
        </Grid>
        <Grid sx={footerStyles.avatarContainer} md={2} sm={12}>
          <Avatar
            src={"/images/logo-ipb-branco.png"}
            alt="Logo"
            sx={footerStyles.avatar}
          />
        </Grid>
      </Grid>
    </Sheet>
  );
}
