import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo / bemutatkozás */}
          <div>
            <Link to="/" className="inline-block leading-none">
              <div className="text-2xl font-bold tracking-[0.08em]">
                KARIKA
              </div>

              <div className="mt-1 text-xs font-semibold tracking-[0.25em]">
                — NYOMDA —
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-black/60">
              Minőségi nyomdai megoldások, személyes odafigyeléssel.
            </p>
          </div>

          {/* Navigáció */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide">
              Navigáció
            </h2>

            <nav className="flex flex-col items-start gap-3 text-sm">
              <Link
                to="/"
                className="transition-opacity hover:opacity-60"
              >
                Főoldal
              </Link>

              <Link
                to="/szolgaltatasok"
                className="transition-opacity hover:opacity-60"
              >
                Szolgáltatásaink
              </Link>

              <Link
                to="/kapcsolat"
                className="transition-opacity hover:opacity-60"
              >
                Kapcsolat
              </Link>
            </nav>
          </div>

          {/* Kapcsolat */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide">
              Kapcsolat
            </h2>

            <div className="flex flex-col gap-3 text-sm text-black/60">
              <p>Balatonfőkajár</p>
              <p>Telefon: hamarosan</p>
              <p>Email: hamarosan</p>
            </div>
          </div>
        </div>

        {/* Alsó sor */}
        <div className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Karika Nyomda</p>

          <p>Minőség. Pontosság. Személyes odafigyelés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;