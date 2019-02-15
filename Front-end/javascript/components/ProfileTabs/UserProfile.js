import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);
library.add(faUser);

var dateFormat = require("dateformat");

export default props => {
  const { nome, cpf, sexo, data_de_nascimento, msg, email } = props.data;
  return (
    <div className="row top-buffer rounded col-md-12">
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{nome}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-1 col-sm-1 col-md-2 col-lg-2 center">
                {props.showPhoto()}

                <input
                  style={{ display: "none" }}
                  type="file"
                  id="foto"
                  name="foto"
                  onChange={e => {
                    props.handleImage(e);
                  }}
                />
                <label htmlFor="foto" className="btn btn-success">
                  Alterar foto
                </label>
              </div>

              <div className="col-md-8 col-lg-8 table-responsive ">
                <table className="table table-bordered table-hover table-sm">
                  <thead>
                    <tr>
                      <th scope="col">CPF:</th>

                      <th scope="col">Nascimento</th>

                      <th scope="col">Sexo</th>

                      <th scope="col">E-mail</th>

                      <th scope="col">Celular</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cpf ? cpf : "Não informado"}</td>
                      <td>
                        {data_de_nascimento
                          ? dateFormat(data_de_nascimento, "dd/mm/yyyy")
                          : "Não informado"}
                      </td>
                      <td>{sexo ? sexo : "Não informado"}</td>
                      <td>{email}</td>
                      <td>123-4567-8910</td>
                    </tr>
                  </tbody>
                </table>

                <h1 style={{ color: "red", textAlign: "center" }}>{msg}</h1>
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <a
              data-original-title="Broadcast Message"
              data-toggle="tooltip"
              type="button"
              className="btn btn-sm btn-primary"
            >
              <FontAwesomeIcon icon="user" size="2x" />
            </a>
            <span className="pull-right">
              <button
                onClick={() => props.onOpenModalEditUser()}
                data-original-title="Edit this user"
                data-toggle="tooltip"
                className="btn btn-sm btn-warning"
              >
                <FontAwesomeIcon icon="edit" size="2x" />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-2  toppad  pull-right col-md-offset-3 ">
        <a href="edit.html">Edit Profile</a>
        <a href="edit.html">Logout</a>

        <p className=" text-info">May 05,2014,03:00 pm </p>
      </div>
    </div>
  );
};
