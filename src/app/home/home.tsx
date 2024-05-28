import Building from "@/components/building";
import { Box } from "@mui/joy";

const Home = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      gap={2}
    >
      <Building />
    </Box>
  );
};

export default Home;
