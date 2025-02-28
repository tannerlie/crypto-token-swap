import { Box, SvgIcon } from "@mui/material";

const LogoHeader = () => {
  const path = "/images/logo/01_Switcheo_Wordmark_noPadding_Primary.svg";

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"10%"}
      alignItems={"center"}
      py={1}
      borderBottom={"1px solid"}
      borderColor={"border.light"}
      // sx={{backgroundColor: "primary.main"}}
    >
      <SvgIcon viewBox="0 0 321 46" sx={{ width: 140, height: 46, pl: 20 }}>
        <image href={path} width="100%" height="100%" />
      </SvgIcon>
    </Box>
  );
};

export default LogoHeader;
