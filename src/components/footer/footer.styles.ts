import { SXStyleMaker } from "@/styles/common.styles";

export const footerStyles = SXStyleMaker({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    width: { xs: "100%", md: "15%" },
    height: { xs: "auto", md: "100%" },
  },
  avatar: {
    background: "transparent",
    position: "relative",
    width: { xs: "50%", md: "100%" },
    height: "auto",
    borderRadius: 0,
    img: {
      height: "auto",
    },
  },
  list: {
    alignItems: { xs: "center", md: "flex-start" },
    ".MuiListSubheader-root": {
      paddingLeft: 0,
    },
    ".MuiListItem-root": {
      padding: 0,
      paddingLeft: 1,
      minHeight: "fit-content",
      whiteSpace: "nowrap",
    },
  },
});
