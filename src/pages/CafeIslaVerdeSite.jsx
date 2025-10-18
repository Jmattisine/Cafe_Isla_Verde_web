import { useState } from "react";
// Si usas lucide-react y lo tienes instalado, puedes importar iconos así:
// import { MapPin, Phone, Mail, Instagram, Coffee, Menu as MenuIcon, Leaf } from "lucide-react";

// 📸 IMPORTA TUS IMÁGENES DESDE src/assets
import logoImg from "../assets/logo.jpg";
import bannerImg from "../assets/banner.jpg";
import about1Img from "../assets/about1.jpg";
import about2Img from "../assets/about2.jpg";

// === Eventos (imágenes) ===
// Coloca estos archivos en: src/assets/
import event1 from "../assets/evento1.jpg";
import event2 from "../assets/evento2.jpg";
import event3 from "../assets/evento3.jpg";
import event4 from "../assets/evento4.jpg";

const ASSETS = {
  logo: logoImg,
  hero: bannerImg,
  about1: about1Img,
  about2: about2Img,
};

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes", label: "Quiénes somos" },
  { id: "eventos", label: "Eventos" }, // ← NUEVO: ancla para la sección de eventos
  { id: "carta", label: "Carta" },
  { id: "contacto", label: "Contacto" },
];

const MENU = [
  {
    cat: "Café de especialidad",
    items: [
      { name: "Espresso simple", desc: "Shot intenso, origen rotativo", price: 1800 },
      { name: "Americano", desc: "Espresso + agua caliente", price: 1900 },
      { name: "Cappuccino", desc: "Espresso, leche vaporizada y microespuma", price: 2400 },
      { name: "Latte", desc: "Suave y cremoso", price: 2500 },
      { name: "Flat White", desc: "Doble ristretto + leche sedosa", price: 2800 },
      { name: "Cold Brew", desc: "12h de extracción en frío", price: 2900 },
    ],
  },
  {
    cat: "Pastelería & Salados",
    items: [
      { name: "Croissant de mantequilla", desc: "Hojaldre laminado a mano", price: 2200 },
      { name: "Budín de banana", desc: "Con nueces y chips de cacao", price: 2300 },
      { name: "Tarta del día", desc: "Consulta sabores en barra", price: 2600 },
      { name: "Sándwich veggie", desc: "Hummus, vegetales asados, pan de masa madre", price: 4200 },
    ],
  },
  {
    cat: "Bebidas & Té",
    items: [
      { name: "Matcha Latte", desc: "Grado ceremonial", price: 3200 },
      { name: "Té chai", desc: "Especiado, caliente o frío", price: 2800 },
      { name: "Limonada con hierbas", desc: "Con albahaca o menta", price: 2600 },
    ],
  },
];

