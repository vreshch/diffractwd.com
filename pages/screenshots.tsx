import Head from 'next/head';
import Image from 'next/image';

export default function ScreenShotsPage() {
        return (
            <div>
                <Head>
                    <title>DiffractWD - Screenshots</title>
                </Head>
                <h1>Screenshots</h1>
                <hr />
                <div className="app-text">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot1.jpg" title="Default Open Window" target="_blank">
                                <Image src="/screenshots/screenshot1_mini.jpg" className="img-thumbnail" width={286} height={204} alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Default Open Window</p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot2.jpg" title="Powder Pattern Import" target="_blank">
                                <Image src="/screenshots/screenshot2_mini.jpg" className="img-thumbnail" width={286} height={204} alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Powder Pattern Import</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot3.jpg" title="Powder Pattern Simulation" target="_blank">
                                <Image src="/screenshots/screenshot3_mini.jpg" className="img-thumbnail" width={286} height={204} alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Powder Pattern Simulation</p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-xs-center">
                            <a href="images/screenshots/screenshot4.jpg" title="Advanced Windows Docking" target="_blank">
                                <Image src="/screenshots/screenshot4_mini.jpg" className="img-thumbnail" width={286} height={204} alt="Diffract WD Screenshot #1" />
                            </a>
                            <p>Advanced Windows Docking</p>
                        </div>
                    </div>
                </div>
            </div>
        );
};
