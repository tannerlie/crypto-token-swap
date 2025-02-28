import { Box, Typography } from "@mui/material";

type Props = {
  tokenToSell: string;
  tokenToReceive: string;
  priceRatio: number | null;
  priceSell: number;
};

const ConversionTexts = ({
  tokenToSell,
  tokenToReceive,
  priceRatio,
  priceSell,
}: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={1}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        color="texts.main"
      >
        <Typography fontSize={16}>Rate</Typography>
        <Typography>
          {tokenToSell ? 1 : "-"}{" "}
          <Typography component={"span"} color="primary.dark">
            {tokenToSell}
          </Typography>{" "}
          = {priceRatio?.toFixed(5)}{" "}
          <Typography component={"span"} color="primary.dark">
            {tokenToReceive ? tokenToReceive : "-"}
          </Typography>
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} color="texts.main">
        <Typography>Total Amount</Typography>
        <Typography>${priceSell.toFixed(5)} USD</Typography>
      </Box>
    </Box>
  );
};

export default ConversionTexts;
