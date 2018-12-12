import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faDollarSign,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";

import { getMainData } from "../config/actions/MainAction";
import { URL } from "../config/types";

library.add(faCommentDollar);
library.add(faDollarSign);
library.add(faHeartbeat);

class RenderProd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comentario: ""
    };
  }

  curtirProduto = prodId => {
    const token = localStorage.getItem("authToken");

    const instance = axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    instance.post(`${URL}like`, { produtoId: prodId, token }).then(res => {
      console.log(prodId);
      this.props.getMainData(`bearer ${token}`);
    });
  };

  comentar = (prodId, comentario) => {
    const token = localStorage.getItem("authToken");

    const instance = axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    instance
      .post(`${URL}comment`, {
        produtoId: prodId,
        token,
        comentario
      })
      .then(res => {
        this.setState({ comentario: ""})
        this.props.getMainData(`bearer ${token}`);
      });
  };

  renderizarProdutos() {
    let produtos = [];
    let like = [];
    let youLiked = <span />;
    console.log(this.props);

    for (let x = 0; x < this.props.produto.length; x++) {
      let comentarios = [];

      if (this.props.produto[x].comentarios) {
        for (let y = 0; y < this.props.produto[x].comentarios.length; y++) {
          comentarios.push(
            <div className="container" style={{ marginBottom: "10px" }}>
              <div className="row">
                <div className="col-xs-2 col-md-2">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundImage: `url(${
                        this.props.produto[x].comentarios[y].foto
                      })`,
                      borderRadius: "100%",
                      backgroundSize: "cover"
                    }}
                  />
                </div>
                <div
                  className="col-xs-10 col-md-10"
                  style={{ margin: "auto 0", padding: "0" }}
                >
                  <p key={y}>
                    <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                      {this.props.produto[x].comentarios[y].nome}
                    </span>
                    <span>
                      {this.props.produto[x].comentarios[y].comentario}
                    </span>
                  </p>
                </div>
                {/* <div className="col-xs-7 col-md-7" style={{ margin: "auto 0", padding: "0"}} >
                  <p key={y}></p>
                </div> */}
              </div>
            </div>
          );
        }
      }

      if (this.props.produto[x].liked) {
        like.push(
          <a
            className=""
            onClick={() => this.curtirProduto(this.props.produto[x].id)}
            key={x}
          >
            <FontAwesomeIcon
              icon="heartbeat"
              size="2x"
              className="prod-icons"
              color="pink"
            />
          </a>
        );
        youLiked = <span style={{ fontWeight: "bold" }}>Você já curtiu, </span>;
      } else {
        like.push(
          <button className="" key={x}>
            <FontAwesomeIcon
              icon="heartbeat"
              size="2x"
              className="prod-icons"
              onClick={() => this.curtirProduto(this.props.produto[x].id)}
            />
          </button>
        );
      }

      produtos.push(
        <div key={x} className="row top-buffer rounded">
          <div className="col-sm-2" />
          <div className="col-sm-8 col-md-8 col-xs-12">
            <div className="card">
              <div className="container">
                <div className="row" style={{ padding: "10px" }}>
                  <div className="col-md-2" style={{ paddingRight: "0" }}>
                    {/* <img
                        style={{
                          borderRadius: "50%",
                          width: "100%",
                          margin: "0px auto",
                          display: "block"
                        }}
                        src={this.props.produto[x].foto}
                        alt={"instaprice" + this.props.produto[x].nome_usuario}
                      /> */}

                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundImage: `url(${this.props.produto[x].foto})`,
                        borderRadius: "100%",
                        backgroundSize: "cover"
                      }}
                    />
                  </div>
                  <div style={{ margin: "auto 0" }} className="col-md-8">
                    <p>{this.props.produto[x].nome_usuario}</p>
                  </div>
                </div>
              </div>
              <div className="border">
                <img
                  className="card-img-top img-thumbnail"
                  src={this.props.produto[x].imagem}
                  alt=""
                />
              </div>
              <div className="card-body">
                <div className="col-sm-8 col-md-12 col-xs-12 mt-0 mb-2">
                  <h5 className="card-title">
                    {this.props.produto[x].nome}
                    <p style={{ float: "right" }}>
                      Preço: {this.props.produto[x].preco}
                    </p>
                  </h5>
                </div>

                <div className="border mt-0 mb-2" />
                <p className="card-text">{this.props.produto[x].desc}</p>
                <div className="top-buffer">
                  <div className="border mt-0 mb-2" />
                  <div className="col-sm-8 col-md-12 col-xs-12 mt-0 mb-2">
                    <a href="#" className="">
                      {/* <i className="fas fa-comments-dollar px-1 fa-lg" /> */}
                      <FontAwesomeIcon
                        icon="comment-dollar"
                        size="2x"
                        className="prod-icons"
                      />
                    </a>
                    <a href="#" className="">
                      {/* <i className="fas fa-money-bill-wave px-1 fa-lg" /> */}
                      <FontAwesomeIcon
                        icon="dollar-sign"
                        size="2x"
                        className="prod-icons"
                      />
                    </a>
                    {/* <a
                      href="#"
                      className=""
                      onClick={() => this.props.curtir()}
                    >
                     
                      <FontAwesomeIcon
                        icon="heartbeat"
                        size="2x"
                        className="prod-icons"
                      />
                    </a> */}
                    {like}
                    <p style={{ float: "right" }}>
                      {youLiked}
                      {this.props.produto[x].likes} likes
                    </p>
                  </div>
                  <div className="border mt-0 mb-2" />
                  <div>
                    {comentarios}

                    <div>
                      <div className="form-row align-items-center">
                        <div
                          className="col-sm-4 col-md-10 col-xs-12"
                          style={{ width: "70%" }}
                        >
                          <label className="sr-only" htmlFor="inlineFormInput">
                            Name
                          </label>
                          <input
                            value={this.state.comentario}
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Envie sua pergunta ao vendedor"
                            onChange={e =>
                              this.setState({ comentario: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-auto">
                          <button
                            className="btn btn-primary mb-2"
                            onClick={() =>
                              this.comentar(
                                this.props.produto[x].id,
                                this.state.comentario
                              )
                            }
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
      );
      like = [];
      youLiked = <span />;
    }

    return produtos;
  }

  render() {
    return <span>{this.renderizarProdutos()}</span>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMainData: bindActionCreators(getMainData, dispatch)
  };
};

const mapStateToProps = state => {
  console.log("state.main", state);
  return {
    produto: state.MainReducer.produto
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderProd);
