import { Provider } from "react-redux";

import Template from "../components/Template";
import withRedux from "next-redux-wrapper";

const App = props => (
    <Provider store={props.store}>
        <Template />
    </Provider>
);

export default withRedux(makeStore)(App);