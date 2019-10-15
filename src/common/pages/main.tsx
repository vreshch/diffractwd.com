import * as React from "react";

export const MainPage = () => {
    return (
        <div>
            <h1>Overview</h1>
            <hr />
            <div className="app-text">
                <p><b>DiffractWD</b> is a tool to easily manipulate with Powder Patterns,
                both experimental and simulated.
                The user interface is designed to be simple and user-friendly,
                and do not require any crystallographic background.
                With just a few clicks - you can compare measured  patterns,
                and prepare picture for publication.</p>

                <div className="app-index-img">
                    <a href="/screenshots.html">
                        <img src="/images/prnsrc.png" width="288" height="201" alt="DiffractWD print Screen" />
                    </a>
                </div>

                <p><i>Source Code</i> of DiffractWD <i>is open</i> for public, and build based on Extendable system.
                The system provide developers with interfaces to build their own addin's, and extend minimal functions.</p>

                <p>Please note, DiffractWD is far from complete. Program contain Autoupdate and Error Report
                    modules - and will <i>let you to have the latest stable version</i> installed.
                There are many missing features that are planned for future versions.</p>

                <br />
                <div>
                    <a href="/downloads/diffractwd.exe" className="btn btn-outline-primary">DiffractWD Download</a>
                </div>
            </div>
        </div>
    );
};
