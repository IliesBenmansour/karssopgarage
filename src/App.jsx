import './App.css'
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="App">
      {/* Header Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">🔧 Kars Shop Garage</h1>
          <ul className="nav-menu">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pieces">Pièces</a></li>
            <li><a href="#a-propos">À Propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Section Hero */}
      <section id="accueil" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue chez<br/>
            <span className="brand-name">Kars Shop Garage</span>
          </h1>
          <p className="hero-subtitle">
            Spécialiste en solutions électroniques automobiles et systèmes antipollution
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Nos Services</a>
            <a href="#contact" className="btn btn-secondary">Nous Contacter</a>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nos Services Spécialisés</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Systèmes Antipollution</h3>
              <p>Solutions pour filtres à particules (FAP) obstrués, systèmes AdBlue, EGR, et sondes lambda sur tous types de véhicules.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Cartographie Moteur</h3>
              <p>Amélioration des performances et réduction de la consommation grâce à des cartographies personnalisées.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚛</div>
              <h3>Véhicules Polyvalents</h3>
              <p>Services pour automobiles, motos, bateaux, véhicules agricoles, PL et bus.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Solutions Électroniques</h3>
              <p>Expertise complète en électronique automobile adaptée à tous les systèmes modernes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pièces et Maintenance */}
      <section id="pieces" className="pieces">
        <div className="container">
          <h2 className="section-title">Fourniture de Pièces & Maintenance</h2>
          <div className="pieces-content">
            <div className="pieces-text">
              <h3>Large Gamme de Pièces</h3>
              <p>
                Nous proposons une large gamme de pièces de rechange pour automobiles, 
                motos et bateaux, disponibles en versions d'origine ou de performance.
              </p>
              <ul className="pieces-list">
                <li>✅ Pièces d'origine constructeur</li>
                <li>✅ Pièces de performance</li>
                <li>✅ Automobile, moto, bateau</li>
                <li>✅ Livraison rapide</li>
              </ul>
            </div>
            <div className="maintenance-text">
              <h3>Services de Maintenance</h3>
              <p>
                Services de maintenance automobile complets avec un accompagnement 
                personnalisé pour la préparation de vos projets de véhicules à moteur.
              </p>
              <ul className="maintenance-list">
                <li>🔧 Maintenance complète</li>
                <li>🏁 Préparation véhicules</li>
                <li>👨‍🔧 Accompagnement personnalisé</li>
                <li>🎯 Projets sur mesure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="a-propos" className="about">
        <div className="container">
          <h2 className="section-title">Notre Expertise</h2>
          <div className="about-content">
            <div className="expertise-cards">
              <div className="expertise-card">
                <h4>🔍 Optimisation Antipollution</h4>
                <p>Interventions spécialisées sur FAP, EGR, et sondes lambda pour un fonctionnement optimal.</p>
              </div>
              <div className="expertise-card">
                <h4>📈 Performance Moteur</h4>
                <p>Cartographies personnalisées pour améliorer performances et consommation.</p>
              </div>
              <div className="expertise-card">
                <h4>🌍 Tous Véhicules</h4>
                <p>Expertise étendue : auto, moto, bateau, agricole, PL, bus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contactez-Nous</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Kars Shop Garage</h3>
              <p>Votre spécialiste en solutions électroniques automobiles</p>
              <div className="contact-details">
                <p>📍 </p>
                <p>📞 </p>
                <p>✉️ contact@karsshopgarage.fr</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Suivez-nous</h3>
              <div className="social-icons">
                <a href="https://wa.me/33631106532" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" title="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="mailto:contact@kars.shop.garage@outlook.fr" className="social-icon email" title="Email">
                  <MdEmail />
                </a>
                <a href="https://www.instagram.com/k_humhum?igsh=MTF6azZmdmx3NmZkdA==" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@humhum.institute" target="_blank" rel="noopener noreferrer" className="social-icon tiktok" title="TikTok">
                  <FaTiktok />
                </a>
              </div>
              <p className="social-text">Cliquez sur les icônes pour nous contacter directement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🔧 Kars Shop Garage</h3>
              <p>Spécialiste en solutions électroniques automobiles depuis plusieurs années.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Systèmes Antipollution</li>
                <li>Cartographie Moteur</li>
                <li>Pièces & Maintenance</li>
                <li>Tous Types de Véhicules</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Contactez-nous pour tous vos besoins en électronique automobile.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Kars Shop Garage. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
