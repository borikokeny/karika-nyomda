import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          KARIKA NYOMDA
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:underline"
          >
            Főoldal
          </Link>

          <Link
            to="/szolgaltatasok"
            className="text-sm font-medium hover:underline"
          >
            Szolgáltatásaink
          </Link>

          <Link
            to="/kapcsolat"
            className="text-sm font-medium hover:underline"
          >
            Kapcsolat
          </Link>

          <Link
            to="/kapcsolat"
            className="bg-black px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Ajánlatkérés
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;