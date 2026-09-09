import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

function ServicePage() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-bold">A szolgáltatás nem található.</h1>

        <Link
          to="/szolgaltatasok"
          className="mt-6 inline-block font-semibold hover:opacity-60"
        >
          ← Vissza a szolgáltatásokhoz
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <div className="text-sm text-black/50">
          <Link to="/" className="hover:text-black">
            Főoldal
          </Link>

          <span className="mx-3">›</span>

          <Link to="/szolgaltatasok" className="hover:text-black">
            Szolgáltatásaink
          </Link>

          <span className="mx-3">›</span>

          <span className="text-black/70">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {service.title}
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium leading-8">
            {service.description}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/70">
            {service.details?.intro}
          </p>

          <Link
            to="/kapcsolat"
            className="mt-8 inline-flex bg-black px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Árajánlatot kérek
          </Link>
        </div>

        <div className="overflow-hidden bg-black/5">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      {/* Információs navigáció */}
<div className="border-y border-black/10">
  <div className="mx-auto grid max-w-7xl grid-cols-3 px-6">
    <a
      href="#meretek"
      className="border-r border-black/10 px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60"
    >
      Méretek
    </a>

    <a
      href="#papirfajtak"
      className="border-r border-black/10 px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60"
    >
      Papírfajták
    </a>

    <a
      href="#rendeles"
      className="px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60"
    >
      Rendelés leadása
    </a>
  </div>
</div>

{/* Méretek és papírfajták */}
<section className="mx-auto grid max-w-7xl md:grid-cols-2">
  {/* Méretek */}
  <div id="meretek" className="scroll-mt-20 border-b border-black/10 p-8 md:border-r md:py-12">
    <h2 className="text-2xl font-bold tracking-tight">
      Méretek
    </h2>

    <p className="mt-3 text-sm leading-6 text-black/60">
      A leggyakrabban használt névjegykártya méretek:
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {service.details?.sizes?.map((size) => (
        <div
          key={size.name}
          className="flex min-h-28 flex-col items-center justify-center border border-black/20 p-4 text-center"
        >
          <span className="text-lg font-medium">
            {size.name}
          </span>

          <span className="mt-2 text-xs text-black/60">
            {size.description}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-6 text-sm font-semibold">
      Egyedi méreteket is vállalunk.
    </p>
  </div>

  {/* Papírfajták */}
  <div
    id="papirfajtak"
    className="border-b border-black/10 p-8 md:py-12"
  >
    <h2 className="text-2xl font-bold tracking-tight">
      Papírfajták
    </h2>

    <p className="mt-3 text-sm leading-6 text-black/60">
      Válassz a különböző papírtípusok és felületkezelések közül:
    </p>

    <ul className="mt-6 space-y-3">
      {service.details?.paperTypes?.map((paper) => (
        <li
          key={paper}
          className="flex items-center gap-3 text-sm"
        >
          <span aria-hidden="true">✓</span>
          {paper}
        </li>
      ))}
    </ul>
  </div>
</section>
{/* Rendelés leadása */}
<section
  id="rendeles"
  className="mx-auto max-w-7xl border-b border-black/10 px-6 py-12 scroll-mt-20"
>
  <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
    <div>
      <h2 className="text-2xl font-bold tracking-tight">
        {service.ordering?.title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">
        {service.ordering?.description}
      </p>
    </div>

    <Link
      to="/kapcsolat"
      className="inline-flex w-fit bg-black px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
    >
      Rendelés indítása →
    </Link>
  </div>
</section>
{/* Átvétel */}
<section className="mx-auto max-w-7xl border-b border-black/10 px-6 py-12">
  <h2 className="text-2xl font-bold tracking-tight">
    Átvétel
  </h2>

  <div className="mt-8 grid gap-8 md:grid-cols-3">
    {service.pickup?.map((option) => (
      <div
        key={option.title}
        className="border-t border-black/10 pt-6"
      >
        <h3 className="text-lg font-semibold">
          {option.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-black/70">
          {option.description}
        </p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}

export default ServicePage;