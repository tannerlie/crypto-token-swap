import { Box, Typography, Modal } from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessPopup = ({
  isOpen,
  onClose,
}: Props) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "30vw",
          gap: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "bg.main",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" color="primary.dark">
          Conversion Successful!
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessPopup;