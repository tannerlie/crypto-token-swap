import { Box, Button, Card, Typography } from "@mui/material";
import {
  ConfirmationModal,
  Header,
  ConversionTexts,
  LogoHeader,
} from "./components";
import tokenList from "./data/tokenList";
import { useEffect, useMemo, useState } from "react";
import { SwapExchange } from "./components/SwapExchange";

const App = () => {
  const [tokenToSell, setTokenToSell] = useState("USDC");
  const [tokenToReceive, setTokenToReceive] = useState("");
  const [tokenToSellPrice, setTokenToSellPrice] = useState(0);
  const [tokenToReceivePrice, setTokenToReceivePrice] = useState<number | null>(
    null
  );
  const [tokenSellQuantity, setTokenSellQuantity] = useState<string | null>(
    null
  );
  const [tokenReceiveQuantity, setTokenReceiveQuantity] = useState<
    string | null
  >(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleOpen = () => setIsConfirmationModalOpen(true);
  const handleClose = () => setIsConfirmationModalOpen(false);

  useEffect(() => {
    setTokenToSellPrice(getTokenObject(tokenToSell)?.price || 0);
  }, [tokenToSell]);

  useEffect(() => {
    setTokenToReceivePrice(getTokenObject(tokenToReceive)?.price || null);
  }, [tokenToReceive]);

  const getTokenObject = (tokenName: string) => {
    return tokenList.find((token) => token.name === tokenName);
  };

  const handleAdjacentTokenCalculations = (
    priceOfReferenceToken: number | null,
    priceOfTokenToCalculate: number | null,
    quantityOfReferenceToken: number
  ) => {
    return priceOfReferenceToken &&
      priceOfTokenToCalculate &&
      quantityOfReferenceToken
      ? (
          (quantityOfReferenceToken * priceOfReferenceToken) /
          priceOfTokenToCalculate
        )
          .toFixed(5)
          .toString()
      : "";
  };

  const numericTokenSellQuantity = useMemo(() => {
    return parseFloat(tokenSellQuantity || "0");
  }, [tokenSellQuantity]);

  const numericTokenReceiveQuantity = useMemo(() => {
    return parseFloat(tokenReceiveQuantity || "0");
  }, [tokenReceiveQuantity]);

  const priceRatio = useMemo(() => {
    return tokenToReceivePrice ? tokenToSellPrice / tokenToReceivePrice : null;
  }, [tokenToSellPrice, tokenToReceivePrice]);

  const priceSell = useMemo(() => {
    return numericTokenSellQuantity
      ? numericTokenSellQuantity * tokenToSellPrice
      : 0;
  }, [numericTokenSellQuantity, tokenToSellPrice]);

  const swapTokens = () => {
    const tokenTemp = tokenToSell;
    setTokenToSell(tokenToReceive);
    setTokenToReceive(tokenTemp);
    const quantityTemp = tokenSellQuantity;
    setTokenSellQuantity(tokenReceiveQuantity);
    setTokenReceiveQuantity(quantityTemp);
  };

  const handleSellInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value || "";
    if (/^(?:\d+(?:\.\d*)?)?$/.test(newValue)) {
      const quantity = parseFloat(newValue);
      setTokenSellQuantity(newValue);
      setTokenReceiveQuantity(
        handleAdjacentTokenCalculations(
          tokenToSellPrice,
          tokenToReceivePrice,
          quantity
        )
      );
    }
  };

  const handleReceiveInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value || "";
    if (/^(?:\d+(?:\.\d*)?)?$/.test(newValue)) {
      const quantity = parseFloat(newValue);
      setTokenReceiveQuantity(newValue);
      setTokenSellQuantity(
        handleAdjacentTokenCalculations(
          tokenToReceivePrice,
          tokenToSellPrice,
          quantity
        )
      );
    }
  };

  const handleTokenSellChange = (token: string) => {
    setTokenToSell(token);
    setTokenReceiveQuantity(
      handleAdjacentTokenCalculations(
        getTokenObject(token)?.price || 0,
        tokenToReceivePrice,
        numericTokenSellQuantity
      )
    );
  };

  const handleTokenReceiveChange = (token: string) => {
    setTokenToReceive(token);
    setTokenReceiveQuantity(
      handleAdjacentTokenCalculations(
        tokenToSellPrice,
        getTokenObject(token)?.price || 0,
        numericTokenSellQuantity
      )
    );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      width={"100vw"}
      // overflow={"auto"}
    >
      <LogoHeader />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
        sx={{
          height: "100%",
          width: "100%",
          py: 4,
          backgroundImage: "url(/images/background/background.svg)",
          backgroundSize: "104px 104px", // Adjust based on your SVG size
          backgroundRepeat: "repeat", // Repeat the SVG pattern
          overflow: "auto",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "bg.dark",
            borderRadius: 4,
            minWidth: 300,
            width: "35%",
            minHeight: 300,
            height: "50%",
            p: 4,
            alignItems: "center",
            position: "relative",
            gap: 1,
          }}
        >
          <SwapExchange
            tokenToSell={tokenToSell}
            setTokenToSell={handleTokenSellChange}
            tokenToReceive={tokenToReceive}
            setTokenToReceive={handleTokenReceiveChange}
            swapTokens={swapTokens}
            onSellChange={handleSellInputChange}
            swapQuantity={tokenSellQuantity}
            onReceiveChange={handleReceiveInputChange}
            receiveQuantity={tokenReceiveQuantity}
          />
          <ConversionTexts
            tokenToSell={tokenToSell}
            tokenToReceive={tokenToReceive}
            priceRatio={priceRatio}
            priceSell={priceSell}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant={"contained"}
            sx={{
              height: 48,
              "&:disabled": {
                backgroundColor: "primary.light",
              },
            }}
            fullWidth
            onClick={handleOpen}
            disabled={!tokenSellQuantity || !tokenToReceive}
          >
            Sell
          </Button>
        </Box>
        <ConfirmationModal
          handleClose={handleClose}
          isOpen={isConfirmationModalOpen}
          amountToSell={numericTokenSellQuantity}
          amountToReceive={numericTokenReceiveQuantity}
          rate={priceRatio || 0}
          tokenToBuy={tokenToReceive}
          tokenToSell={tokenToSell}
          setSellValue={setTokenSellQuantity}
          setReceiveValue={setTokenReceiveQuantity}
        />
      </Box>
    </Box>
  );
};

export default App;
