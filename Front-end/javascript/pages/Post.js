import React from "react";
import Router from 'next/router'
import firebase from "firebase";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";
import Template from "../components/Template";
import axios from 'axios'


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

  inserirProduto(event,ctx) {
    if(event.name != null) {
    var storageRef = firebase.storage().ref();

    const metadata = {
      contentType: event.type
    };

    let uploadTask = storageRef
      .child("images/" + event.name + Date.now())
      .put(event, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        ctx.setState({ progress: `${progress.toFixed(2)}%` })
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;

          case "storage/invalid-argument":
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(function(downloadURL) {
            const data = {
              nome: ctx.state.nome,
              preco: ctx.state.preco,
              desc: ctx.state.desc,
              imagem: downloadURL,
              token: localStorage.getItem("authToken")
            };

            const instance = axios.create({
              headers: {
                Authorization: `bearer ${localStorage.getItem("authToken")}`
              }
            });

            instance.post(`${URL_}insert`, data).then(res => {
              Router.push("/");

            })
            .catch(err => {
              ctx.setState({
                erro: err.response ? err.response.data : err
              })
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    );
    } else if(ctx.state.nome == null || ctx.state.nome == "") {
      ctx.setState({
        erro: "É necessário que o item tenha nome"
      })
    }
    else if(ctx.state.preco == null || ctx.state.preco == "") {
      ctx.setState({
        erro: "É necessário que o item tenha preco"
      })
    }
    else if(ctx.state.desc == null || ctx.state.desc == "") {
      ctx.setState({
        erro: "É necessário descrever o item"
      })
    }
     else {
      ctx.setState({
        erro: "É necessário ter uma imagem"
      })
    }
  }

  divulgar() {
    console.log(this.state.uploadImage)
    this.inserirProduto(this.state.uploadImage, this)
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
