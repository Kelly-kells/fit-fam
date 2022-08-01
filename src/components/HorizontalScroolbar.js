
import React, { useContext } from 'react';
import { Box,Typography } from "@mui/material"
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"





const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
    <BsArrowLeft color="red" fontSize="1.5em"/>
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <BsArrowRight color="red" fontSize="1.5em"/>
    </Typography>
  );
};

const HorizontalScroolbar = ({ data, bodyPart, setBodyPart }) => {
  
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScroolbar;
