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

const highlights = [
  'Respuesta rápida para urgencias industriales',
  'Trabajamos metales y polímeros de ingeniería',
  'Fabricación con tolerancias y precisión dimensional',
  'Atención en Querétaro y Ciudad de México',
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

const materials = [
  'Aceros al carbón y aceros aleados',
  'Aceros inoxidables',
  'Aluminio y aleaciones ligeras',
  'Latón, cobre y bronces',
  'Polímeros de ingeniería',
  'Materiales especiales según requerimiento',
]

const machinery = [
  'Centros de maquinado CNC',
  'Tornos CNC de precisión',
  'Equipo de medición dimensional',
  'Herramental especializado para fabricación industrial',
]

const blogPosts = [
  {
    title: '¿Cuándo conviene fabricar una pieza sobre plano?',
    text: 'Qué revisar antes de cotizar: función, tolerancias, material, volumen y condiciones de trabajo.',
  },
  {
    title: 'Refacciones industriales: rapidez sin perder precisión',
    text: 'Cómo reducir tiempos muertos con un proveedor que entienda criticidad operativa y repetibilidad dimensional.',
  },
  {
    title: 'Del prototipo a la producción: claves para escalar bien',
    text: 'Buenas prácticas para pasar de validación inicial a fabricación recurrente con control y consistencia.',
  },
]

const process = [
  'Recepción de plano, muestra o requerimiento técnico',
  'Revisión técnica y definición del proceso',
  'Maquinado CNC y control dimensional',
  'Entrega y seguimiento comercial',
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
            <p className="eyebrow">Soluciones de maquinado CNC</p>
            <h1>Fabricamos la solución que tu producción necesita.</h1>
            <p className="lead">
              En HSTECH fabricamos componentes y piezas mecánicas para maquinaria y equipos industriales,
              con enfoque en precisión dimensional, repetibilidad y tiempos de respuesta confiables.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="button">Solicitar cotización</a>
              <a href="#servicios" className="button ghost">Ver servicios</a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="eyebrow">Cobertura</p>
            <h3>Querétaro y Ciudad de México</h3>
            <ul>
              <li>Trabajo sobre plano o muestra</li>
              <li>Ingeniería inversa</li>
              <li>Urgencias industriales</li>
              <li>Metales y polímeros</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="band light">
        <div className="container grid-four icons">
          {highlights.map((item) => (
            <article key={item} className="icon-card">
              <div className="icon-circle">●</div>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="container">
          <p className="eyebrow">Servicios</p>
          <h2>Capacidades orientadas a requerimientos industriales reales.</h2>
          <p className="section-intro">
            Diseñada con el lenguaje que utilizan las empresas del sector: maquinado de precisión,
            fabricación sobre plano, prototipos, lotes productivos, control dimensional y soporte para refacciones.
          </p>
          <div className="grid-four cards">
            {services.map((service) => (
              <article key={service.title} className="card dark">
                <div className="card-accent" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Capacidades</p>
            <h2>Precisión, consistencia y atención al detalle.</h2>
            <p className="section-intro">
              Trabajamos en cualquier material necesario para su maquinado, ya sea un acero o un polímero,
              adaptándonos a la geometría, función y tolerancia requerida por cada proyecto.
            </p>
            <div className="stack-list">
              <div className="pill">Fabricación bajo especificación y tolerancias técnicas</div>
              <div className="pill">Soporte para prototipos, lotes cortos y producción recurrente</div>
              <div className="pill">Reposición rápida de componentes en urgencias industriales</div>
              <div className="pill">Atención para mantenimiento, ingeniería, compras y manufactura</div>
            </div>
          </div>
          <div className="process-card">
            <p className="eyebrow">Proceso</p>
            <ol>
              {process.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Industrias</p>
          <h2>Sectores a los que puede apoyar HSTECH.</h2>
          <div className="grid-three cards compact">
            {industries.map((industry) => (
              <article key={industry} className="card dark compact-card">
                <h3>{industry}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="section light-bg">
        <div className="container">
          <p className="eyebrow red">Productos</p>
          <h2 className="dark-text">Líneas de piezas y componentes que HSTECH puede fabricar.</h2>
          <p className="section-intro dark-text soft">
            Cualquier pieza necesaria: refacciones, componentes especiales, prototipos y producción programada.
          </p>
          <div className="grid-three product-grid">
            {products.map((product) => (
              <article key={product.title} className="product-card">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
                <div className="product-copy">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Nosotros</p>
            <h2>Una empresa enfocada en soluciones reales para producción industrial.</h2>
            <p className="section-intro">
              En HSTECH convertimos requerimientos técnicos en piezas funcionales listas para integrarse a
              maquinaria, líneas de producción y equipos industriales en México.
            </p>
            <p className="section-intro">
              Atendemos proyectos de fabricación sobre plano, desarrollo de refacciones especiales,
              ingeniería inversa a partir de muestra física, prototipos y producción recurrente.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565431181192-2c0ce9c4f5a3?auto=format&fit=crop&w=1400&q=80')" }} />
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80')" }} />
            <div className="gallery-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80')" }} />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Maquinaria</p>
            <h2>Capacidad de manufactura para proyectos industriales.</h2>
            <p className="section-intro">
              Nuestra operación está orientada a la fabricación de piezas mecánicas con procesos de maquinado CNC,
              buscando precisión dimensional, repetibilidad y confiabilidad en cada componente.
            </p>
            <div className="stack-list">
              {machinery.map((item) => (
                <div key={item} className="pill">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Materiales</p>
            <h2>Materiales que podemos maquinar.</h2>
            <p className="section-intro">
              Fabricamos piezas en una amplia variedad de metales y polímeros de ingeniería, seleccionando el material adecuado según la aplicación.
            </p>
            <div className="grid-two materials-grid">
              {materials.map((item) => (
                <div key={item} className="pill">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h2>Contenido industrial para fortalecer confianza y posicionamiento.</h2>
          <div className="grid-three cards">
            {blogPosts.map((post) => (
              <article key={post.title} className="card dark">
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <strong>Leer más</strong>
              </article>
            ))}
          </div>
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
          <p><strong>HSTECH</strong> · Maquinado CNC para aplicaciones industriales</p>
          <p>© 2026 HSTECH. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
