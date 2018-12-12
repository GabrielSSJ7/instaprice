import React, { Component } from "react";
import axios from "axios";

import Link from "next/link";
import Router from "next/router";
import Template from "../components/Template";
import Cookies from 'js-cookie';
import { validateToken } from "../components/Util";

const URL = "http://localhost:4000/";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      funcionando: false,
      email: "",
      password: "",
      error: ""
    };
  }

  redirectIfLogged() {
    if (localStorage.getItem("authToken")) {
      validateToken(localStorage.getItem("authToken"));    
    }
  }

  componentDidMount() {
    this.redirectIfLogged();
  }

  logar() {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(`${URL}login`, data)
      .then(res => {
        localStorage.setItem("authToken", res.data.token);
        Cookies.set('Authorization', `bearer ${res.data.token}`, { expires: 1 });
        axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`  // for all requests
        
        Router.push("/");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err.response.data
        });
      });
  }

  render() {
    return (
      <Template>
        <div style={{ backgroundColor: "#666666" }}>
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <div className="login100-form validate-form">
                  <span className="login100-form-title p-b-43">
                    Instaprice.me
                  </span>

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
                    data-validate="Password is required"
                  >
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <span className="focus-input100" />
                    <span className="label-input100">Senha</span>
                  </div>

                  <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <div className="contact100-form-checkbox">
                      <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="remember-me"
                      />
                      <label className="label-checkbox100" htmlFor="ckb1">
                        Lembrar
                      </label>
                    </div>

                    <div>
                      <a href="#" className="txt1">
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>

                  <div className="container-login100-form-btn">
                    <button
                      onClick={() => this.logar()}
                      className="login100-form-btn"
                    >
                      Login
                    </button>
                    <span className="txt2">
                      <Link href="/Cadastro">
                        <a>Cadastre-se agora</a>
                      </Link>
                    </span>
                  </div>

                  <br />

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
                  style={{
                    backgroundImage: "url('../static/images/bg-01.jpg')"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default Login;
