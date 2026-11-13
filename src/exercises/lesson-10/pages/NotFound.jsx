import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        No page found for path: <code>{pathname}</code>
      </p>
      <div>
        <Link to="/">Back Home</Link>
      </div>
    </section>
  );
}
