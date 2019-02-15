import React from "react";
import Router from 'next/router'
import firebase from "firebase";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";
import Template from "../components/Template";
import axios from 'axios'

import { inserirProduto } from '../components/Util';

import { URL as URL_ } from "../config/types";

class Post extends React.Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyBEDZLOIOmjgAIyy7PIdKbcKqajbE8sxaY",
      authDomain: "projeto-teste-d356c.firebaseapp.com",
      databaseURL: "https://projeto-teste-d356c.firebaseio.com",
      projectId: "projeto-teste-d356c",
      storageBucket: "projeto-teste-d356c.appspot.com",
      messagingSenderId: "605367050222"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.state = {
      image: "Selecione uma imagem",
      uploadImage: "",
      nome: "",
      preco: "",
      desc: "",
      imagem: ""
    };
  }

  handleImage = event => {
    this.setState({ uploadImage: event.target.files[0] });
    var output = document.getElementById("imageArticle");
    if (event.target.files[0]) {
      if (event.target.files[0].name.length > 10) {
        this.setState({
          image: event.target.files[0].name.substr(0, 16) + "..."
        });
      }
      output.src = URL.createObjectURL(event.target.files[0]);
    } else {
      output.src = "";
      this.setState({ image: "Selecione uma imagem" });
    }
  };

  

  divulgar() {
    console.log(this.state.uploadImage)
    inserirProduto(this.state.uploadImage, this)
  }

  render() {
    return (
      <div>
        <Template>
          <TopMenu props={this.props} />

          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-4 form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="nome"
                  id="nome"
                  name="nome"
                  onChange={e => {this.setState({ nome: e.target.value})}}
                  value={this.state.nome}
                />
              </div>
              <div className="col-md-4 col-xs-4 form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="preço"
                  id="preco"
                  name="preco"
                  onChange={e => {this.setState({ preco: e.target.value})}}
                  value={this.state.preco}
                />
              </div>
              <div className="col-md-4 col-xs-4 form-group">
                <img
                  id="imageArticle"
                  alt="Imagem a ser upload"
                  style={{ width: "100%" }}
                />
                <button className="btn btn-success">
                  <label style={{ cursor: "pointer" }} htmlFor="uploadImage">
                    {this.state.image}
                  </label>
                </button>

                <input
                  style={{ display: "none" }}
                  className="form-control"
                  type="file"
                  id="uploadImage"
                  onChange={this.handleImage}
                  name="uploadImage"
                />
                <h4>Progresso do upload {this.state.progress}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <textarea
                  className="form-control"
                  onChange={e => {this.setState({ desc: e.target.value})}}
                  value={this.state.desc}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="col-xs-6 col-md-6">
                <button
                  className="btn btn-danger"
                  onClick={() => this.divulgar()}
                >
                  Divulgar
                </button>
              </div>
            </div>

            <h4 style={{ color: "red", textAlign: "center"}}>{this.state.erro}</h4>
          </div>

          <BottomMenu />
        </Template>
      </div>
    );
  }
}

export default Post;
