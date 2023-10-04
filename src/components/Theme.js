import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/theme/themeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const oppositeTheme = theme.value === "light" ? "dark" : "light";

  const handleClick = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <Button className="text-uppercase" variant={oppositeTheme} onClick={handleClick}>
        {oppositeTheme}
      </Button>
    </>
  );
};

export default Theme;
