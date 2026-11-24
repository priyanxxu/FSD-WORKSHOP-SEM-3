import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Serve static frontend files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// Route to download files from 'files' folder
app.get("/files/:filename", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.filename);
  res.download(filePath, (err) => {
    if (err) res.status(404).send("File not found");
  });
});

app.listen(PORT, () => {
  console.log(`Server running. Open http://127.0.0.1:${PORT}`);
});
