import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-300 px-4 py-2 rounded-2xl cursor-pointer font-semibold">
      {name}
    </button>
  );
};

export default Button;
