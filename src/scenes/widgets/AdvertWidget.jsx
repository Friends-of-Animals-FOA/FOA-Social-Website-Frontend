import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Upcoming Events
        </Typography>
        <Typography color={medium}>Participate</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://foa-social-backend3.onrender.com/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>
Animal rescue awareness campaign</Typography>
        {/* <Typography color={medium}>event_orgnizer@foa.com</Typography> */}
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Animal Equality uses a broad range of strategic campaigns to ensure all animals are treated with compassion.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
