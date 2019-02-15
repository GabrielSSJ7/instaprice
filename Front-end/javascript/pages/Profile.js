import React from "react";
import Template from "../components/Template";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "isomorphic-unfetch";
import axios from "axios";
import DatePicker from "react-datepicker";
import Modal from "react-responsive-modal";
var dateFormat = require("dateformat");

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);
library.add(faUser);

import Head from "next/head";
import cssStype from "react-datepicker/dist/react-datepicker.css";
import { URL as URL_ } from "../config/types";
import { editUser, validateToken, getAddress } from "../components/Util";
import UserProfile from "../components/ProfileTabs/UserProfile";
import AddressProfile from "../components/ProfileTabs/AddressProfile";
import CardsProfile from "../components/ProfileTabs/CardsProfile";

class profile extends React.Component {
  static async getInitialProps({ store, isServer, req }) {
    const cookie = req ? req.headers.cookie : "";
    if (cookie) {
      const index = cookie.indexOf("bearer");
      let AuthToken = cookie.substr(index);
      AuthToken = AuthToken.split("%20").join(" ");
      const end = AuthToken.indexOf("; ");
      const start = AuthToken.indexOf("bearer");
      AuthToken = AuthToken.substring(start, end)
      const token = AuthToken.split("bearer ").join("");
      const options = {
        headers: { Authorization: AuthToken }
      };
      console.log("header Auth", start)
      const user = await fetch(`${URL_}user/${token}`, options);
      const data = await user.json();
      //console.log("user data", user)
      //const data = []
      return { user: data };
    }
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openEditUser: false,
      file: null,
      image: null,
      startDate: new Date("2000-05-22"),
      foto: "",
      nome: null,
      cpf: "não informado",
      sexo: "não informado",
      msg: "",
      progress: "",
      email: "",
      data_de_nascimento: null,
      event: null,
      tab: null,
      enderecos: []
    };

    this.handleChange.bind(this);
  }

  componentDidMount() {
    getAddress(this);
    if (!this.props.user) {
      this.getAllUserData();
    } else {
      this.setState({
        nome: this.props.user.nome,
        cpf: this.props.user.cpf,
        sexo: this.props.user.sexo,
        data_de_nascimento: this.props.user
          ? this.props.user.data_de_nascimento
          : null,
        foto: this.props.user.foto,
        email: this.props.user.email
      });
    }
  }

  getAllUserData() {
    const token = localStorage.getItem("authToken");
    const instance = axios.create({
      headers: { Authorization: `bearer ${token}` }
    });
    instance.get(`${URL_}user/${token}`).then(res => {
      this.setState({
        startDate: res.data.data_de_nascimento,
        data_de_nascimento: res.data.data_de_nascimento
          ? res.data.data_de_nascimento
          : null,
        nome: res.data.nome,
        cpf: res.data.cpf ? res.data.cpf : null,
        sexo: res.data.sexo ? res.data.sexo : null,
        foto: res.data.foto,
        email: res.data.email
      });
    });
  }

  showPhoto() {
    if (this.props.user || this.state.foto) {
      return (
        <img
          className="rounded-circle img-fluid"
          src={this.state.foto}
          alt={`instaprice ${
            this.props.user ? this.props.user.nome : this.state.nome
          }`}
        />
      );
    } else {
      return (
        <img
          className="rounded-circle img-fluid"
          src="https://pbs.twimg.com/profile_images/573692360263004161/gOvizBEP.jpeg"
          alt={`instaprice ${
            this.props.user ? this.props.user.nome : this.state.nome
          }`}
        />
      );
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModalEditUser = () => {
    this.setState({ openEditUser: true });
  };

  onCloseModalEditUser = () => {
    this.setState({ openEditUser: false });
  };

  handleImage(event) {
    //const { event } = this.state;
    this.onOpenModal();
    this.setState({ image: event.target.files[0] });
    if (event.target.files[0]) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
  }

  _userEdit() {
    const data = {
      nome: this.state.nome,
      sexo: this.state.sexo,
      data_de_nascimento: this.state.data_de_nascimento,
      cpf: this.state.cpf
    };

    editUser(data, null, this);
  }

  _userEditFoto() {
    let data = {};
    editUser(data, this.state.image, this);
  }

  handleChange(date) {
    this.setState({
      data_de_nascimento: date
    });
  }

  changeTab() {
    switch (this.state.tab) {
      case "profile":
        return (
          <UserProfile
            data={this.state}
            showPhoto={() => this.showPhoto()}
            handleImage={this.handleImage.bind(this)}
            onOpenModalEditUser={this.onOpenModalEditUser.bind(this)}
            ctx={this}
          />
        );

      case "address":
        return <AddressProfile data={this.state} />;
      
      case "cards":
          return <CardsProfile data={this.state} />

      default:
        return (
          <UserProfile
            data={this.state}
            showPhoto={() => this.showPhoto()}
            handleImage={this.handleImage.bind(this)}
            onOpenModalEditUser={this.onOpenModalEditUser.bind(this)}
            ctx={this}
          />
        );
    }
  }

  render() {
    const { open, openEditUser } = this.state;
    return (
      <Template>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="../static/css/profile.css"
          />
        </Head>
        <TopMenu props={this.props} />

        <Modal open={open} onClose={this.onCloseModal}>
          <div style={{ padding: "45px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
              Você escolheu esta imagem
            </h2>
            <img
              className="img-fluid"
              style={{ width: "30%", display: "block", margin: "0 auto" }}
              id="photoForUpload"
              src={this.state.file}
              onChange={e => this.setState({ image: e })}
            />
            <p>{this.state.progress}</p>
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "45px"
              }}
            >
              <button
                onClick={() => this._userEditFoto()}
                style={{ float: "right" }}
                className="btn btn-success"
              >
                Finalizar
              </button>

              <button
                onClick={() => this.onCloseModal()}
                className="btn btn-danger"
                style={{ float: "right", marginRight: "15px" }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>

        <Modal open={openEditUser} onClose={this.onCloseModalEditUser}>
          <div style={{ padding: "45px" }}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                className="form-control"
                value={this.state.nome}
                onChange={e => this.setState({ nome: e.target.value })}
                type="text"
                id="nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sexo">Sexo</label>
              <input
                placeholder="Ex: Masculino"
                className="form-control"
                value={this.state.sexo}
                onChange={e => this.setState({ sexo: e.target.value })}
                type="text"
                id="sexo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                placeholder="Digite apenas números"
                className="form-control"
                value={this.state.cpf}
                onChange={e => this.setState({ cpf: e.target.value })}
                type="text"
                id="cpf"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <DatePicker
                selected={this.state.data_de_nascimento}
                onChange={d => this.handleChange(d)}
                className="form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <button
              onClick={() => this._userEdit()}
              className="btn btn-success"
            >
              Finalizar
            </button>
          </div>
        </Modal>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              style={{ cursor: "pointer" }}
              className="nav-link active"
              onClick={() => {
                this.setState({
                  tab: "profile"
                });
              }}
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => {
                this.setState({
                  tab: "address"
                });
              }}
            >
              Adress
            </a>
          </li>

          <li className="nav-item">
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => {
                this.setState({
                  tab: "cards"
                });
              }}
            >
              Cartões
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link disabled"
              style={{ cursor: "pointer" }}
              href="#"
            >
              Social
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              style={{ cursor: "pointer" }}
              href="#"
            >
              History
            </a>
          </li>
        </ul>

        <div className="container-fluid">{this.changeTab()}</div>

        <div className="mt-0 pb-2" />
        <div id="clear" />
        <BottomMenu />
      </Template>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    produto: state.MainReducer.produto
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profile);
