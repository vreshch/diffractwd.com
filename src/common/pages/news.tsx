import * as React from "react";

export const NewsPage = () => {
        return (
            <div>
                <h1>News</h1>
                <hr />
                <div className="app-text">
                    <dl>
                        <dt>Website updated (17-October-2016)</dt>
                        <dd>Website core moved to React&MongoDB</dd>
                    </dl>
                    <dl>
                        <dt>Version 1.30 (28-January-2011)</dt>
                        <dd>Article is avalible : (
                          <a
                            href="http://scripts.iucr.org/cgi-bin/paper?wf5075"
                            target="_blank"
                          >V.D. Vreshch <b>J. App. Cryst.</b>,44, 219-220 <i>2011</i>
                          </a>)
                        </dd>
                        <dd>Windows Vista and Windows 7 suppport</dd>
                        <dd>New webpage design</dd>
                        <dd>Bug fix</dd>
                    </dl>
                    <dl>
                        <dt>Version 1.20 (27-October-2010)</dt>
                        <dd>
                            Background substract, Smoth,
                            and Scale function added
                        </dd>
                        <dd>Graph navigation improve</dd>
                        <dd>Revision of Powder Pattern generation module </dd>
                        <dd>Help menu added</dd>
                        <dd>Image export</dd>
                        <dd>Bug fix</dd>
                    </dl>
                    <dl>
                        <dt>Version 1.02 (16-June-2010)</dt>
                        <dd>Installation Package Available</dd>
                        <dd>Several Bug Fixed; </dd>
                        <dd>Native File Format Support; </dd>
                        <dd>Several Menu Items Added (Help)</dd>
                    </dl>
                    <dl>
                        <dt>Version 1.01 (6-June-2010)</dt>
                        <dd>Precompiled package available; </dd>
                        <dd>Source code (C#) available for download; </dd>
                    </dl>
                    <dl>
                        <dt>Version 1.00 (15-May-2010)</dt>
                        <dd>Program was distributed among limited number of users.</dd>
                        <dd>Several bug fixed</dd>
                    </dl>
                </div>
            </div>
        );
};
