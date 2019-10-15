import * as React from "react";
import { NavLink } from "react-router-dom";

export const DownloadsPage = () => {
        return (
            <div>
              <h1>Downloads</h1>
                <hr />
                <div className="app-text">
                    <dl>
                        <dt>DiffractWD 1.30</dt>
                        <dd>
                            <div className="app-text-download-row">
                                <a href="/downloads/diffractwd.exe">
                                    <img src="/images/setup.png" className="app-text-download-icon"   width="48" height="48" alt="Download Program" />
                                    <span className="underline">
                                        Installation program
                                    </span>
                                </a>
                            </div>
                            <div className="app-text-download-row">
                                <a href="/downloads/diffractwd_bin.zip">
                                <img src="/images/package.png" className="app-text-download-icon" width="48" height="48" alt="Download Compressed Binaries" />
                                    <span className="underline">Compressed binaries</span>
                                </a>
                            </div>
                            <div className="app-text-download-row">
                                <a href="/downloads/diffractwd_src.zip">
                                    <img src="/images/source.png" className="app-text-download-icon" width="48" height="48" alt="Download Source Files" />
                                    <span className="underline">Source files</span>
                                </a>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Requirements</dt>
                        <dd>Windows XP, Vista or Windows 7</dd>
                        <dd>Microsoft .NET Framework 2.0</dd>
                    </dl>
                    <dl>
                        <dt>License</dt>
                        <dd>DiffractWD is totally free and licensed under the <NavLink to="/license.html">BSD License</NavLink>.</dd>
                    </dl>
                </div>
            </div>
        );
};
