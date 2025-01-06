// Footer.jsx
'use client';  // Assurez-vous d'ajouter cette ligne en haut du fichier

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Une question ?</h3>
        <p><a href="/faq">Voici notre FAQ</a></p>
        <p><a href="/contact">C'est ici pour nous contacter</a></p>
      </div>
      <div className="footer-column">
        <h3>Autres liens utiles</h3>
        <p><a href="/conditions">Nos conditions générales</a></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 - Abdou, Ryan, Manue</p>
      </div>

      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f8e8;
          padding: 20px 40px;
          border-top: 1px solid #ddd;
        }
        .footer-column {
          flex: 1;
          text-align: center;
        }
        .footer-column h3 {
          font-size: 18px;
          color: #4caf50;
          margin-bottom: 10px;
        }
        .footer-column p {
          font-size: 14px;
          margin: 5px 0;
        }
        .footer-column a {
          color: #333;
          text-decoration: none;
        }
        .footer-column a:hover {
          text-decoration: underline;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #555;
        }
      `}</style>
    </footer>
  );
}
