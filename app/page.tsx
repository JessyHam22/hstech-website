import {
  Clock,
  Wrench,
  CheckCircle,
  MapPin,
  Cog,
  DraftingCompass,
  Factory,
  Layers
} from "lucide-react"

const services = [
  {
    title: 'Maquinado CNC de precisión',
    description:
      'Fabricación de piezas con tolerancias exigentes para maquinaria, herramentales, refacciones y aplicaciones industriales.',
  },
  {
    title: 'Piezas especiales sobre plano o muestra',
    description:
      'Producción a medida a partir de planos, muestras físicas o requerimientos técnicos del cliente.',
  },
  {
    title: 'Ingeniería inversa',
    description:
      'Generación de dibujo y fabricación de reemplazos cuando la pieza original ya existe pero no se cuenta con plano.',
  },
  {
    title: 'Prototipos, producción y urgencias',
    description:
      'Soporte para validación inicial, lotes recurrentes y requerimientos urgentes para continuidad operativa.',
  },
]

const industries = [
  'Maquinaria industrial',
  'Automatización',
  'Manufactura',
  'Mantenimiento industrial',
  'Integradores de equipo',
  'Refacciones especiales',
]

const products = [
  {
    title: 'Bujes, ejes y flechas',
    text: 'Componentes para sistemas de soporte, transmisión y movimiento mecánico.',
    image: '/bujes.png',
  },
  {
    title: 'Engranes y componentes especiales',
    text: 'Fabricación para reposición, integración en equipos o mejora de desempeño.',
    image: '/engranes.png',
  },
  {
    title: 'Prototipos y lotes productivos',
    text: 'Piezas funcionales para validación técnica, arranque de proyecto y producción programada.',
    image: '/prototipos.png',
  },
]

export default function HomePage() {
  return (
    <main className="site">

      <header className="topbar">
        <div className="brand">
          <div className="brand-title">HSTECH</div>
          <div className="brand-subtitle">Manufactura de precisión</div>
        </div>

        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto" className="button small">Cotizar</a>
        </nav>
      </header>


      <section className="hero">
        <div className="overlay" />

        <div className="hero-content container">

          <div className="hero-copy">

            <p className="eyebrow">
              Soluciones de maquinado CNC
            </p>

            <h1>
              Fabricamos la solución que tu producción necesita.
            </h1>

            <p className="lead">
              En HSTECH fabricamos componentes y piezas mecánicas para maquinaria y equipos industriales,
              con enfoque en precisión dimensional, repetibilidad y tiempos de respuesta confiables.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="button">Solicitar cotización</a>
              <a href="#servicios" className="button ghost">Ver servicios</a>
            </div>

          </div>

        </div>
      </section>


      <section className="band light">

        <div className="container grid-four icons">

          <article className="icon-card">
            <div className="icon-circle">
              <Clock size={38} />
            </div>
            <h3>Respuesta rápida para urgencias industriales</h3>
          </article>

          <article className="icon-card">
            <div className="icon-circle">
              <Wrench size={38} />
            </div>
            <h3>Trabajamos metales y polímeros de ingeniería</h3>
          </article>

          <article className="icon-card">
            <div className="icon-circle">
              <CheckCircle size={38} />
            </div>
            <h3>Fabricación con tolerancias y precisión dimensional</h3>
          </article>

          <article className="icon-card">
            <div className="icon-circle">
              <MapPin size={38} />
            </div>
            <h3>Atención en Querétaro y Ciudad de México</h3>
          </article>

        </div>

      </section>


      <section id="servicios" className="section">

        <div className="container">

          <p className="eyebrow">Servicios</p>

          <h2>
            Capacidades orientadas a requerimientos industriales reales.
          </h2>

          <div className="grid-four cards">

           {services.map((service, index) => {

  const icons = [
    <Cog size={34} />,
    <DraftingCompass size={34} />,
    <Layers size={34} />,
    <Factory size={34} />
  ]

  return (

    <article key={service.title} className="card dark">

      <div className="card-accent icon">
        {icons[index]}
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

    </article>

  )

})}

          </div>

        </div>

      </section>


      <section id="productos" className="section light-bg">

        <div className="container">

          <p className="eyebrow red">
            Productos
          </p>

          <h2 className="dark-text">
            Líneas de piezas y componentes que HSTECH puede fabricar.
          </h2>

          <div className="grid-three product-grid">

            {products.map((product) => (

              <article key={product.title} className="product-card">

                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                <div className="product-copy">

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    {product.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section id="nosotros" className="section">

        <div className="container">

          <p className="eyebrow">
            Nosotros
          </p>

          <h2>
            Una empresa enfocada en soluciones reales para producción industrial.
          </h2>

          <p className="section-intro">

            En HSTECH convertimos requerimientos técnicos en piezas funcionales listas para integrarse
            a maquinaria, líneas de producción y equipos industriales en México.

          </p>

        </div>

      </section>


     <section id="contacto" className="section contact-section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de su proyecto.</h2>
            <p className="section-intro">
              Compártenos tus requerimientos, dibujos o especificaciones y te contactaremos para evaluar tu proyecto.
            </p>
            <div className="contact-list">
              <div>
                <strong>Correo</strong>
                <p>hstech@gmail.com</p>
              </div>
              <div>
                <strong>Teléfono</strong>
                <p>+52 55 1190 5194</p>
              </div>
              <div>
                <strong>Ubicación</strong>
                <p>Querétaro y Ciudad de México, México</p>
              </div>
            </div>
          </div>

          <form className="form-card">
            <label>
              Nombre
              <input placeholder="Tu nombre" />
            </label>
            <label>
              Empresa
              <input placeholder="Nombre de tu empresa" />
            </label>
            <label>
              Correo
              <input placeholder="correo@empresa.com" />
            </label>
            <label>
              Teléfono
              <input placeholder="Número de contacto" />
            </label>
            <label className="full">
              Proyecto o requerimiento
              <textarea rows={6} placeholder="Describe la pieza, aplicación, material, volumen o necesidad" />
            </label>
            <button type="button" className="button">Enviar solicitud</button>
          </form>
        </div>
      </section>




     <footer className="footer">

        <div className="container footer-inner">

          <p>
            <strong>HSTECH</strong> · Maquinado CNC para aplicaciones industriales
          </p>

          <p>
            © 2026 HSTECH. Todos los derechos reservados.
          </p>

        </div>

       <div className="flex gap-6 text-white/55">
          <a href="/privacidad" className="transition hover:text-white">
          Aviso de privacidad
          </a>
          <a href="/terminos" className="transition hover:text-white">
          Términos del sitio
          </a>
      </div>

      </footer>
<a
  href="https://wa.me/525511905194?text=Hola%20HSTECH,%20me%20gustaría%20cotizar%20una%20pieza%20maquinada"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="white"
  >
    <path d="M16 2C8.8 2 3 7.6 3 14.6c0 2.6.8 5.1 2.3 7.1L3 30l8.5-2.2c1.9 1 4 1.5 6.2 1.5 7.2 0 13-5.6 13-12.6S23.2 2 16 2zm0 23.2c-2 0-4-.6-5.7-1.7l-.4-.2-5 1.3 1.3-4.8-.3-.4c-1.2-1.7-1.9-3.7-1.9-5.8C4 9 9 4.3 15.3 4.3S26.6 9 26.6 14.6 21.6 25.2 16 25.2zm5.4-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.1.8.4 1.4.6 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.5z" />
  </svg>

  <span>WhatsApp</span>
</a>

</main>
  )
}
