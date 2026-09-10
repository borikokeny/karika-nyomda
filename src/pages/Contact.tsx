import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    otherService: "",
    size: "",
    quantity: "",
    printing: "",
    color: "",
    paper: "",
    notes: "",
    deadline: "",
    noDeadline: false,
    file: null as File | null,
    pickup: "",
  });
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-black/50">
            Kapcsolat
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Kérdésed van vagy ajánlatot kérnél?
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-black/70">
            Írd meg, miben segíthetünk, és felvesszük veled a kapcsolatot.
            Ha már tudod, mit szeretnél nyomtatni, az ajánlatkéréshez
            szükséges információkat is megadhatod.
          </p>
        </div>
      </section>
      <form onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}>
        {submitted ? (
          <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-black/50">
                Köszönjük!
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Megkaptuk az ajánlatkérésed.
              </h2>

              <p className="mt-6 text-base leading-8 text-black/70">
                Köszönjük, hogy megkerestél minket. Átnézzük a megadott adatokat,
                és felvesszük veled a kapcsolatot.
              </p>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 border border-black/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-black"
                >
                  Új ajánlatkérés
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Kapcsolattartó adatai */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  01
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Kapcsolattartó adatai
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold">Név *</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          name: event.target.value,
                        })
                      }
                      placeholder="Név"
                      required
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold">E-mail *</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                        })
                      }
                      placeholder="email@pelda.hu"
                      required
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold">Telefonszám</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          phone: event.target.value,
                        })
                      }
                      placeholder="+36 ..."
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold">Cégnév</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          company: event.target.value,
                        })
                      }
                      placeholder="Cégnév"
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Mit szeretnél nyomtatni? */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  02
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Mit szeretnél nyomtatni?
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  Válaszd ki, milyen munkával kapcsolatban szeretnél ajánlatot kérni.
                </p>

                <label className="mt-8 block">
                  <span className="text-sm font-semibold">Szolgáltatás *</span>

                  <select
                    value={formData.service}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        service: event.target.value,
                      })
                    }
                    required
                    className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                  >
                    <option value="" disabled>
                      Válassz szolgáltatást
                    </option>
                    <option value="nevjegykartyak">Névjegykártyák</option>
                    <option value="fuzetek-konyvek">Füzetek, könyvek</option>
                    <option value="brosurak-szorolapok">Brosúrák, szórólapok</option>
                    <option value="cimkek-etikettek">Cimkék, etikettek</option>
                    <option value="meghivok">Meghívók</option>
                    <option value="plakatok">Plakátok</option>
                    <option value="oklevelek-okiratok">Oklevelek, okiratok</option>
                    <option value="tervrajzok-muszaki-nyomtatas">
                      Tervrajzok, műszaki nyomtatás
                    </option>
                    <option value="naptarak">Naptárak</option>
                    <option value="gyaszjelentesek">Gyászjelentések</option>
                    <option value="egyedi-munkak">Egyedi munkák</option>
                    <option value="fenymasolas">Fénymásolás</option>
                    <option value="egyeb">Más / egyéb</option>
                  </select>
                  {formData.service === "egyeb" && (
                    <input
                      type="text"
                      value={formData.otherService}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          otherService: event.target.value,
                        })
                      }
                      placeholder="Írd le röviden..."
                      className="mt-3 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  )}
                </label>
              </div>
            </section>
            {/* Nyomtatás adatai */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  03
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Nyomtatás adatai
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  Minél több részletet tudsz megadni, annál pontosabban tudjuk elkészíteni az ajánlatot.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {/* Méret */}
                  <label className="block">
                    <span className="text-sm font-semibold">Méret</span>
                    <input
                      type="text"
                      value={formData.size}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          size: event.target.value,
                        })
                      }
                      placeholder="Pl. A4, 90 × 50 mm"
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  {/* Darabszám */}
                  <label className="block">
                    <span className="text-sm font-semibold">Darabszám *</span>
                    <input
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          quantity: event.target.value,
                        })
                      }
                      placeholder="Pl. 500"
                      required
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  {/* Nyomtatás */}
                  <label className="block">
                    <span className="text-sm font-semibold">Nyomtatás</span>
                    <select
                      value={formData.printing}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          printing: event.target.value,
                        })
                      }
                      className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    >
                      <option value="" disabled>
                        Válassz
                      </option>
                      <option value="egyoldalas">Csak az egyik oldal</option>
                      <option value="ketoldalas">Mindkét oldal</option>
                      <option value="nem-tudom">Nem tudom</option>
                    </select>
                  </label>

                  {/* Szín */}
                  <label className="block">
                    <span className="text-sm font-semibold">Szín</span>
                    <select
                      value={formData.color}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          color: event.target.value,
                        })
                      }
                      className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    >
                      <option value="" disabled>
                        Válassz
                      </option>
                      <option value="szines">Színes</option>
                      <option value="fekete-feher">Fekete-fehér</option>
                      <option value="nem-tudom">Nem tudom</option>
                    </select>
                  </label>

                  {/* Papír */}
                  <label className="block md:col-span-2">
                    <span className="text-sm font-semibold">Papír</span>
                    <input
                      type="text"
                      value={formData.paper}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          paper: event.target.value,
                        })
                      }
                      placeholder="Pl. 350 g matt műnyomó"
                      className="mt-2 w-full border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>

                  {/* Megjegyzés */}
                  <label className="block md:col-span-2">
                    <span className="text-sm font-semibold">Egyéb elképzelés</span>
                    <textarea
                      rows={5}
                      value={formData.notes}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          notes: event.target.value,
                        })
                      }
                      placeholder="Írd le röviden, ha van különleges elképzelésed..."
                      className="mt-2 w-full resize-y border border-black/15 px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                  </label>
                </div>
              </div>
            </section>
            {/* Határidő és fájl */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  04
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Határidő és fájl
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  Ha már rendelkezel a nyomtatandó anyaggal, itt megadhatod a határidőt
                  és feltöltheted a fájlt.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {/* Határidő */}
                  <label className="block">
                    <span className="text-sm font-semibold">
                      Mikorra lenne szükséged rá?
                    </span>

                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          deadline: event.target.value,
                        })
                      }
                      required={!formData.noDeadline}
                      className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                    />
                    <label className="mt-3 flex items-center gap-2 text-sm text-black/70">
                      <input
                        type="checkbox"
                        checked={formData.noDeadline}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            noDeadline: event.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      Nincs konkrét határidő
                    </label>
                  </label>

                  {/* Fájl */}
                  <label className="block">
                    <span className="text-sm font-semibold">
                      Nyomtatandó fájl
                    </span>
                    <p className="mt-1 text-xs leading-5 text-black/50">
                      Ha már elkészült a nyomdakész anyag, itt feltöltheted.
                    </p>
                    <input
                      type="file"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          file: event.target.files?.[0] ?? null,
                        })
                      }
                      className="mt-2 block w-full border border-black/15 bg-white px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-black file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Átvétel */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  05
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Átvétel
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  Hogyan szeretnéd átvenni az elkészült munkát?
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <label className="cursor-pointer border border-black/15 p-5 transition-colors hover:border-black">
                    <input
                      type="radio"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          pickup: event.target.value,
                        })
                      }
                      name="pickup"
                      value="szemelyes"
                      checked={formData.pickup === "szemelyes"}
                      className="mr-3"
                    />
                    <span className="text-sm font-semibold">
                      Személyes átvétel
                    </span>
                  </label>

                  <label className="cursor-pointer border border-black/15 p-5 transition-colors hover:border-black">
                    <input
                      type="radio"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          pickup: event.target.value,
                        })
                      }
                      name="pickup"
                      value="szallitas"
                      checked={formData.pickup === "szallitas"}
                      className="mr-3"
                    />
                    <span className="text-sm font-semibold">
                      Szállítás
                    </span>
                  </label>

                  <label className="cursor-pointer border border-black/15 p-5 transition-colors hover:border-black">
                    <input
                      type="radio"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          pickup: event.target.value,
                        })
                      }
                      name="pickup"
                      value="egyeztetes"
                      checked={formData.pickup === "egyeztetes"}
                      className="mr-3"
                    />
                    <span className="text-sm font-semibold">
                      Egyeztessünk
                    </span>
                  </label>
                </div>
              </div>
            </section>
            {/* Összegzés és elküldés */}
            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-16">
              <div className="mx-auto max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                  06
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Minden megvan?
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  Ellenőrizd a megadott adatokat, majd küldd el az ajánlatkérést.
                  Ha valamiben nem vagy biztos, semmi gond — egyeztetünk veled.
                </p>

                <div className="mt-8 border border-black/10 bg-black/[0.03] p-6">
                  <p className="text-sm font-semibold">
                    Az ajánlatkérés elküldése után felvesszük veled a kapcsolatot.
                  </p>

                  <p className="mt-2 text-sm leading-7 text-black/70">
                    A végleges árat a megadott információk és a nyomtatandó anyag
                    alapján tudjuk meghatározni.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-black/50">
                    A *-gal jelölt mezők kitöltése kötelező.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 bg-black px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80 sm:w-auto"
                  >
                    Árajánlatot kérek
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </form>
    </main>
  );
}

export default Contact;