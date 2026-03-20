import { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    title: "Welcome to St. Andrew’s College",
    subtitle: "Empowering Students for a Better Future",
  },
  {
    title: "Admissions Open 2026–2027",
    subtitle: "Apply Now and Shape Your Career",
  },
  {
    title: "Excellence in Education",
    subtitle: "Quality Learning with Expert Faculty",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="overlay">
        <div className="naac-badge">⭐ NAAC Accredited Grade A+ College</div>
        <h1 className="hero-title">{slides[current].title}</h1>
        <p className="hero-subtitle">{slides[current].subtitle}</p>
      </div>
    </section>
  );
}

export default Home;