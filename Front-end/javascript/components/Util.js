import axios from "axios";
import Router from "next/router";
import Index from "../pages/index";

const URL = "http://localhost:4000/"

export const validateToken = async token => {
  await axios
    .post(`${URL}validateToken`, { token })
    .then(res => {
      console.log(res.data);
      if (!res.data) {
        localStorage.removeItem("authToken");
        Router.push("/Login");
      } else {
        Router.push("/")
      }

      return res.data;
    });
};

export const curtirProduto = (prodId, cb) => {
  const token = localStorage.getItem("authToken");

  const instance = axios.create({
    headers: { Authorization: `bearer ${token}` }
  });

  instance
    .post(`${URL}like`, { produtoId: prodId, token })
    .then(res => {
      console.log(prodId);
      cb(`bearer ${token}`)
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
