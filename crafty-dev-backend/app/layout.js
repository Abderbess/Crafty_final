// Import du composant Layout
import Layout from './Components/layout';  // Assurez-vous d'utiliser le bon chemin ici

export default function RootLayout({ children }) {
  return (
    <html lang="fr"> {/* Définir la langue dans la balise html */}
      <head>
        {/* Ajoutez ici des balises <meta>, des liens CSS ou d'autres éléments */}
      </head>
      <body>
        <Layout>{children}</Layout> {/* Utilisation du Layout interne */}
      </body>
    </html>
  );
}
