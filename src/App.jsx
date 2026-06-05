import React from 'react';

function App() {
  return (
    <div className="page">
      <main className="w-100">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg portfolio-navbar sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">Portafolio</a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Acerca de Mí</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Habilidades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">Educación</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <article className="content w-100">
          
          {/* Hero Section */}
          <section id="hero" className="hero-section">
            <div className="hero-bg-glow"></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
                  <h4 className="text-accent mb-3"><i className="bi bi-terminal"></i> Hola, soy</h4>
                  <h1 className="display-3 fw-bold mb-3">
                    German Candelario <br/> 
                    <span className="text-gradient">Hernández</span>
                  </h1>
                  <h3 className="h4 text-muted-custom mb-4">Ingeniero Desarrollador / Fullstack</h3>
                  <p className="lead mb-5 text-muted-custom">
                    Desarrollador Fullstack autodidacta, apasionado por aprender tecnologías de la Información y aplicarlas para resolver problemas enfocados al negocio.
                  </p>
                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                    <a href="#contact" className="btn btn-outline-custom"><i className="bi bi-envelope"></i> Contactarme</a>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <img src="/profile.jpg" alt="German Candelario" className="hero-img mb-4" />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-5">
            <div className="container py-5">
              <div className="glass-card">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <i className="bi bi-person-badge text-gradient" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <div className="col-md-8">
                    <h2 className="mb-4">Acerca de Mí</h2>
                    <p className="fs-5 text-muted-custom">
                      Soy Desarrollador Fullstack, Autodidacta me gusta aprender diferentes tecnologías de la Información, y aplicarlas para resolver problemas Informáticos enfocados al negocio, a través del desarrollo de software a la medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-5 bg-darker">
            <div className="container py-5">
              <h2 className="text-center mb-5"><span className="text-gradient">Mis Proyectos</span></h2>
              <div className="row g-4">
                {/* Proyecto 1 — Tractocamión */}
                <div className="col-lg-6">
                  <div className="glass-card h-100">
                    <div className="mb-4">
                      <img
                        src="/tractocamion.png"
                        alt="Todo Para Tu Tractocamión"
                        className="img-fluid rounded-3 shadow-sm"
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="mb-3 text-gradient">Todo Para Tu Tractocamión</h3>
                    <p className="text-muted-custom mb-4">
                      Catálogo web a la medida para venta y cotización de autopartes y refacciones para tractocamiones (Kenworth, International, Freightliner). Con búsqueda en tiempo real, filtrado por categorías y panel de administración.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      <span className="skill-badge"><i className="bi bi-code-slash"></i> C# / ASP.NET</span>
                      <span className="skill-badge"><i className="bi bi-database"></i> SQL Server</span>
                      <span className="skill-badge"><i className="bi bi-box"></i> Bootstrap</span>
                      <span className="skill-badge"><i className="bi bi-phone"></i> Responsivo</span>
                    </div>
                    <span className="text-muted-custom"><i className="bi bi-check-circle-fill text-success"></i> Proyecto Desarrollado</span>
                  </div>
                </div>

                {/* Proyecto 2 — Blazing Pizza */}
                <div className="col-lg-6">
                  <div className="glass-card h-100">
                    <div className="mb-4">
                      <img
                        src="/blazing-pizza.png"
                        alt="Blazing Pizza"
                        className="img-fluid rounded-3 shadow-sm"
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="mb-3 text-gradient">Blazing Pizza</h3>
                    <p className="text-muted-custom mb-4">
                      Aplicación web de pedidos de pizza en línea con catálogo interactivo de productos, selección de tamaños e ingredientes, carrito de compras en tiempo real y resumen de orden con total calculado dinámicamente.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      <span className="skill-badge"><i className="bi bi-filetype-js"></i> JavaScript</span>
                      <span className="skill-badge"><i className="bi bi-cart"></i> E-Commerce</span>
                      <span className="skill-badge"><i className="bi bi-box"></i> Bootstrap</span>
                      <span className="skill-badge"><i className="bi bi-phone"></i> Responsivo</span>
                    </div>
                    <span className="text-muted-custom"><i className="bi bi-check-circle-fill text-success"></i> Proyecto Desarrollado</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-5">
            <div className="container py-5">
              <h2 className="text-center mb-5"><span className="text-gradient">Habilidades Técnicas</span></h2>
              
              <div className="row g-4">
                {/* Lenguajes */}
                <div className="col-md-4">
                  <div className="glass-card h-100">
                    <h4 className="mb-4"><i className="bi bi-code-slash text-primary"></i> Lenguajes</h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="skill-badge"><i className="bi bi-filetype-cs"></i> C#</span>
                      <span className="skill-badge"><i className="fa-brands fa-python"></i> Python</span>
                      <span className="skill-badge"><i className="bi bi-filetype-js"></i> Javascript</span>
                    </div>
                  </div>
                </div>
                
                {/* Frameworks */}
                <div className="col-md-4">
                  <div className="glass-card h-100">
                    <h4 className="mb-4"><i className="bi bi-box text-secondary"></i> Frameworks</h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="skill-badge"><i className="bi bi-braces"></i> Entity Framework</span>
                      <span className="skill-badge"><i className="bi bi-globe"></i> Blazor</span>
                      <span className="skill-badge"><i className="bi bi-bootstrap"></i> Bootstrap</span>
                      <span className="skill-badge"><i className="bi bi-globe2"></i> ASP.NET MVC / WEB.API</span>
                    </div>
                  </div>
                </div>
                
                {/* Bases de Datos */}
                <div className="col-md-4">
                  <div className="glass-card h-100">
                    <h4 className="mb-4"><i className="bi bi-database text-info"></i> Bases de Datos</h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="skill-badge"><i className="bi bi-server"></i> SQL Server</span>
                      <span className="skill-badge"><i className="bi bi-database-check"></i> PostgreSQL</span>
                      <span className="skill-badge"><i className="bi bi-database-fill"></i> SQLite</span>
                    </div>
                  </div>
                </div>

                {/* Patrones de Diseño */}
                <div className="col-md-6">
                  <div className="glass-card h-100">
                    <h4 className="mb-4"><i className="bi bi-diagram-3 text-warning"></i> Patrones de Diseño</h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="skill-badge">Inyección de Dependencias</span>
                      <span className="skill-badge">CQRS</span>
                      <span className="skill-badge">UnitOfWork</span>
                      <span className="skill-badge">Repository</span>
                    </div>
                  </div>
                </div>

                {/* Herramientas */}
                <div className="col-md-6">
                  <div className="glass-card h-100">
                    <h4 className="mb-4"><i className="bi bi-tools text-danger"></i> Herramientas</h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="skill-badge">Visual Studio</span>
                      <span className="skill-badge">VS Code</span>
                      <span className="skill-badge">Swagger</span>
                      <span className="skill-badge">Postman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Contact Section */}
          <section id="education" className="py-5">
            <div className="container py-5">
              <div className="row g-4">
                
                {/* Education */}
                <div className="col-md-6">
                  <div className="glass-card h-100" id="education-card">
                    <h2 className="mb-4"><span className="text-gradient">Educación</span></h2>
                    
                    <div className="mb-4">
                      <h5><i className="bi bi-mortarboard-fill text-primary"></i> Universidad UTTN</h5>
                      <p className="mb-0 text-muted-custom">Titulado: Tecnologías de la Información y Comunicación.</p>
                    </div>
                    
                    <div>
                      <h5><i className="bi bi-award-fill text-secondary"></i> Certificaciones</h5>
                      <p className="mb-0 text-muted-custom">Microsoft Technology Associate</p>
                      <small className="text-muted-custom">Certificado de Entrenamiento Enfocado a MTA 2018.</small>
                    </div>
                  </div>
                </div>
                
                {/* Contact */}
                <div id="contact" className="col-md-6">
                  <div className="glass-card h-100">
                    <h2 className="mb-4"><span className="text-gradient">Contacto</span></h2>
                    <p className="text-muted-custom mb-4">¿Interesado en trabajar juntos o tienes alguna pregunta? ¡Contáctame!</p>
                    
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-telephone-fill contact-icon"></i>
                        <a href="tel:8992586742" className="text-decoration-none text-main">8992 58 67 42</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-envelope-fill contact-icon"></i>
                        <a href="mailto:germancandelario@hotmail.com" className="text-decoration-none text-main">germancandelario@hotmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-linkedin contact-icon"></i>
                        <a href="https://www.linkedin.com/in/german-candelario-94589a173/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-main">LinkedIn Profile</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

        </article>

        {/* Footer */}
        <footer className="py-4 text-center text-muted-custom border-top" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="container">
            <small>&copy; {new Date().getFullYear()} German Candelario Hernández. Todos los derechos reservados.</small>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
