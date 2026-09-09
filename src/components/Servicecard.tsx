import { Link } from "react-router-dom";

type ServiceCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

function ServiceCard({
  slug,
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="overflow-hidden border border-black/10 bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-black/5">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold tracking-tight">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-black/70">
          {description}
        </p>

        <Link
          to={`/szolgaltatasok/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
        >
          Részletek
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;