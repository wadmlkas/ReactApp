import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Main from "./main";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import App1 from "./containers/app1";
import { connect } from "react-redux";
import { changeNav } from "./actions";
import Auto from "./containers/Auto";

const Tutorial = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeNav: (list) => dispatch(changeNav(list)),
});

type RoutesProps = {
    changeNav: (list: string[]) => any;
};

const Routes = ({ changeNav }: RoutesProps) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute
                    component={Tutorial}
                    onEnter={() => changeNav(["home"])}
                />
                <Route
                    path="/app"
                    component={App1}
                    onEnter={() => changeNav(["home", "app"])}
                />
                <Route
                    path="/auto"
                    component={Auto}
                    onEnter={() => changeNav(["home", "auto"])}
                />
            </Route>
        </Router>
    );
};

export default connect(null, mapDispatchToProps)(Routes);
