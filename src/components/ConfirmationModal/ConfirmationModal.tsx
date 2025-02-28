import { Close } from "@mui/icons-material";
import {
  Modal,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { SuccessPopup } from "../SuccessPopup"; // Import the new component

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  amountToReceive: number;
  amountToSell: number;
  rate: number;
  tokenToSell: string;
  tokenToBuy: string;
  setSellValue: (value: string) => void;
  setReceiveValue: (value: string) => void;
};

const ConfirmationModal = ({
  isOpen,
  handleClose,
  amountToReceive,
  amountToSell,
  rate,
  tokenToSell,
  tokenToBuy,
  setSellValue,
  setReceiveValue,
}: Props) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false); // State for success popup

  const handleConfirm = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      handleClose();

      setIsSuccessPopupOpen(true);
      setSellValue("");
      setReceiveValue("");

      setTimeout(() => {
        setIsSuccessPopupOpen(false);
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "40vw",
            gap: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "altBg.main",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
            color: "altText.main",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontSize={20} fontWeight={500} color="altText.main">
              Confirm Your Transaction
            </Typography>
            <IconButton sx={{ color: "altText.dark" }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
              },
            }}
          >
            <Typography>Amount</Typography>
            <Typography>
              {amountToReceive} {tokenToBuy} ({amountToSell} {tokenToSell})
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
              },
            }}
          >
            <Typography>Rate</Typography>
            <Typography>
              1 {tokenToBuy} = {1 / rate} {tokenToSell}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ height: 48, mt: 4 }}
            fullWidth
            onClick={handleConfirm}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "white" }} /> // Show loading icon
            ) : (
              "Confirm"
            )}
          </Button>
        </Box>
      </Modal>

      {/* Render the success popup */}
      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={() => setIsSuccessPopupOpen(false)}
      />
    </>
  );
};

export default ConfirmationModal;
