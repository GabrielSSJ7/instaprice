import Link from 'next/link';
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
      <Link href={"/Profile?produto=" + props.produto} as={"/profile/"}>
        <a>
          {/* <img src="../static/images/icons/man-user.png" alt="profile" style={{ width: "32px", filter:"invert(40%)" }} /> */}
          <FontAwesomeIcon icon="user" size="2x" />
        </a>
      </Link>
    </nav>
  </div>
);

export default TopMenu;