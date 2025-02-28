import { ArrowDropDown } from "@mui/icons-material";
import { Box, InputBase, FormControl, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TokenListModal } from "../TokenListModal";
import cryptoData from "../../data/tokenList";
import { TokenDisplayButton } from "../TokenDisplayButton";

type Props = {
  title: string;
  token: string;
  setToken: (token: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | null;
};

const TokenSwapInput = ({ title, token, setToken, onChange,  value}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [svgPath, setSvgPath] = useState("");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const crypto = cryptoData.find(
      (crypto: { name: string; path: string; price: number }) =>
        crypto.name === token
    );
    if (crypto) {
      setSvgPath(crypto.path);
    } else {
      setSvgPath("");
    }
  }, [token]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControl variant="standard" sx={{flex: 2}}>
        <Typography sx={{ color: "texts.main", fontWeight: 400, fontSize: 16 }}>
          {title}
        </Typography>
        <InputBase
          id="standard-basic"
          placeholder="0"
          onChange={onChange}
          value={value || ""}
          sx={{
            input: { fontSize: 32, color: "texts.main", py: 0, overflow: "hidden" },
            "& input:focus::placeholder": {
              color: "texts.lighter",
              opacity: 1,
            },
            "& input::placeholder": { color: "texts.main", opacity: 1 },
          }}
        />
      </FormControl>
      <TokenDisplayButton
        path={svgPath}
        token={token}
        handleClick={handleOpen}
        icon={<ArrowDropDown />}
        styles={{p: 0, width: "fit-content", justifyContent: "flex-end", gap: 1}}
      />
      <TokenListModal
        isOpen={isOpen}
        handleClose={handleClose}
        setToken={setToken}
      />
    </Box>
  );
};

export default TokenSwapInput;
