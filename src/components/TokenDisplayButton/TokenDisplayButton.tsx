import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  token: string;
  path: string;
  styles?: any;
  icon?: ReactNode;
  handleClick: () => void;
};

const TokenDisplayButton = ({
  token,
  path,
  handleClick,
  styles = {},
  icon,
}: Props) => {
  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      sx={{
        borderRadius: 4,
        borderWidth: 0,
        color: "texts.main",
        fontSize: 16,
        whiteSpace: "nowrap",
        ...styles,
      }}
    >
      {/* <Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"center"}> */}
        {path && (
          <SvgIcon sx={{ width: 32, height: 32 }}>
            <image href={path} />
          </SvgIcon>
        )}
        <Typography fontWeight={500}>{token ? token : "Select Token"}</Typography>
        {icon ? icon : null}
      {/* </Box> */}
    </Button>
  );
};

export default TokenDisplayButton;
