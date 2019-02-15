import Head from "next/head";
import io from "socket.io-client";
import Axios from "axios";
import { URL } from "../config/types";

const socketUrl = "http://localhost:4000";
let socket = null;

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: []
    };
  }

  receiveMsg = () => {
    socket.on("receiveMsg", data => {
      let msg = this.state.msg;
      msg.push(<h4>{data.msg}</h4>);
      this.setState({ msg });
    });
  };

  componentWillUnmount(){
    console.log("desmontar")
    socket.emit('desconectar', { reason: 'porque eu quis'})
    // socket.disconnect()
    //   socket.on("usuarioSaiu", function(data){
    //       //socket.emit("usuarioSaiu",{ token: localStorage.getItem("authToken")})
    //       console.log(data)
    //       socket.disconnect()
    //   })
  }

  componentDidMount() {
    if (!this.state.changeToChat) {
      socket = io(socketUrl);
      socket.on("connect", function() {
        socket.emit("registrarUsuario", { token: localStorage.getItem("authToken")})
       
      });
    }

    Axios.get(`${URL}getAllUser`)
      .then(res => {
        let html = [];
        for (let i = 0; i < res.data.length; i++) {
          html.push(
            <li key={res.data[i].id}>
              <a
                onClick={() => {
                  this.setState({
                    changeToChat: true,
                    userId: res.data[i].id
                  });
                }}
              >
                {res.data[i].nome}
              </a>
              :
              {res.data[i].socketId ? res.data[i].socketId : "offline"}
            </li>
          );
        }
        this.setState({
          listUser: html
        });
      })
      .catch(erro => {
        
      });
    this.receiveMsg();
  }
  render() {
   

    if (!this.state.changeToChat) {
      return (
        <div>
          <ul>{this.state.listUser}</ul>
        </div>
      );
    }
    return (
      <div>
        <Head>
          <title>Multiroom Chat</title>

          <script src="js/jquery-2.2.1.js" />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
            integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
            crossorigin="anonymous"
          />

          <link href="css/style.css" rel="stylesheet" />
        </Head>

        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-collapse-1"
                id="btn_navbar_toggle"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Multiroom Chat
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#" id="exibe_chat">
                    Chat
                  </a>
                </li>
                <li>
                  <a href="#" id="exibe_participantes">
                    Participantes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row" id="conversa">
            <div className="col-md-1" />
            <div
              className="col-md-10"
              id="dialogos"
              style={{ minHeight: "300px" }}
            >
              {this.state.msg}
            </div>
            <div className="col-md-1" />
          </div>
        </div>

        <nav
          className="navbar navbar-default navbar-fixed-bottom"
          role="navigation"
        >
          <div className="container">
            <div className="panel-body campo-mensagem">
              <div className="col-md-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mensagem"
                    id="mensagem"
                  />
                  <input
                    type="hidden"
                    value="<%=dadosForm.apelido%>"
                    id="apelido"
                  />
                  <input
                    type="hidden"
                    value="0"
                    id="apelido_atualizado_nos_clientes"
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
                      type="button"
                      id="enviar_mensagem"
                      onClick={() => {
                        socket.emit("sendMsg", {
                          msg: "MENSAGEM DE TESTE",
                          id: socket.name,
                        });
                      }}
                    >
                      >
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      // <script src="/socket.io/socket.io.js"></script>
      // <script>
      // 	var socket = io('http://localhost');

      // 	$('#enviar_mensagem').click( function(){

      // 		socket.emit(
      // 			'msgParaServidor',
      // 			{
      // 				apelido: $('#apelido').val(),
      // 				mensagem: $('#mensagem').val(),
      // 				apelido_atualizado_nos_clientes : $('#apelido_atualizado_nos_clientes').val()
      // 			}
      // 		);

      // 		$('#mensagem').val("");
      // 		$('#apelido_atualizado_nos_clientes').val(1);
      // 	});

      // 	socket.on('msgParaCliente', function(data){
      // 		var html = '';

      // 		html += '<div className="dialogo">';
      // 			html += '<h4>' + data.apelido + '</h4>';
      // 			html += '<p>' + data.mensagem + '</p>';
      // 		html += '</div>';

      // 		$('#dialogos').append(html);

      // 		window.scrollTo(0, document.body.scrollHeight);
      // 	});

      // 	socket.on('participantesParaCliente', function(data){
      // 		var html = '';

      // 		html += '<span className="participante">';
      // 			html += '<img src="images/ico_usuario.png">';
      // 			html += data.apelido;
      // 		html += '</span>';

      // 		$('#pessoas').append(html);
      // 	});
      // </script>
    );
  }
}
