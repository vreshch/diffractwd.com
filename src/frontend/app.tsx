import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { Routes } from "../common/routes";

import { getMetaDataFromState } from "../common/utils";

const browserHistory = createBrowserHistory();

browserHistory.listen((ev) => {
    const meta = getMetaDataFromState({
        route: ev.pathname,
    });
    document.title = meta.title || "";
});

ReactDOM.render(
    <Router
        children={Routes}
        history={browserHistory}
    />,
    document.getElementById("app"),
);
