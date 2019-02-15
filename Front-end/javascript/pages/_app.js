import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../config/store";
import firebase from "firebase";

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

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
    }

    componentDidMount() {
      window.fbAsyncInit = function() {
        FB.init({
          appId: "2197222900499866",
          cookie: true,
          xfbml: true,
          version: "v3.1"
        });

        FB.AppEvents.logPageView();
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
