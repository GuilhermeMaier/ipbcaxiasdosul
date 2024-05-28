import { SXStyleMaker } from "@/app/styles/common.styles";

export const footerStyles = SXStyleMaker({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    width: { md: "15%", sm: "100%" },
    height: "100%",
  },
  avatar: {
    background: "transparent",
    position: "relative",
    width: "100%",
    height: "auto",
    borderRadius: 0,
    img: {
      height: "auto",
    },
  },
  list: {
    ".MuiListSubheader-root": {
      paddingLeft: 0,
    },
    ".MuiListItem-root": {
      padding: 0,
      paddingLeft: 1,
      minHeight: "fit-content",
    },
  },
});
