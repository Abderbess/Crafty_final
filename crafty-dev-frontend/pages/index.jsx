import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  const [trendingImages, setTrendingImages] = useState([]);
  const [currentTrending, setCurrentTrending] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const formattedImages = data.map((product) => product.url);
        setTrendingImages(formattedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleTrendingNext = () => {
    setCurrentTrending((prev) => (prev + 1) % trendingImages.length);
  };

  const handleTrendingPrev = () => {
    setCurrentTrending((prev) => (prev - 1 + trendingImages.length) % trendingImages.length);
  };

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="main-container">
        <section className="welcome-section">
          <h1>Bienvenue sur Crafty !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus nisi non tincidunt.
            Vivamus eu lorem et ipsum auctor vehicula.
          </p>
        </section>

        {/* Trending Products Carousel */}
        <section className="carousel-section">
          <h2>Les produits en vogue</h2>
          <div className="carousel">
            <button className="prev-btn" onClick={handleTrendingPrev}>PREV</button>
            <div className="carousel-content">
              {trendingImages.length > 0 ? (
                <img src={`/${trendingImages[currentTrending]}`} alt="Trending Product" />
              ) : (
                <p>Chargement des images...</p>
              )}
            </div>
            <button className="next-btn" onClick={handleTrendingNext}>NEXT</button>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="products-section">
          <h2>Les produits</h2>
          <div className="product-grid">
            {trendingImages.map((url, index) => (
              <div className="product-card" key={index}>
                <img src={`/${url}`} alt={`Produit ${index + 1}`} />
                <p>Produit {index + 1}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Inline CSS */}
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #fffdee;
          margin: 0;
          padding: 0;
        }

        .main-container {
          padding: 20px;
        }

        .welcome-section {
          text-align: center;
        }

        .welcome-section h1 {
          color: green;
        }

        .carousel-section,
        .products-section {
          margin: 40px 0;
        }

        .carousel {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .carousel-content img {
          width: 100%;
          max-width: 600px;
          height: auto;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .product-card img {
          width: 100%;
          border-radius: 10px;
        }

        footer {
          background-color: #f8f8f8;
          text-align: center;
          padding: 20px 0;
        }

        .prev-btn, .next-btn {
          background-color: green;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .prev-btn:hover, .next-btn:hover {
          background-color: darkgreen;
        }
      `}</style>
    </>
  );
};

export default Home;
