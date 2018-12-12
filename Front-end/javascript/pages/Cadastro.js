import React from "react";
import Router from "next/router";
import axios from "axios";

import Template from "../components/Template";

const URL = "http://localhost:4000/"

class Cadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      password: "",
      error: ""
    };
  }

  async cadastrar() {
    const data = {
      nome: this.state.nome,
      email: this.state.email,
      password: this.state.password
    };

    console.log(data);

    await axios
      .post(`${URL}signin`, data)
      .then(res => {
        console.log(res);
        //localStorage.setItem("authToken", res.data.token);
        Router.push("/Login");
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err.response.data});
      });
  }

  render() {
    return (
      <Template>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Instaprice.me
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Insira seu nome"
                >
                  <input
                    className="input100"
                    type="text"
                    name="nome"
                    onChange={e => this.setState({ nome: e.target.value })}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">Nome Completo</span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Insira um email válido: exemplo@dominio.com"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">Email</span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Insira uma senha"
                >
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">Senha</span>
                </div>

                <div className="container-login100-form-btn">
                  <button
                    onClick={() => this.cadastrar()}
                    className="login100-form-btn"
                  >
                    Cadastrar
                  </button>
                </div>

                <p style={{ textAlign: "center", color: "red" }}>
                  {this.state.error}
                </p>

                <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">Acesse usando</span>
                </div>

                <div className="login100-form-social flex-c-m">
                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg1 m-r-5"
                  >
                    <i className="fa fa-facebook-f" aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg2 m-r-5"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div
                className="login100-more"
                style={{ backgroundImage: "url('../static/images/bg-01.jpg')" }}
              />
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default Cadastro;
