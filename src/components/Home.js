import { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    title: "Welcome to St. Andrew’s College",
    subtitle: "Empowering Students for a Better Future",
    image: "/banner1.jpg",
  },
  {
    title: "Admissions Open 2026–2027",
    subtitle: "Apply Now and Shape Your Career",
    image: "/banner2.jpg",
  },
  {
    title: "Excellence in Education",
    subtitle: "Quality Learning with Expert Faculty",
    image: "/banner3.jpg",
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
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="overlay">

        {/* NAAC Badge */}
        <div className="naac-badge">
          ⭐ NAAC Accredited Grade A+ College
        </div>

        <h1 className="hero-title">{slides[current].title}</h1>
        <p className="hero-subtitle">{slides[current].subtitle}</p>

      </div>
    </section>
  );
}

export default Home;