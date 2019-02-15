import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faUser,
  faHome,
  faFire,
  faPlusSquare,
  faComment
} from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);
library.add(faUser);
library.add(faHome);
library.add(faFire);
library.add(faPlusSquare);
library.add(faComment);

const userLogOut = () => {
  try {
    FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
        console.log("connected");
        FB.logout(function(response) {
          localStorage.removeItem("authToken");
          window.location = "/"; // TO REFRESH THE PAGE
        });
      } else {
        localStorage.removeItem("authToken");
        window.location = "/"; // TO REFRESH THE PAGE
        console.log("not connected");
      }
    });
  } catch (msg) {
    console.log(msg)
  }

};

const TopMenu = props => (
  <div>
    <nav
      className="navbar navbar-light"
      style={{
        backgroundColor: "#f8f9fa!important",
        marginBottom: "15px"
      }}
    >
      <Link href="/">
        <a className="navbar-brand">
          <img
            src="../static/images/LOGO_CONCEITO_V1.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <span style={{ marginLeft: "5px" }}>Instaprice</span>
        </a>
      </Link>

      <button onClick={() => userLogOut()}>logout</button>
      <a href="/Profile">
        <FontAwesomeIcon icon="user" size="2x" />
      </a>
    </nav>
  </div>
);

export default TopMenu;
