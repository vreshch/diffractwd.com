import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DiffractWD - Support',
};

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-3xl">Support</h1>
      <hr className="my-4 border-t border-black/10" />
      <div className="text-justify">
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Author</dt>
          <dd className="ml-4">
            <a href="https://vreshch.com/contacts" target="_blank">
              <b>Volodymyr D. Vreshch</b>
            </a>
          </dd>
        </dl>
        <dl className="mb-4">
          <dt className="mb-4 text-xl font-bold text-heading">Feedback</dt>
          <dd className="ml-4">Feel free if you have:</dd>
          <dd className="ml-4">+ Suggestions</dd>
          <dd className="ml-4">+ Bug Reports</dd>
          <dd className="ml-4">+ Future requests</dd>
          <dd className="ml-4">+ Need Help</dd>
          <dd className="ml-4">Your feedback is very important to us</dd>
        </dl>
      </div>
    </div>
  );
}
