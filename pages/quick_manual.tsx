import Head from 'next/head';
import Image from 'next/image';

export default function QuickManualPage() {
    return (
        <div>
            <Head>
                <title>DiffractWD - Quick Manual</title>
            </Head>
              <h1>Quick Manual</h1>
              <hr />
              <div className="app-text">
                  <div className="row app-row">
                      <div className="col-sm-12 col-md-4 text-xs-center">
                            <Image src="/manual/help1.jpg" className="img-thumbnail" width="288" height="201" alt="Diffract WD Help #1" />
                      </div>
                      <div className="col-sm-12 col-md-8">
                          <h3>Step 1</h3>
                          <p>Import all necessary files.<br />
                              <u>Supported Powder Pattern File formats:</u>
                              *.raw, *.rd,*.ard, *.cpi, *.dat, *.dbw, *.gsas, *.mdi, *.rig,
                              *.udf, *.uxd, *.xda, *.xdd, *.xy
                              <br /><u>Molecule Import:</u> ShelX File (*.ins,*.res), Crystallography Information File (*.cif)
                          </p>
                      </div>
                  </div>

                  <div className="row app-row">
                      <div className="col-sm-12 col-md-4 text-xs-center">
                            <Image src="/manual/help2.jpg" className="img-thumbnail" width="288" height="201" alt="Diffract WD Help #2" />
                      </div>
                      <div className="col-sm-12 col-md-8">
                          <h3>Step 2</h3>
                          <p>Change visibility and perform all necessary conclusions</p>
                      </div>
                  </div>

                  <div className="row app-row">
                      <div className="col-sm-12 col-md-4 text-xs-center">
                            <Image src="/manual/help3.jpg" className="img-thumbnail" width="288" height="201" alt="Diffract WD Help #3" />
                      </div>
                      <div className="col-sm-12 col-md-8">

                          <h3>Step 3</h3>
                          <p>If necessary : change properties <br />- 2 Theta range, FWHM of profiles, Curves color</p>
                      </div>
                  </div>

                  <div className="row app-row">
                      <div className="col-sm-12 col-md-4 text-xs-center">
                            <Image src="/manual/help4.jpg" className="img-thumbnail" width="288" height="201" alt="Diffract WD Help #4" />
                      </div>
                      <div className="col-sm-12 col-md-8">
                          <h3>Step 4</h3>
                          <p>Copy image to clipboard<br /></p>
                      </div>
                  </div>
              </div>
        </div>
    )
}
