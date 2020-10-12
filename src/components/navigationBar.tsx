import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/navigationBar.scss";
import "../styles/breadcrumb.scss";
import { toggleSidebar } from "../actions";
import { connect } from "react-redux";
import { Breadcrumb } from "react-bootstrap";

const mapStateToProps = (state) => ({
    shrink: state.sidebar.shrink,
    list: state.navigation.levelList,
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
});

type NavBarPorps = {
    shrink: boolean;
    toggleSidebar: () => void;
    list: string[];
};

const NavBar = ({ shrink, toggleSidebar, list }: NavBarPorps) => {
    return (
        <div className="navigation-bar">
            <AiOutlineMenu
                className={
                    shrink ? "navigation-icon-shrink" : "navigation-icon"
                }
                onClick={toggleSidebar}
            />
            <Breadcrumb className="breadcrumb">
                {list.map((item, i) => (
                    <span className="breadcrumb-item">
                        <a href="#" className="breadcrumb-link">
                            <span>{item}</span>
                            {i == list.length - 1 ? null : (
                                <span className="breadcrumb-seperator">/</span>
                            )}
                        </a>
                    </span>
                ))}
            </Breadcrumb>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
