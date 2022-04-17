import { Button } from "@mui/material";
import React from "react";

export const DangerouslySetInnerHtml = ({ text }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></div>
  );
};

function BlockButton({
  disabled = false,
  iconBefore = false,
  type,
  text,
  onClick,
  icon,
}) {
  return (
    <Button type={type} onClick={onClick} sx={styles.btn} disabled={disabled}>
      {iconBefore && icon ? icon : null}
      {<DangerouslySetInnerHtml text={text} />}
      {!iconBefore && icon ? icon : null}
    </Button>
  );
}

export default BlockButton;

const styles = {
  btn: {
    background: "#F4A123",
    borderRadius: "0",
    color: "#000000",
    fontWeight: "600",
    padding: "0.5em 1em",
    textTransform: "uppercase",
    "&:hover": {
      background: "#764E11",
      border: "1px solid #F4A123",
    },
  },
};
