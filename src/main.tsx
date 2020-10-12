import React from "react";
import Sidebar from "./components/sidebar";
import "./styles/main-container.scss";
import NavBar from "./components/navigationBar";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    shrink: state.sidebar.shrink,
});

type MainProps = {
    children?: any;
    shrink: boolean;
};

const Main = ({ shrink, children }: MainProps) => {
    return (
        <div>
            <Sidebar />
            <div
                className={shrink ? "main-container-shrink" : "main-container"}
            >
                <NavBar />
                <section className="app-main">
                    <div className="app-container">{children}</div>
                </section>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Main);
