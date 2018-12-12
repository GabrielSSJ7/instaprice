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

const BottomMenu = () => (
  <div>
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">
          {/* <img src="../static/images/icons/favicon.ico" style={{ width: "42px"}}  alt="Home" /> */}
          <FontAwesomeIcon icon="home" size="2x" />
        </a>
      </Link>
      <a className="navbar-brand" href="trend.php">
        {/* <i className="fab fa-gripfire fa-2x" alt="Trending" /> */}
        <FontAwesomeIcon icon="fire" size="2x" />
      </a>
      <Link href="/Post">
        <a className="navbar-brand" >
          {/* <i className="fas fa-plus-square fa-2x" alt="Incluir um anúncio" /> */}
          <FontAwesomeIcon icon="plus-square" size="2x" />
        </a>
      </Link>
      <a className="navbar-brand" href="messages.php">
        {/* <i className="far fa-comment-alt fa-2x" alt="Chat" /> */}
        <FontAwesomeIcon icon="comment" size="2x" />
      </a>
    </nav>
  </div>
);

export default BottomMenu;
