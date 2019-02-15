import React from "react";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-responsive-modal";
import Axios from "axios";
import { URL } from "../../config/types";
library.add(faEdit);
library.add(faUser);

import { getAddress, renderAddress } from "../Util";

export default class AddressProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editAddress: false,
      arrayAddress: [],
      addressForUpdate: "",
      enderecos: [],
      openInsertAddress: false
    };
  }

  componentDidMount() {
    getAddress(this);
  }

  changeEditAddress() {
    if (this.state.editAddress) {
      this.setState({ editAddress: false });
    } else {
      this.setState({ editAddress: true });
    }
  }

  changeAddressText(e) {
    this.setState({ addressForUpdate: e.target.value });
  }

  insertEditAddress(id) {
    const token = localStorage.getItem("authToken");

    const instance = Axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    const data = {
      address: this.state.addressForUpdate,
      token,
      id: id ? id : 0
    };

    instance
      .post(`${URL}inserteditaddress`, data)
      .then(res => {
        getAddress(this);
      })
      .catch(e => {
      });
  }

  onUpdateItems = (key, enderecos) => {
    this.setState((state, props) => {
      let textAddress = "";
      const arrayAddress = state.arrayAddress.map((item, j) => {
        if (key == item.key) {
          textAddress = enderecos[item.key].endereco;
          return (item = (
            <div class="jumbotron jumbotron-fluid" key={item.key}>
              <div class="container">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={textAddress}
                  onChange={e => {
                    e.persist();
                    this.changeAddressText(e);
                    //this.setState({ addressForUpdate: e.target.value });
                  }}
                />
                <span className="pull-right">
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      this.insertEditAddress(enderecos[item.key].id)
                    }
                  >
                    Atualizar
                  </button>
                  <button
                    onClick={() => {
                      renderAddress(enderecos, this);
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
        arrayAddress,
        addressForUpdate: textAddress
      };
    });
  };

  deleteAddress(id) {
    const token = localStorage.getItem("authToken");

    const instance = Axios.create({
      headers: { Authorization: `bearer ${token}` }
    });

    const data = {
      id: id
    };

    instance
      .post(`${URL}deleteaddress`, data)
      .then(res => {
        getAddress(this);
      })
      .catch(e => {});
  }

  render() {
    const { openInsertAddress } = this.state;
    return (
      <div className="row">
        <Modal
          open={openInsertAddress}
          onClose={() => this.setState({ openInsertAddress: false })}
        >
          <div style={{ padding: "25px" }}>
            <div className="form-group">
              <label htmlFor="nome">Endereco</label>
              <input
                placeholder="Rua alvarenga, 541 - Jardim Silvia, 06824270 - SP"
                className="form-control"
                value={this.state.addressForUpdate}
                onChange={e =>
                  this.setState({ addressForUpdate: e.target.value })
                }
                type="text"
                id="nome"
              />
            </div>

            <button
              onClick={() => this.insertEditAddress(null)}
              className="btn btn-success"
            >
              Finalizar
            </button>
          </div>
        </Modal>
        <div className="col-sm-12 col-md-12 col-xs-12">
          {this.state.arrayAddress}
          <button
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
