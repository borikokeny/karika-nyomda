import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <nav className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-5 md:flex-row md:justify-between">

        {/* Logo */}
        <Link to="/" className="leading-none">
          <div className="text-center text-2xl font-bold tracking-[0.08em] md:text-left">
            KARIKA
          </div>

          <div className="mt-1 text-center text-xs font-semibold tracking-[0.25em] md:text-left">
            — NYOMDA —
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <Link
            to="/"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Főoldal
          </Link>

          <Link
            to="/szolgaltatasok"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Szolgáltatásaink
          </Link>

          <span className="cursor-not-allowed text-sm font-medium text-black/40">
            Munkáink
          </span>

          <span className="cursor-not-allowed text-sm font-medium text-black/40">
            Rólunk
          </span>

          <Link
            to="/kapcsolat"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Kapcsolat
          </Link>

          <Link
            to="/kapcsolat"
            className="bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Árajánlatot kérek
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="border-b border-black/10 bg-white">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
//         {/* Logo */}
//         <Link to="/" className="leading-none">
//           <div className="text-2xl font-bold tracking-[0.08em]">
//             KARIKA
//           </div>

//           <div className="mt-1 text-xs font-semibold tracking-[0.25em]">
//             — NYOMDA —
//           </div>
//         </Link>

//         {/* Navigation */}
//         <div className="flex items-center gap-8">
//           <Link
//             to="/"
//             className="text-sm font-medium transition-opacity hover:opacity-60"
//           >
//             Főoldal
//           </Link>

//           <Link
//             to="/szolgaltatasok"
//             className="text-sm font-medium transition-opacity hover:opacity-60"
//           >
//             Szolgáltatásaink
//           </Link>

//           <span className="cursor-not-allowed text-sm font-medium text-black/40">
//             Munkáink
//           </span>

//           <span className="cursor-not-allowed text-sm font-medium text-black/40">
//             Rólunk
//           </span>

//           <Link
//             to="/kapcsolat"
//             className="text-sm font-medium transition-opacity hover:opacity-60"
//           >
//             Kapcsolat
//           </Link>

//           <Link
//             to="/kapcsolat"
//             className="bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
//           >
//             Árajánlatot kérek
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;