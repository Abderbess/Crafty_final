require("dotenv").config();

const next = require("next");
const express = require("express");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.APP_PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Importation des routes API
  const categorieRouter = require("./routes/CategorieRoutes");
  const identifiantRouter = require("./routes/IdentifiantRoutes");
  const utilisateurRouter = require("./routes/UtilisateurRoutes");
  const vendeurRouter = require("./routes/VendeurRoutes");
  const boutiqueRouter = require("./routes/BoutiqueRoutes");
  const produitRouter = require("./routes/ProduitRoutes");
  const reservationRouter = require("./routes/ReservationRoutes");
  const transactionRouter = require("./routes/TransactionRoutes");
  const photoRouter = require("./routes/PhotoRoutes");
  const authRouter = require("./routes/AuthRoutes");

  // Middlewares globaux
  server.use(express.json());
  server.use(cookieParser());
  server.use(express.urlencoded({ extended: true }));

  // Définir les routes API
  server.use("/api/categorie", categorieRouter);
  server.use("/api/identifiant", identifiantRouter);
  server.use("/api/utilisateur", utilisateurRouter);
  server.use("/api/vendeur", vendeurRouter);
  server.use("/api/boutique", boutiqueRouter);
  server.use("/api/produit", produitRouter);
  server.use("/api/reservation", reservationRouter);
  server.use("/api/transaction", transactionRouter);
  server.use("/api/photo", photoRouter);
  server.use("/api/auth", authRouter);

  // Routes pour les pages de Next.js
  server.get("/", (req, res) => app.render(req, res, "/index"));
  server.get("/faq", (req, res) => app.render(req, res, "/faq"));
  server.get("/product", (req, res) => app.render(req, res, "/product"));
  server.get("/sign-in", (req, res) => app.render(req, res, "/sign-in"));
  server.get("/sign-up", (req, res) => app.render(req, res, "/sign-up"));
  server.get("/conditions", (req, res) => app.render(req, res, "/conditions"));
  

  // Gérer toutes les autres requêtes via Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Démarrage du serveur
  server
    .listen(port, () => {
      console.log(`> Serveur prêt sur http://localhost:${port}`);
    })
    .on("error", (err) => {
      console.error("Erreur au démarrage du serveur :", err.message);
    });
});

module.exports = app;
