// server/index.ts
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

// -----------------------------
// CONFIGURATION
// -----------------------------
const app = express();
const PORT = Number(process.env.PORT ?? 5174); // Port du serveur, par défaut 5174

// -----------------------------
// MIDDLEWARES
// -----------------------------
app.use(cors()); // Permet à ton frontend d'accéder à l'API depuis un autre port
app.use(express.json()); // Pour pouvoir lire les données JSON dans les requêtes POST

// -----------------------------
// GESTION DES DONNÉES
// -----------------------------
const dataDir = path.resolve('server/data'); // Dossier où on va stocker le fichier JSON
const dataFile = path.join(dataDir, 'visits.json'); // Fichier JSON pour le compteur de visites

// Vérifie que le dossier et le fichier existent, sinon on les crée
function ensureData() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ count: 0 }, null, 2), 'utf8');
  }
}

// Lit le compteur actuel depuis le fichier JSON
function readCount(): number {
  ensureData();
  const raw = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(raw).count ?? 0; // Retourne 0 si jamais count est absent
}

// Écrit un nouveau compteur dans le fichier JSON
function writeCount(count: number) {
  fs.writeFileSync(dataFile, JSON.stringify({ count }, null, 2), 'utf8');
}

// -----------------------------
// ROUTES API
// -----------------------------

// Route GET : récupère le nombre de visites
app.get('/api/visits', (_req, res) => {
  const count = readCount();
  res.json({ count });
});

// Route POST : incrémente le nombre de visites de 1
app.post('/api/visits/increment', (_req, res) => {
  const next = readCount() + 1;
  writeCount(next);
  res.json({ count: next });
});

// -----------------------------
// DEMARRAGE DU SERVEUR
// -----------------------------
app.listen(PORT, () => {
  console.log(`[visits] serveur démarré sur http://localhost:${PORT}`);
});
