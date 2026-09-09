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
  <div className="mx-auto grid max-w-7xl grid-cols-6 px-6">
  <a
      href="#arak"
      className="border-r border-black/10 px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60"
    >
      Árak
    </a>
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
      className="border-r border-black/10 px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60"
    >
      Rendelés leadása
    </a>

    <a href="#atvetel" className="border-r border-black/10 px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60">
      Átvétel
    </a>

    <a href="#tudasbazis" className="px-4 py-6 text-center text-sm font-semibold transition-opacity hover:opacity-60">
      Tudásbázis
    </a>
  </div>
</div>

{/* Méretek és papírfajták */}
<section className="mx-auto grid max-w-7xl border-b border-black/10 md:grid-cols-2">
  {/* Árak */}
<section
  id="arak"
  className="mx-auto max-w-7xl border-b border-black/10 px-4 py-12 scroll-mt-20"
>
  <h2 className="text-2xl font-bold tracking-tight">
    ÁRAK
  </h2>

  <p className="mt-3 text-sm leading-6 text-black/70">
    Az árak nettó árak, forintban értendők.
  </p>

  <div className="mt-6 overflow-x-auto">
    <table className="w-full min-w-[400px] border-collapse border border-black/10 text-sm">
      <thead>
        <tr className="bg-black/[0.03]">
          <th className="border border-black/10 px-5 py-4 text-center font-semibold">
            Darabszám
          </th>

          <th className="border border-black/10 px-5 py-4 text-center font-semibold">
            Standard (350 g)
          </th>

          <th className="border border-black/10 px-5 py-4 text-center font-semibold">
            Prémium (700 g)
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-black/10 px-5 py-4 text-center">
            100 db
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            3 500 Ft
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            4 500 Ft
          </td>
        </tr>

        <tr>
          <td className="border border-black/10 px-5 py-4 text-center">
            250 db
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            5 900 Ft
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            7 500 Ft
          </td>
        </tr>

        <tr>
          <td className="border border-black/10 px-5 py-4 text-center">
            500 db
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            9 500 Ft
          </td>
          <td className="border border-black/10 px-5 py-4 text-center">
            12 500 Ft
          </td>
        </tr>

        <tr>
          <td className="border border-black/10 px-5 py-4 text-center font-semibold">
            1000 db
          </td>
          <td className="border border-black/10 px-5 py-4 text-center font-semibold">
            16 500 Ft
          </td>
          <td className="border border-black/10 px-5 py-4 text-center font-semibold">
            21 000 Ft
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mt-4 text-xs leading-6 text-black/60">
    Az árak 4+4 színes nyomtatásra vonatkoznak. Egyedi igény esetén kérj
    árajánlatot!
  </p>
</section>
  {/* Méretek */}
  <div id="meretek" className="scroll-mt-20 border-b border-black/10 p-8 md:py-12">
    <h2 className="text-2xl font-bold tracking-tight">
      MÉRETEK
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
      PAPÍRFAJTÁK
    </h2>

    <p className="mt-3 text-sm leading-6 text-black/60">
      Válassz a különböző papírtípusok és felületkezelések közül:
    </p>

    <ul className="mt-3 space-y-3">
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
</section>
{/* Átvétel */}
<section id="atvetel" className="mx-auto max-w-7xl border-b border-black/10 px-6 py-12">
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
{/* Tudásbázis */}
<section
  id="tudasbazis"
  className="mx-auto max-w-7xl border-b border-black/10 px-6 py-16 scroll-mt-20"
