import { Clock, Wrench, CheckCircle, MapPin } from "lucide-react"

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
    image:
      'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Engranes y componentes especiales',
    text: 'Fabricación para reposición, integración en equipos o mejora de desempeño.',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Prototipos y lotes productivos',
    text: 'Piezas funcionales para validación técnica, arranque de proyecto y producción programada.',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
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

            {services.map((service) => (

              <article key={service.title} className="card dark">

                <div className="card-accent" />

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </article>

            ))}

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

        <div className="container">

          <p className="eyebrow">
            Contacto
          </p>

          <h2>
            Hablemos de su proyecto.
          </h2>

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
              <p>Querétaro y Ciudad de México</p>
            </div>

          </div>

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

      </footer>


<a
  href="https://wa.me/525511905194?text=Hola%20HSTECH,%20me%20gustaría%20cotizar%20una%20pieza%20maquinada"
  className="whatsapp-button"
  target="_blank"
>
  WhatsApp
</a>

</main>
  )
}
