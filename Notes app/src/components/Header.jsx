import React from "react";
import "../styles/Header.css"
import DescriptionIcon from '@mui/icons-material/Description';

function Header(){
  return (
    <div className="header">
      <p><DescriptionIcon fontSize="large" /> Notes-making App</p>
    </div>
  );
}

export default Header;