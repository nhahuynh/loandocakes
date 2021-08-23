import React from "react";
import "./App.css";

function Footer() {
  const fblink = "https://www.facebook.com/profile.php?id=100057173991350";
  return (
    <div>
      <footer>
        <p>Loan Do Cakes &copy; 2021</p>
        <a href={fblink} target="_blank" rel="noreferrer">
          <i class="material-icons md-36">facebook</i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
