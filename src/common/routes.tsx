import * as React from "react";
import { Route, Switch } from "react-router";
import { Layout } from "./layout";
import {
    AboutPage,
    DownloadsPage,
    MainPage,
    NewsPage,
    NotFoundPage,
    QuickManualPage,
    ScreenShotsPage,
    SupportPage,
} from "./pages";

const RendererNotFound = ({ staticContext }) => {
     if (staticContext) {
         staticContext.status = 404;
     }
     return <NotFoundPage />;
};

export const Routes = (
    <Layout>
        <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/news.html" component={NewsPage} />
            <Route path="/about.html" component={AboutPage} />
            <Route path="/screenshots.html" component={ScreenShotsPage} />
            <Route path="/downloads.html" component={DownloadsPage} />
            <Route path="/quick_manual.html" component={QuickManualPage} />
            <Route path="/support.html" component={SupportPage} />
            <Route render={RendererNotFound} path="*" />
        </Switch>
    </Layout>
);

export default Routes;
