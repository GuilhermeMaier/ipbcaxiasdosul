import { ICommonSxProps } from "@/styles/common.styles";
import IconButton, {
  IconButtonPropsColorOverrides,
  IconButtonPropsSizeOverrides,
} from "@mui/joy/IconButton";
import { ColorPaletteProp } from "@mui/joy/styles";
import { OverridableStringUnion } from "@mui/types";
import { ReactNode } from "react";

interface IIconHolderProps extends ICommonSxProps {
  disabled?: boolean;
  allowHover?: boolean;
  size?: OverridableStringUnion<
    "sm" | "md" | "lg",
    IconButtonPropsSizeOverrides
  >;
  color?: OverridableStringUnion<
    ColorPaletteProp,
    IconButtonPropsColorOverrides
  >;
  children: ReactNode;
}

function IconHolder({
  disabled = false,
  allowHover = false,
  size = "md",
  color = "primary",
  children,
  sx,
}: IIconHolderProps) {
  return (
    <IconButton
      disabled={disabled}
      size={size}
      color={color}
      sx={[allowHover ? {} : { padding: 0, pointerEvents: "none" }, sx as any]}
      tabIndex={-1}
    >
      {children}
    </IconButton>
  );
}

export default IconHolder;
