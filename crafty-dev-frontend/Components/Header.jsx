// Header.js
'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo Crafty" width={60} height={60} />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="votre recherche..."
          className="search-input"
        />
        <button className="login-btn">se connecter</button>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f8e8;
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .logo img {
          height: 60px;
        }
        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .search-input {
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          width: 300px;
        }
        .login-btn {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .login-btn:hover {
          background-color: #45a049;
        }
      `}</style>
    </header>
  );
}
