import React from "react";
import bg from "../../assets/background.png";

const BackgroundImage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <img className="absolute bottom-0 right-0" src={bg} />
      BackgroundImage
    </div>
  );
};

export default BackgroundImage;
