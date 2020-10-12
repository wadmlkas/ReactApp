import React from "react";
import {
    Nav,
    NavItem,
    NavLink,
    OverlayTrigger,
    Button,
    Tooltip,
    Popover,
} from "react-bootstrap";
import "../styles/sidebar.scss";
import { toggleOpen } from "../actions";
import { connect } from "react-redux";
import {
    AiOutlineDown,
    AiOutlineUp,
    AiOutlineHome,
    AiOutlineGlobal,
    AiOutlineSnippets,
    AiOutlineSetting,
} from "react-icons/ai";

const icons = {
    home: <AiOutlineHome />,
    global: <AiOutlineGlobal />,
    snippets: <AiOutlineSnippets />,
    setting: <AiOutlineSetting />,
};

const mapStateToProps = (state) => ({
    items: state.sidebar.items,
    shrink: state.sidebar.shrink,
});

const mapDispatchToProps = (dispatch) => ({
    toggleOpen: (name) => dispatch(toggleOpen(name)),
});

type SidebarProps = {
    items: any[];
    shrink: boolean;
    toggleOpen: (name: string) => void;
};

const Sidebar = ({ items, shrink, toggleOpen }: SidebarProps) => {
    const renderTooltip = (subitems) => (
        <Tooltip id="sidebar-item-tooltip" className="tooltip">
            {subitems.map((subitem) => (
                <a className="tooltip-link" href={subitem.link}>
                    <div className="tooltip-item">
                        <span className="tooltip-icon">
                            {icons[subitem.icon]}
                        </span>
                        <span>{subitem.name}</span>
                    </div>
                </a>
            ))}
        </Tooltip>
    );

    if (!shrink)
        return (
            <div className="sidebar-container">
                <Nav
                    variant="tabs"
                    activeKey="/"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    className="sidebar"
                >
                    {items.map((item) =>
                        item.subItems ? (
                            <NavItem>
                                <NavLink
                                    className="sidebar-link"
                                    onClick={() => {
                                        toggleOpen(item.name);
                                    }}
                                >
                                    <li className="sidebar-item">
                                        <span className="sidebar-icon">
                                            {icons[item.icon]}
                                        </span>
                                        <span className="sidebar-text">
                                            {item.name}
                                        </span>
                                        {item.isOpen ? (
                                            <AiOutlineDown className="sidebar-icon-arrow" />
                                        ) : (
                                            <AiOutlineUp className="sidebar-icon-arrow" />
                                        )}
                                    </li>
                                </NavLink>
                                {item.isOpen
                                    ? item.subItems.map((subItem) => (
                                          <NavLink
                                              href={subItem.link}
                                              className="sidebar-link"
                                          >
                                              <li className="sidebar-sub-item">
                                                  <span className="sidebar-text">
                                                      {subItem.name}
                                                  </span>
                                              </li>
                                          </NavLink>
                                      ))
                                    : null}
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLink
                                    href={item.link}
                                    className="sidebar-link"
                                >
                                    <div className="sidebar-item">
                                        <span className="sidebar-icon">
                                            {icons[item.icon]}
                                        </span>
                                        <span className="sidebar-text">
                                            {item.name}
                                        </span>
                                    </div>
                                </NavLink>
                            </NavItem>
                        )
                    )}
                </Nav>
            </div>
        );
    else
        return (
            <div className="sidebar-container-shrink">
                <Nav variant="tabs" activeKey="/" className="sidebar">
                    {items.map((item) =>
                        item.subItems ? (
                            <NavItem>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip(item.subItems)}
                                    trigger="focus"
                                >
                                    <NavLink className="sidebar-link">
                                        <li className="sidebar-item-shrink">
                                            <span className="sidebar-icon-shrink">
                                                {icons[item.icon]}
                                            </span>
                                        </li>
                                    </NavLink>
                                </OverlayTrigger>
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLink
                                    className="sidebar-link"
                                    href={item.link}
                                >
                                    <li className="sidebar-item-shrink">
                                        <span className="sidebar-icon-shrink">
                                            {icons[item.icon]}
                                        </span>
                                    </li>
                                </NavLink>
                            </NavItem>
                        )
                    )}
                </Nav>
            </div>
        );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
