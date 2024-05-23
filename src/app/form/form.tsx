import { Box, Button, Divider, Typography } from "@mui/joy";
import Link from "next/link";

function Form() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      gap={2}
    >
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md">Primária</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="primary">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="primary">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="primary">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="primary">
            Retorne a home
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md">Neutro</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="neutral">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="neutral">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="neutral">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="neutral">
            Retorne a home
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md" textColor={"text.primary"}>
          Cuidado
        </Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="warning">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="warning">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="warning">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="warning">
            Retorne a home
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md">Erro</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="danger">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="danger">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="danger">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="danger">
            Retorne a home
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={2}
      >
        <Typography level="title-md">Sucesso</Typography>
        <Link href={"/home"}>
          <Button variant="soft" color="success">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="plain" color="success">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="outlined" color="success">
            Retorne a home
          </Button>
        </Link>
        <Link href={"/home"}>
          <Button variant="solid" color="success">
            Retorne a home
          </Button>
        </Link>
      </Box>
      <Divider orientation="vertical" />
    </Box>
  );
}

export default Form;
