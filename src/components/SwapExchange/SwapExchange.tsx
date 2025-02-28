import { SwapVertRounded } from "@mui/icons-material";
import { TokenInputCard } from "../TokenInputCard";
import { Box, IconButton } from "@mui/material";
import { TokenSwapInput } from "../TokenSwapInput";

type Props = {
  tokenToSell: string;
  setTokenToSell: (token: string) => void;
  tokenToReceive: string;
  setTokenToReceive: (token: string) => void;
  swapTokens: () => void;
  onSellChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  swapQuantity: string | null;
  onReceiveChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  receiveQuantity: string | null;
};

const SwapExchange = ({
  tokenToSell,
  setTokenToSell,
  tokenToReceive,
  setTokenToReceive,
  swapTokens,
  onSellChange,
  swapQuantity,
  onReceiveChange,
  receiveQuantity,
}: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={3}
    >
      <TokenInputCard
        children={
          <TokenSwapInput
            title={"Sell"}
            token={tokenToSell}
            setToken={setTokenToSell}
            onChange={onSellChange}
            value={swapQuantity}
          />
        }
      />
      <IconButton
        onClick={swapTokens}
        sx={{
          color: "altBg.main",
          position: "absolute",
          top: 88,
          width: "10%",
          borderRadius: 20,
        }}
      >
        <SwapVertRounded sx={{ fontSize: 56 }} />
      </IconButton>
      <TokenInputCard
        children={
          <TokenSwapInput
            title={"Buy"}
            token={tokenToReceive}
            setToken={setTokenToReceive}
            onChange={onReceiveChange}
            value={receiveQuantity}
          />
        }
      />
    </Box>
  );
};

export default SwapExchange;
