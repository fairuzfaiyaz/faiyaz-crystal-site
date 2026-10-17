import CrystalizedBall from './components/CrystalizedBall';
import './App.css';

const pieces = [
  { name: 'Ember vessel', note: 'Hand-blown, 28 cm' },
  { name: 'Frost orb', note: 'Cold-worked, 18 cm' },
  { name: 'Nebula lantern', note: 'Lit from within, 34 cm' }
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#top">Lumen Glassworks</a>
        <nav aria-label="Primary">
          <a href="#collection">Collection</a>
          <a href="#studio">Studio</a>
          <a className="pill" href="#visit">Book a visit</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Glass that holds a storm.</h1>
            <p>
              We blow small worlds in a studio by the river. Every piece is signed, numbered,
              and made to catch the room around it.
            </p>
            <div className="actions">
              <a className="btn" href="#collection">See the collection</a>
              <a className="link" href="#studio">Meet the studio</a>
            </div>
            <p className="hint">Move your cursor across the sphere. Click to shake it.</p>
          </div>

          <div className="hero-ball" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <CrystalizedBall
              preset="plasma"
              color="#F25BD0"
              size={0.7}
              crackle={0.85}
              fill={0.5}
              interactive
              hoverStrength={0.7}
            />
          </div>
        </section>

        <section id="collection" className="collection">
          <h2>This season</h2>
          <ul>
            {pieces.map(p => (
              <li key={p.name}>
                <span className="name">{p.name}</span>
                <span className="note">{p.note}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="visit" className="foot">
        <span>Open Thursday to Sunday, by appointment.</span>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </footer>
    </div>
  );
}
