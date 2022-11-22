import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import cards from './data/card.json';

const card = cards && cards.map((card) => (
  <Card
    key={card.id}
    card={card}
  />
))

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card--list">
        {card}
      </section>
    </div>
  );
}

export default App;
