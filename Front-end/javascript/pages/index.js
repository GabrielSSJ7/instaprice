import React from "react";
import { bindActionCreators } from "redux";
import io from "socket.io-client";
import { connect } from "react-redux";

import { validateToken } from "../components/Util";
import RenderProd from "../components/RenderProd";
import Template from "../components/Template";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";

import { startClock, addCount, serverRenderClock } from "../config/store";
import { getMainData } from "../config/actions/MainAction";

const socketUrl = "http://localhost:4000";

let socket = null;

class Index extends React.Component {
  constructor(props) {
    super(props);
   
  }

  static getInitialProps({ store, isServer, req }) {
    const cookie = req ? req.headers.cookie : "";

    if (cookie) {
      const index = cookie.indexOf("bearer");
      let AuthToken = cookie.substr(index);

      AuthToken = AuthToken.split("%20").join(" ");

      try {
        store.dispatch(getMainData(AuthToken));

        return {};
      } catch (e) {
        return { produto: [] };
      }
    }

    return {};
  }
  componentWillUnmount(){
    
  }

  componentDidMount() {
    // socket = io(socketUrl);
    // socket.emit('desconectar', { reason: 'porque eu quis'})
    // socket.on("connect", function() {
    //   //console.log("connected on Socket.Io", socket.id);
    // });
    validateToken(localStorage.getItem("authToken"));

    // socket.on("usuarioSaiu", function(data) {
    //   //socket.emit("usuarioSaiu",{ token: localStorage.getItem("authToken")})
    //   console.log("usuario saiu", data);
    // });

    if (this.props.produto.length === 0) {
      this.props.getMainData(`bearer ${localStorage.getItem("authToken")}`);
    }
  }

  render() {
    return (
      <Template>
        <TopMenu props={this.props} />

        <RenderProd produto={this.props.produto} />

        <BottomMenu />
      </Template>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMainData: bindActionCreators(getMainData, dispatch)
  };
};

const mapStateToProps = state => {
  //console.log("state.main", state)
  return {
    produto: state.MainReducer.produto
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
