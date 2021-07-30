import Image from 'next/image';
import Link from 'next/link';

export default function DownloadsPage() {
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
                                    <Image src="/setup.png" className="app-text-download-icon"   width="48" height="48" alt="Download Program" />
                                    <div className="app-text-download-text underline">
                                        Installation program
                                    </div>
                                </a>
                            </div>
                            <div className="app-text-download-row">
                                <a href="/downloads/diffractwd_bin.zip">
                                    <Image src="/package.png" className="app-text-download-icon" width="48" height="48" alt="Download Compressed Binaries" />
                                    <div className="app-text-download-text underline">Compressed binaries</div>
                                </a>
                            </div>
                            <div className="app-text-download-row">
                                <a href="/downloads/diffractwd_src.zip">
                                    <Image src="/source.png" className="app-text-download-icon" width="48" height="48" alt="Download Source Files" />
                                    <div className="app-text-download-text underline">Source files</div>
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
                        <dd>DiffractWD is totally free and licensed under the <Link href="/license"><a>BSD License</a></Link>.</dd>
                    </dl>
                </div>
            </div>
        );
};