>
  <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

    {/* Szöveges rész */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-black/50">
        Tudásbázis
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        Hogyan készítsd el a nyomdakész fájlt?
      </h2>

      <p className="mt-5 text-sm leading-7 text-black/70">
        Amikor nyomdába küldesz egy anyagot, nagyon fontos, hogy
        betartsd az alábbi technikai előírásokat a tökéletes
        végeredmény érdekében.
      </p>

      {/* 1 */}
      <div className="mt-10">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
            1
          </span>

          <h3 className="text-lg font-semibold">
            Mi az a kifutó (Bleed)?
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-black/70">
          A kifutó az a terület a kész dokumentum szélén túl,
          ameddig a színes háttereknek vagy képeknek érniük kell.
          Minden oldalon <strong>+3 mm kifutó</strong> szükséges,
          különben a vágásnál fehér csík maradhat a széleken.
        </p>
      </div>

      {/* 2 */}
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
            2
          </span>

          <h3 className="text-lg font-semibold">
            Miért kell a +3 mm a vágójeleknek?
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-black/70">
          A vágójeleknek a kész méreten kívül kell elhelyezkedniük,
          hogy a vágás után leessenek a papírról, és ne látszódjanak
          a kész terméken.
        </p>
      </div>

      {/* 3 */}
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
            3
          </span>

          <h3 className="text-lg font-semibold">
            A három fontos vonal
          </h3>
        </div>

        <ul className="mt-4 space-y-3 text-sm leading-6 text-black/70">
        <li className="flex items-start gap-3">
          <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-red-500" />
    <span>
            <strong>Kifutó (Bleed line):</strong>{" "}
            +3 mm minden oldalon.
            </span>
          </li>

          <li className="flex items-start gap-3">
          <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-500" />
    <span>
            <strong>Vágott méret (Trim line):</strong>{" "}
            Itt fog vágni a gép.
            </span>
          </li>

          <li className="flex items-start gap-3">
          <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-green-500" />
    <span>
            <strong>Biztonsági zóna (Safe zone):</strong>{" "}
            A fontos szövegeket és logókat tartsd ezen belül.
            </span>
          </li>

      
        </ul>
      </div>

      {/* Pro tipp */}
      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-6 rounded-2xl border border-black/10 bg-black/[0.03] px-6 py-5">
  
  <img
    src="/images/Bulb_atlatszo.png"
    alt="Villanykörte"
    className="h-20 w-20 shrink-0 object-contain"
  />

  <div>
    <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
      Pro tipp
    </p>

    <p className="mt-2 text-sm font-medium leading-6">
      Soha ne tegyél keretet vagy fontos szöveget túl közel a
      szélhez, mert a legkisebb vágási pontatlanság is
      aszimmetrikussá teheti az összhatást.
    </p>
  </div>

</div>
    </div>

    {/* Vágókép */}
    <div className="overflow-hidden bg-white">
      <img
        src="/images/Vagojelek.png"
        alt="Útmutató a kifutó, vágott méret és biztonsági zóna használatához"
        className="h-auto w-full"
      />
    </div>

  </div>
</section>
{/* <section
  id="tudasbazis"
  className="mx-auto max-w-7xl border-b border-black/10 px-6 py-16"
>
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-widest text-black/50">
      Tudásbázis - Hogyan készítsd el a nyomdakész fájlt?
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight">
      Mit kell elküldened a rendeléshez?
    </h2>

    <p className="mt-5 text-sm leading-7 text-black/70">
    Amikor nyomdába küldesz egy anyagot, nagyon fontos, hogy betartsd az alábbi technikai előírásokat a tökéletes végeredmény érdekében.
    </p>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Méret</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Add meg a késztermék pontos méretét, például A4, A5 vagy egyedi
        méret esetén a szélességet és magasságot.
      </p>
    </div>

    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Darabszám</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Írd meg, hány darabot szeretnél rendelni.
      </p>
    </div>

    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Színes vagy fekete-fehér</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Jelezd, hogy színes vagy fekete-fehér nyomtatást szeretnél.
      </p>
    </div>

    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Egy- vagy kétoldalas</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Add meg, hogy csak az egyik oldalra vagy mindkét oldalra
        kerüljön nyomat.
      </p>
    </div>

    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Papír</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Ha már tudod, milyen papírt szeretnél, írd meg a típust és a
        vastagságot.
      </p>
    </div>

    <div className="border-t border-black/10 pt-5">
      <h3 className="font-semibold">Fájl</h3>
      <p className="mt-2 text-sm leading-6 text-black/60">
        A nyomtatandó anyagot lehetőleg PDF formátumban küldd el.
      </p>
    </div>
  </div>
</section> */}
    </main>
  );
}

export default ServicePage;