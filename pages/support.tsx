import Head from 'next/head';

export default function SupportPage() {
    return (
        <div>
            <Head>
                <title>DiffractWD - Support</title>
            </Head>
            <h1>Support</h1>
            <hr />
            <div className="app-text">
                <dl>
                    <dt>Author</dt>
                    <dd><a href="https://vreshch.com/contacts" target="_blank"><b>Volodymyr D. Vreshch</b></a></dd>
                </dl>
                <dl>
                    <dt>Feedback</dt>
                    <dd>Feel free if you have: </dd>
                    <dd>+ Suggestions</dd>
                    <dd>+ Bug Reports</dd>
                    <dd>+ Future requests</dd>
                    <dd>+ Need Help</dd>
                    <dd>Your feedback is very important to us</dd>
                </dl>
            </div>
        </div>
    );
};
