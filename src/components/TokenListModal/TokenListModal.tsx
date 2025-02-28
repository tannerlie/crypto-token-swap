import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TokenDisplayButton } from "../TokenDisplayButton";
import tokenList from "../../data/tokenList";
import { Close } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";

type Props = {
  isOpen: boolean;
  setToken: (token: string) => void;
  handleClose: () => void;
};

const TokenListModal = ({ isOpen, handleClose, setToken }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    !isOpen && setSearchValue("");
  }, [isOpen]);

  const filteredList = useMemo(() => {
    return tokenList.filter((token) => {
      return searchValue ? token.name.startsWith(searchValue.toUpperCase()) : true;
    });
  }, [searchValue]);

  const handleTokenClick = (token: string) => {
    setToken(token);
    handleClose();
  }

  return (
    <Modal open={isOpen} onClose={handleClose} >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "70vh",
          bgcolor: "altBg.main",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography
            fontSize={20}
            fontWeight={500}
            color="altText.main"
            sx={{ textAlign: "center"}}
          >
            Select Token
          </Typography>
          <IconButton sx={{ color: "altText.dark" }} onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <InputBase
          size="small"
          placeholder="Search Token Symbol"
          value={searchValue}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="delete"
                color="primary"
                sx={{ p: 0, color: "primary.main"}}
                onClick={() => setSearchValue("")}
              >
                <Close fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
          fullWidth
          sx={{
            color: "altText.main",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "border.light",
            borderRadius: 8,
            px: 2,
            py: 1,
            "&:focus-within": { borderColor: "primary.main" },
          }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          overflow={"scroll"}
          height={"90%"}
          gap={1}
        >
          {filteredList.map((token) => {
            return (
              <TokenDisplayButton
                key={token.name}
                token={token.name}
                path={token.path}
                handleClick={() => handleTokenClick(token.name)}
                styles={{
                  justifyContent: "flex-start",
                  color: "altText.main",
                  gap: 2,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
};

export default TokenListModal;
