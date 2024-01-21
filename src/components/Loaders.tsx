import React from "react";
import { CircularProgress } from "@mui/material";

const Loaders = () => {
  return (
    <div className="absolute z-50 w-screen bg-transparent flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loaders;
