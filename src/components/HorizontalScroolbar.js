import React from "react";
import { Box } from "@mui/system";
import BodyPart from "./BodyPart";

const HorizontalScroolbar = ({ data, bodyPart, setBodypart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodypart={setBodypart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScroolbar;