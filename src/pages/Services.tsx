import ServiceCard from "../components/Servicecard";
import { services } from "../data/services";

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
          Karika Nyomda
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Szolgáltatásaink
        </h1>

        <p className="mt-6 text-lg leading-8 text-black/70">
          Nyomtatás minden méretben,
          <br />
          minden ötlethez.
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-black/70">
          Széles körű nyomdai szolgáltatásainkkal segítünk abban,
          hogy az ötleteid professzionális megjelenést kapjanak.
          Kiváló minőség, gyors határidő és személyes odafigyelés.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;