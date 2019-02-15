import React from "react";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-responsive-modal";
import Axios from "axios";
import { URL } from "../../config/types";
library.add(faEdit);
library.add(faUser);

import { getCards, renderCards } from "../Util";

export default class CardsProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editAddress: false,
      arrayCards: [],
      addressForUpdate: "",
      enderecos: [],
      openInsertCard: false,
      nome: "",
      numero: "",
      bandeira: "",
      validade: "",
      codigo_seguranca: "",
      msg: "",
      openModalMsg: false
    };
  }

  componentDidMount() {
    getCards(this);
  }

  changeEditAddress() {
    if (this.state.editAddress) {
      this.setState({ editAddress: false });
    } else {
      this.setState({ editAddress: true });
    }
  }

  changeText(e, input) {
    switch (input) {
      case "nome":
        this.setState({ nome: e.target.value });
        break;

      case "numero":
        this.setState({ numero: e.target.value });
        break;

      case "validade":
        this.setState({ validade: e.target.value });
        break;

      case "codigo_seguranca":
        this.setState({ codigo_seguranca: e.target.value });
        break;

      case "bandeira":
        this.setState({ bandeira: e.target.value });
        break;
    }
    this.setState({ addressForUpdate: e.target.value });
  }

  insertEditCard(id) {
    const token = localStorage.getItem("authToken");

    const instance = Axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    const data = {
      nome: this.state.nome,
      numero: this.state.numero,
      bandeira: this.state.bandeira,
      validade: this.state.validade,
      codigo_seguranca: this.state.codigo_seguranca,
      token,
      id: id ? id : 0
    };

    instance
      .post(`${URL}inserteditcard`, data)
      .then(res => {
        this.setState({
          openInsertAddress: false,
          nome: "",
          bandeira: "",
          numero: "",
          validade: "",
          codigo_seguranca: ""
        });
        getCards(this);
      })
      .catch(e => {
        this.setState({ msg: e.response.data, openModalMsg: true });
      });
  }

  onUpdateItems = (key, cards) => {
    this.setState((state, props) => {
      let nome = "";
      let numero = "";
      let bandeira = "";
      let codigo_seguranca = "";
      let validade = "";
      const arrayCards = state.arrayCards.map((item, j) => {
        if (key == item.key) {
          nome = cards[item.key].nome;
          numero = cards[item.key].numero;
          bandeira = cards[item.key].bandeira;
          codigo_seguranca = cards[item.key].codigo_seguranca;
          validade = cards[item.key].validade;
          //textAddress = enderecos[item.key].endereco;
          return (item = (
            <div className="jumbotron jumbotron-fluid" key={item.key}>
              <div className="container">
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    className="form-control"
                    defaultValue={cards[item.key].nome}
                    onChange={e => this.changeText(e, "nome")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="numero">Número</label>
                  <input
                    id="numero"
                    type="text"
                    className="form-control"
                    defaultValue={cards[item.key].numero}
                    onChange={e => this.changeText(e, "numero")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="numero">Validade</label>
                  <input
                    id="validade"
                    type="text"
                    className="form-control"
                    defaultValue={cards[item.key].validade}
                    onChange={e => this.changeText(e, "validade")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bandeira">Bandeira</label>
                  <input
                    id="bandeira"
                    type="text"
                    className="form-control"
                    defaultValue={cards[item.key].bandeira}
                    onChange={e => this.changeText(e, "bandeira")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="codigo_seguranca">Código de segurança</label>
                  <input
                    id="codigo_seguranca"
                    type="text"
                    className="form-control"
                    defaultValue={cards[item.key].codigo_seguranca}
                    onChange={e => this.changeText(e, "codigo_seguranca")}
                  />
                </div>

                <span className="pull-right">
                  <button
                    className="btn btn-info"
                    onClick={() => this.insertEditCard(cards[item.key].id)}
                  >
                    Atualizar
                  </button>
                  <button
                    onClick={() => {
                      renderCards(enderecos, this);
                    }}
                    data-original-title="Edit this user"
                    data-toggle="tooltip"
                    className="btn btn-sm btn-warning"
                  >
                    <FontAwesomeIcon icon="edit" size="1x" />
                  </button>
                </span>
              </div>
            </div>
          ));
        } else {
          return (item = (
            <div className="jumbotron jumbotron-fluid" key={item.key}>
              <div className="container">
                <h3>{enderecos[item.key].endereco}</h3>
                <span className="pull-right">
                  <button
                    onClick={() => {
                      this.onUpdateItems(item.key, enderecos);
                    }}
                    data-original-title="Edit this user"
                    data-toggle="tooltip"
                    className="btn btn-sm btn-warning"
                  >
                    <FontAwesomeIcon icon="edit" size="1x" />
                  </button>
                </span>
              </div>
            </div>
          ));
        }
      });

      return {
        arrayCards,
        nome,
        numero,
        bandeira,
        validade,
        codigo_seguranca
      };
    });
  };

  deleteCards(id) {
    const token = localStorage.getItem("authToken");

    const instance = Axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    const data = {
      id: id
    };

    instance
      .post(`${URL}deletecard`, data)
      .then(res => {
        getCards(this);
      })
      .catch(e => {});
  }

  render() {
    const { openInsertCard, openModalMsg } = this.state;
    return (
      <div className="row">
        <Modal
          open={openModalMsg}
          onClose={() => this.setState({ openModalMsg: false })}
        >
          <div className="container" style={{ padding: "45px" }}>
            <p style={{ color: "red" }}>{this.state.msg}</p>
          </div>
        </Modal>
        <Modal
          open={openInsertCard}
          onClose={() => this.setState({ openInsertCard: false })}
        >
          <div style={{ padding: "25px" }}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                className="form-control"
                onChange={e => this.changeText(e, "nome")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                type="text"
                className="form-control"
                onChange={e => this.changeText(e, "numero")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero">Validade</label>
              <input
                id="validade"
                type="text"
                className="form-control"
                onChange={e => this.changeText(e, "validade")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bandeira">Bandeira</label>
              <input
                id="bandeira"
                type="text"
                className="form-control"
                onChange={e => this.changeText(e, "bandeira")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="codigo_seguranca">Código de segurança</label>
              <input
                id="codigo_seguranca"
                type="text"
                className="form-control"
                onChange={e => this.changeText(e, "codigo_seguranca")}
              />
            </div>

            <button
              onClick={() => this.insertEditCard(null)}
              className="btn btn-success"
            >
              Finalizar
            </button>
          </div>
        </Modal>
        <div className="col-sm-12 col-md-12 col-xs-12">
          {this.state.arrayCards}
          <button
            style={{ marginBottom: "100px" }}
            onClick={() => {
              this.setState({ openInsertAddress: true, addressForUpdate: "" });
            }}
            data-original-title="Edit this user"
            data-toggle="tooltip"
            className="btn btn-sm btn-info"
          >
            Adicionar endereço
          </button>
        </div>
      </div>
    );
  }
}
