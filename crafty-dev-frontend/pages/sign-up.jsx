// Page: sign-in.jsx with embedded CSS and database integration
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Connexion réussie !');
        // Redirection ou traitement supplémentaire
      } else {
        alert('Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur serveur');
    }
  };

  return (
    <div>
      <Header />
      <style jsx>{`
        .login-form {
          text-align: center;
          padding: 20px;
        }

        .login-form h2 {
          color: #6c757d;
        }

        .login-form input {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #d1e7dd;
          border-radius: 8px;
          outline: none;
        }

        .login-form button {
          width: 80%;
          padding: 10px;
          background-color: #d1e7dd;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          color: #333;
        }

        .login-form button:hover {
          background-color: #badbcc;
        }

        .login-form a {
          color: #198754;
          text-decoration: none;
        }
      `}</style>
      <div className="container">
        <div className="login-form">
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Se connecter</button>
          </form>
          <p>Tu n'as pas encore de compte ? <a href="/sign-up">Inscris-toi !</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
