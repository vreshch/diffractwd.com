import * as React from "react";
import { NavLink } from "react-router-dom";

export const AboutPage = () => {
        return (
          <div>
              <h1>About</h1>
              <hr />
              <div className="app-text">
                  <dl>
                      <dt>Supporting file formats</dt>
                      <dd>
                        <span className="underlined">Powder Pattern Import:</span>
                        Bruker/Siemens RAW Files (*.raw), Philips RD Files (*.rd),
                        Scintag ARD Files (*.ard), Sietronics CPI Files (*.cpi),
                        Riet7 DAT Files (*.dat), DBW Files (*.dbw), GSAS Files (*.gsas),
                        Jade MDI Files (*.mdi), Rigaku RIG Files (*.rig),
                        Philips UDF Files(*.udf), UXD Files (*.uxd),
                        XDA Files (*.xda), XDD Files (*.xdd), XY Files (*.xy)
                      </dd>
                      <dd>
                          <span className="underlined">Molecule Import:</span>
                          ShelX File (*.ins,*.res), Crystallography Information File (*.cif)
                      </dd>
                  </dl>
                  <dl>
                      <dt>Main functions</dt>
                      <dd>+ Multiple Powder Pattern and Molecule Import</dd>
                      <dd>+ Symulation of Powder Patterns based on single crystal data</dd>

                      <dd>+ Bsckground substraction, Smoth, and Scale of Powder Patterns</dd>
                      <dd>+ Working area properties change (Grids, Tics, Axis Labels,..) </dd>
                      <dd>+ Graph properties change (Color,...) </dd>
                      <dd>+ Picture export to *.wmf</dd>
                      <dd>+ Auto Update and Error Report modules</dd>
                  </dl>
                  <dl>
                      <dt>System requirements</dt>
                      <dd>Windows XP, Vista, Windows 7</dd>
                      <dd>Microsoft .NET Framework 2.0 need to be installed</dd>
                  </dl>
                  <dl>
                      <dt>Technical details</dt>
                      <dd>Program Written in C#, pure object orientated language.</dd>
                      <dd>Core is base on Sharp Develop, which were proved can be easily scale up.</dd>
                      <dd>Program can be easily extended through Addin system.</dd>
                      <dd>Licensed under terms of
                          <NavLink to="/license.html"><b>BSD</b> License.</NavLink>
                      </dd>
                  </dl>
                  <dl>
                      <dt>Modules included</dt>
                      <dd>ICSharpCode.Core (Sharp Develop Application Core)</dd>
                      <dd>ICSharpCode.AddInManager (Sharp Develop AddInManager)</dd>
                      <dd>ICSharpCode.SharpZipLib,Ionic.Zip (Zip support Library)</dd>
                      <dd>log4net (Log support)</dd>
                      <dd>PowDLL (Powder Pattern Import)</dd>
                      <dd>WeifenLuo.WinFormsUI.Docking  (Advanced Windows Docking)</dd>
                      <dd>ZedGraph (Graph Functionality)</dd>
                  </dl>
              </div>
          </div>
        );
};
