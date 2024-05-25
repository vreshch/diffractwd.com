import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import classNames from 'classnames';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { usePathname } from 'next/navigation';


const ActiveLink = ({...props}: any) => {
    const pathname = usePathname();
    let className = props.className || '';
    if (pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    delete props.activeClassName;

    return <Link {...props} className={className}></Link>;
}

const Sidebar = ()=> {
    const [closed, setClosed] = useState(true);

    const sidebarClass = classNames({
        "jcw-sidebar": true,
        "closed": closed,
    });

    return (
        <div className={sidebarClass}>
            <div className="jcw-sidebar-mobile-nav bg-faded">
                <button className="navbar-toggler" onClick={()=> setClosed(!closed)} >☰</button>
            </div>
            <div className="jcw-sidebar-wrap">
                <ActiveLink href="/" className="jcw-sidebar-item" activeClassName="active">Home</ActiveLink>
                <ActiveLink href="/news" className="jcw-sidebar-item" activeClassName="active">News</ActiveLink>
                <ActiveLink href="/about" className="jcw-sidebar-item" activeClassName="active">About</ActiveLink>
                <ActiveLink href="/screenshots" className="jcw-sidebar-item" activeClassName="active">Screenshots</ActiveLink>
                <ActiveLink href="/downloads" className="jcw-sidebar-item" activeClassName="active">Downloads</ActiveLink>
                <ActiveLink href="/quick_manual" className="jcw-sidebar-item" activeClassName="active">Quick Manual</ActiveLink>
                <ActiveLink href="/support" className="jcw-sidebar-item" activeClassName="active">Support</ActiveLink>
            </div>
        </div>
    )
}

export default function MainLayout({ Component, pageProps }: AppProps) {

    return (
        <div className="app">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
                <meta name="author" content="Volodymyr D. Vreshch" />
                <meta name="description" content="DiffractWD - Free Open Source Software for Powder Diffraction Manipulation" />
                <meta name="keywords" content="DiffractWD, Powder Diffraction Software, Powder Pattern Simulation, Powder Data Visualization, Free Software Download" />
            </Head>
            <div className="app-container container">
                <div className="app-logo">
                    <div className="app-logo-img" />
                    <h2 className="app-logo-title">Diffract WD</h2>
                    <h3 className="app-logo-subtitle">:: by Vreshch ::</h3>
                </div>
                <div className="app-wrap row">
                    <div className="app-sidebar col-sm-12 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="app-content col-sm-12 col-md-9"><Component {...pageProps} /></div>
                </div>
                <footer>
                    <hr />© Vreshch V.D. {(new Date()).getFullYear()}
                </footer>
            </div>
        </div>
    );
}
