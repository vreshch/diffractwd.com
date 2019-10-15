import * as React from "react";

export const ScreenShotsPage = () => {
        return (
            <div>
                <h1>Screenshots</h1>
                <hr />
                <div className="app-text">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot1.jpg" title="Defalut Open Window" target="_blank">
                                <img src="images/screenshots/screenshot1_mini.jpg" className="img-thumbnail" alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Default Open Window</p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot2.jpg" title="Powder Patern Import" target="_blank">
                                <img src="images/screenshots/screenshot2_mini.jpg" className="img-thumbnail" alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Powder Pattern Import</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot3.jpg" title="Powder Patern Symulation" target="_blank">
                                <img src="images/screenshots/screenshot3_mini.jpg" className="img-thumbnail" alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Powder Pattern Simulation</p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot4.jpg" title="Advanced Windows Docking" target="_blank">
                                <img src="images/screenshots/screenshot4_mini.jpg" className="img-thumbnail" alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Advanced Windows Docking</p>
                        </div>
                    </div>
                </div>
            </div>
        );
};
