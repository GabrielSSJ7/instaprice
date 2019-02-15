import axios from "axios";
import Router from "next/router";
import Index from "../pages/index";
import firebase from "firebase";
import Cookies from "js-cookie";

import { library, text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);
library.add(faUser);
library.add(faTrash);

import { URL, FACEBOOK_PROFILE_PIC_URL } from "../config/types";

export const getAddress = ctx => {
  const instance = axios.create({
    headers: { Authorization: `bearer ${localStorage.getItem("authToken")}` }
  });

  instance
    .get(`${URL}address/${localStorage.getItem("authToken")}`)
    .then(res => {
      renderAddress(res.data, ctx);
    });
};

export const renderAddress = (enderecos, ctx) => {
  let elementEndereco = [];
  let lastIndex = 0;
  for (let x = 0; x < enderecos.length; x++) {
    lastIndex++;
    elementEndereco.push(
      <div className="jumbotron jumbotron-fluid" key={x}>
        <div className="container">
          <h3>{enderecos[x].endereco}</h3>

          <span className="pull-right">
            <button
              onClick={() => {
                ctx.deleteAddress(enderecos[x].id);
              }}
              data-original-title="Edit this user"
              data-toggle="tooltip"
              className="btn btn-sm btn-danger"
            >
              <FontAwesomeIcon icon="trash" size="1x" />
            </button>
            <button
              onClick={() => {
                ctx.onUpdateItems(x, enderecos);
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
    );
  }
  ctx.setState({ arrayAddress: elementEndereco });
};

export const renderCards = (cards, ctx) => {
  let cardElement = [];
  for (let x = 0; x < cards.length; x++) {
  
    cardElement.push(
      <div className="jumbotron jumbotron-fluid" key={x}>
        <div className="container">
          <h3>{cards[x].nome}</h3>

          <p>Número: {cards[x].numero}</p>
          <p>Validade: {cards[x].validade}</p>
          <p>Bandeira: {cards[x].bandeira}</p>
          <p>Código de segurança: {cards[x].codigo_seguranca}</p>

          <span className="pull-right">
            <button
              onClick={() => {
                ctx.deleteCards(cards[x].id);
              }}
              data-original-title="Edit this user"
              data-toggle="tooltip"
              className="btn btn-sm btn-danger"
            >
              <FontAwesomeIcon icon="trash" size="1x" />
            </button>
            <button
              onClick={() => {
                ctx.onUpdateItems(x, cards);
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
    );
  }
  ctx.setState({ arrayCards: cardElement });
};

export const getCards = ctx => {
  const instance = axios.create({
    headers: { Authorization: `bearer ${localStorage.getItem("authToken")}` }
  });

  instance
    .post(`${URL}cartoes`, { token: localStorage.getItem("authToken") })
    .then(res => {
      renderCards(res.data, ctx);
    });
};

export const validateToken = async token => {
  await axios.post(`${URL}validateToken`, { token }).then(res => {
    console.log(res.data);
    if (!res.data) {
      localStorage.removeItem("authToken");
      Router.push("/Login");
    } else {
      Router.push("/");
    }

    return res.data;
  });
};

export const curtirProduto = (prodId, cb) => {
  const token = localStorage.getItem("authToken");

  const instance = axios.create({
    headers: { Authorization: `bearer ${token}` }
  });

  instance.post(`${URL}like`, { produtoId: prodId, token }).then(res => {
    console.log(prodId);
    cb(`bearer ${token}`);
  });
};

export const comentar = (prodId, comentario) => {
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
      Index.refresh(res.data);
    });
};

export const inserirProduto = (event, ctx) => {
  if (event.name != null) {
    const data = {
      nome: ctx.state.nome,
      preco: ctx.state.preco,
      desc: ctx.state.desc,
      token: localStorage.getItem("authToken")
    };

    uploadImage(data, "insert", event, ctx);
  } else if (ctx.state.nome == null || ctx.state.nome == "") {
    ctx.setState({
      erro: "É necessário que o item tenha nome"
    });
  } else if (ctx.state.preco == null || ctx.state.preco == "") {
    ctx.setState({
      erro: "É necessário que o item tenha preco"
    });
  } else if (ctx.state.desc == null || ctx.state.desc == "") {
    ctx.setState({
      erro: "É necessário descrever o item"
    });
  } else {
    ctx.setState({
      erro: "É necessário ter uma imagem"
    });
  }
};

export const editUser = (data, event, ctx) => {
  data = {
    ...data,
    token: localStorage.getItem("authToken")
  };

  if (event != null) {
    console.log("upload");

    uploadImage(data, "useredit", event, ctx);
  } else {
    console.log("req");
    const token = localStorage.getItem("authToken");

    const instance = axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    instance
      .post(`${URL}useredit`, data)
      .then(res => {
        ctx.setState({ openEditUser: false, msg: "Alterado com sucesso" });
        ctx.getAllUserData();
      })
      .catch(err => {
        ctx.getAllUserData();
        ctx.setState({ openEditUser: false, msg: err.response.data });
      });
  }
};

const uploadImage = (data, urlRequest, event, ctx) => {
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

      ctx.setState({ progress: `${progress.toFixed(2)}%` });
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
          data = { ...data, foto: downloadURL, imagem: downloadURL };

          const instance = axios.create({
            headers: {
              Authorization: `bearer ${localStorage.getItem("authToken")}`
            }
          });

          instance
            .post(`${URL}${urlRequest}`, data)
            .then(res => {
              console.log("upload", res);
              editPhotoUserSuccess(urlRequest, ctx);
            })
            .catch(err => {
              editPhotoUserFail(urlRequest, ctx);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  );
};

const editPhotoUserSuccess = (urlRequest, ctx) => {
  if (urlRequest == "useredit") {
    ctx.setState({ open: false });
    ctx.getAllUserData();
  }
};

const editPhotoUserFail = (urlRequest, ctx) => {
  if (urlRequest == "useredit") {
    ctx.getAllUserData();
    ctx.setState({
      msg: err.response ? err.response.data : err
    });
  }
};

export const loginWithFacebook = () => {
  FB.login(
    function(response) {
      if (response.authResponse) {
        var url = "/me?fields=name,email";

        FB.api(url, function(response) {
          console.log(response);
          const data = {
            nome: response.name,
            email: response.email,
            foto: FACEBOOK_PROFILE_PIC_URL(response.id)
          };

          axios
            .post(`${URL}signin-with-facebook`, data)
            .then(res => {
              localStorage.setItem("authToken", res.data.token);
              Cookies.set("Authorization", `bearer ${res.data.token}`, {
                expires: 1
              });

              axios.defaults.headers.common["Authorization"] = `bearer ${
                res.data.token
              }`; // for all requests

              Router.push("/");
            })
            .catch(err => {
              console.log(err);
            });
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    { scope: "email" }
  );
};
