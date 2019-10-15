import * as classNames from "classnames";
import * as React from "react";
import { NavLink } from "react-router-dom";

if (process.env.BROWSER) {
    // tslint:disable-next-line
    require("./sidebar.less");
}

export class Sidebar extends React.Component {

    public state: {
        closed: boolean,
    };

    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.render = this.render.bind(this);
        this.state = {
            closed: true,
        };
    }

    public toggleMenu() {
        (this as any).setState({
            closed: !this.state.closed,
        });
    }

    public render() {
        const sidebarClass = classNames({
            "jcw-sidebar": true,
            "closed": this.state.closed,
        });

        return (
            <div className={sidebarClass}>
                <div className="jcw-sidebar-mobile-nav bg-faded">
                    <button className="navbar-toggler" onClick={this.toggleMenu}>☰</button>
                </div>
                <div className="jcw-sidebar-wrap">
                    <NavLink exact={true} to="/" className="jcw-sidebar-item" activeClassName="active">Home</NavLink>
                    <NavLink to="/news.html" className="jcw-sidebar-item" activeClassName="active">News</NavLink>
                    <NavLink to="/about.html" className="jcw-sidebar-item" activeClassName="active">About</NavLink>
                    <NavLink to="/screenshots.html" className="jcw-sidebar-item" activeClassName="active">Screenshots</NavLink>
                    <NavLink to="/downloads.html" className="jcw-sidebar-item" activeClassName="active">Downloads</NavLink>
                    <NavLink to="/quick_manual.html" className="jcw-sidebar-item" activeClassName="active">Quick Manual</NavLink>
                    <NavLink to="/support.html" className="jcw-sidebar-item" activeClassName="active">Support</NavLink>
                </div>
            </div>
        );
    }
}
