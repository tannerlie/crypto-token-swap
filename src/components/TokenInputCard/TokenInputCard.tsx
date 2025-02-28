import { Card } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TokenInputCard = ({ children }: Props) => {
  return (
    <Card
      sx={{
        mx: 2,
        px: 2,
        py: 1,
        width: "100%",
        height: 80,
        borderRadius: 2,
        backgroundColor: "bg.main",
        boxSizing: "border-box"
      }}
    >
      {children}
    </Card>
  );
};

export default TokenInputCard;