export default function CafeIslaVerdeSite() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-stone-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="Café Isla Verde"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500"
            />
            <div className="leading-none">
              <h1 className="text-lg font-extrabold tracking-wide text-emerald-700">Café Isla Verde</h1>
              <p className="text-xs text-stone-500">Café Isla Verde - Comida chilena e italiana</p>
            </div>
          </div>

          {/* NAV (escritorio) */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-semibold text-stone-700 hover:text-emerald-700"
              >
                {n.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/cafe.isla.verde/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
            >
              {/* Ícono simple inline para evitar dependencias */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
              Instagram
            </a>
          </nav>

          {/* NAV (móvil) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-emerald-200 p-2 text-emerald-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-emerald-100 bg-white">
            <div className="container py-3 grid gap-2">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left px-2 py-2 rounded-lg hover:bg-emerald-50 font-medium"
                >
                  {n.label}
                </button>
              ))}
              <a
                href="https://www.instagram.com/cafe.isla.verde/"
                target="_blank"
                rel="noreferrer"
                className="px-2 py-2 rounded-lg hover:bg-emerald-50 font-medium text-emerald-700 inline-flex items-center gap-2"
              >
                Instagram
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0">
          <img
            src={ASSETS.hero}
            alt="Hero"
            className="w-full h-[56vh] md:h-[68vh] object-cover brightness-[.75]"
          />
        </div>
        <div className="relative container h-[56vh] md:h-[68vh] flex items-end pb-10">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-100 w-full md:w-[70%]">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold">Café sostenible</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 text-stone-900">
              Sabor que nace en el origen
            </h2>
            <p className="mt-3 text-stone-700 md:text-lg">
              Restaurante Chileno–Italiano. Un rincón verde con sabores de Chile y tradición Italiana
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("carta")}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 font-bold shadow-lg hover:bg-emerald-700"
              >
                Ver carta
              </button>
              <button
                onClick={() => scrollTo("quienes")}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-700 px-5 py-3 font-bold hover:bg-emerald-50"
              >
                Nuestra historia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">Quiénes somos</h3>
            <p className="text-stone-700 leading-relaxed">
              Nacimos con la idea de acercar el café de especialidad a nuestra comunidad, creando un espacio cálido
              donde compartir, aprender y disfrutar. Trabajamos con productores responsables, priorizando el comercio
              justo y la trazabilidad.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Nuestra pastelería es de elaboración propia y diaria. Cuidamos técnicas, ingredientes y tiempos para que
              cada bocado te transporte a un momento feliz.
            </p>

            {/* === Reseñas de clientes (estáticas) === */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "karina varela", rating: 5, text: "Excelente comida, muy rica, en un lugar fabuloso! Y la atención excelente,Nos encanto!" },
                { name: "Montse kodina", rating: 4, text: "Un sitio muy interesante para ir almorzar, comer o bien tomar un café con amigos, es un lugar tranquilo, agradable y peculiar pocos lugares de la zona se parecen. La comida está buena, sana y buen elaborada. Algo importante no muy cara" },
                { name: "Nicol Nunez", rating: 5, text: "Un lugar muy acogedor que te recuerda la magia del bosque, el ambiente es magnifico y mistico. La comida es sumamente rica y evoca recuerdos de la infancia. Los dueños son super amables y cordiales 10/10" },
                { name: "Luz Díaz", rating: 3, text: "El lugar es muy lindo, estilo rústico. Tiene espacio para estar al aire libre y dentro del local. En su carta incluyen preparaciones veganas y no veganas. Atención agradable." },
              ].map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={ASSETS.about1} alt="Barra" className="rounded-2xl h-56 w-full object-cover shadow-md" />
            <img src={ASSETS.about2} alt="Latte" className="rounded-2xl h-56 w-full object-cover shadow-md mt-6" />
          </div>
        </div>
      </section>

      {/* === EVENTOS REALIZADOS === */}
      <section id="eventos" className="bg-white py-16 border-y border-emerald-100">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">Eventos realizados</h3>
              <p className="text-stone-600 mt-1">Una muestra de experiencias que hemos vivido en Café Isla Verde.</p>
            </div>

            {/* CTA opcional a Instagram (oculto en móvil) */}
            <a
              href="https://www.instagram.com/cafe.isla.verde/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-700 px-4 py-2 font-bold hover:bg-emerald-50"
            >
              Ver más en Instagram
            </a>
          </div>

          {/* Grilla de 4 tarjetas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EventCard img={event1} title="Noches de Jazz" caption="Música en vivo" />
            <EventCard img={event2} title="Cata de Cafés" caption="Origen & tueste" />
            <EventCard img={event3} title="Taller Latte Art" caption="Nivel inicial" />
            <EventCard img={event4} title="Brunch Dominical" caption="Edición especial" />
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="bg-white py-16 border-y border-emerald-100">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">☕</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">Carta</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {MENU.map((block) => (
              <div key={block.cat} className="rounded-2xl border border-emerald-100 p-5 shadow-sm bg-emerald-50/40">
                <h4 className="font-extrabold text-emerald-800 mb-4">{block.cat}</h4>
                <ul className="space-y-3">
                  {block.items.map((it) => (
                    <li key={it.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-stone-800">{it.name}</p>
                        <p className="text-sm text-stone-600">{it.desc}</p>
                      </div>
                      <span className="font-extrabold text-stone-900">
                        ${it.price.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">Contacto</h3>
            <p className="mt-2 text-stone-700">
              Reserva, pedidos para llevar o eventos privados. ¡Escríbenos!
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3">
                📍 Dirección: <span className="font-semibold">Dr. Johow 889-a, Ñuñoa, Región Metropolitana</span>
              </p>
              <p className="flex items-center gap-3">
                📞 Teléfono:{" "}
                <a href="tel:+56977076669" className="font-semibold hover:underline">+56 9 7707 6669</a>
              </p>
              <p className="flex items-center gap-3">
                ✉️ Email:{" "}
                <a href="mailto:hola@cafeislaverde.cl" className="font-semibold hover:underline">hola@cafeislaverde.cl</a>
              </p>
              <p className="flex items-center gap-3">
                📷 Instagram:{" "}
                <a
                  className="font-semibold hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/cafe.isla.verde/"
                >
                  @cafe.isla.verde
                </a>
              </p>
            </div>

            <form
              className="mt-8 grid gap-3 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias! Te contactaremos pronto.");
              }}
            >
              <input
                className="rounded-xl border-2 border-emerald-200 px-4 py-3 focus:outline-none focus:border-emerald-500"
                placeholder="Nombre"
              />
              <input
                className="rounded-xl border-2 border-emerald-200 px-4 py-3 focus:outline-none focus:border-emerald-500"
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="rounded-2xl border-2 border-emerald-200 px-4 py-3 focus:outline-none focus:border-emerald-500"
                placeholder="Mensaje"
              />
              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 font-bold shadow-lg hover:bg-emerald-700 w-max">
                Enviar
              </button>
            </form>
          </div>

          <div className="rounded-2xl overflow-hidden border border-emerald-100 shadow-sm bg-white h-[360px]">
            <iframe
              title="Mapa"
              className="w-full h-full"
              src="https://www.google.com/maps?q=Dr.+Johow+889-a,+Ñuñoa,+Chile&output=embed"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-stone-600">
          <p>© {new Date().getFullYear()} Café Isla Verde — Todos los derechos reservados</p>
          <p>Hecho con ☕ y cariño</p>
        </div>
      </footer>
    </div>
  );
}

/* ======= COMPONENTES AUXILIARES ======= */

function ReviewCard({ name, rating, text }) {
  return (
    <div className="rounded-2xl bg-white border border-emerald-100 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <strong className="text-stone-900">{name}</strong>
        <Stars value={rating} />
      </div>
      <p className="text-stone-700 text-sm">{text}</p>
    </div>
  );
}

function Stars({ value = 5, max = 5 }) {
  return (
    <div className="text-amber-500">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i}>{i < value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

// === Tarjeta de Evento ===
// - img:   ruta/variable de imagen
// - title: título del evento (opcional)
// - caption: bajada/descripcion breve (opcional)
function EventCard({ img, title, caption }) {
  return (
    <figure className="group rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Contenedor con relación 4:3 para mantener proporciones */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title || "Evento Café Isla Verde"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Texto de la tarjeta */}
      <figcaption className="p-4">
        {title && <h4 className="font-extrabold text-stone-900">{title}</h4>}
        {caption && <p className="text-sm text-stone-600 mt-1">{caption}</p>}
      </figcaption>
    </figure>
  );
}
