import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 8081;
const PUBLIC_DIR = join(__dirname, "../../../public");
const app = express();
const serverStart = new Date();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(join(PUBLIC_DIR, "assets")));

const sendPage = (folder, file) => (req, res) => {
  res.sendFile(join(PUBLIC_DIR, folder, file));
};

app.get("/", sendPage("sites", "index.html"));
app.get("/morbius", sendPage("sites", "morbius.html"));
app.get("/partners", sendPage("sites", "partners.html"));

app.get("/github", sendPage("redirects", "github.html"));
app.get("/github/organization", sendPage("redirects", "githuborg.html"));
app.get("/invite", sendPage("redirects", "invite.html"));
app.get("/premium", sendPage("redirects", "premium.html"));
app.get("/support", sendPage("redirects", "support.html"));

app.get("/tos", sendPage("legal", "tos.html"));
app.get("/privacy", sendPage("legal", "privacy.html"));

app.get("/api/serverstats", (req, res) => {
  res.json({
    message: "Server start time",
    startTime: serverStart.toISOString(),
    timestamp: Math.floor(serverStart.getTime() / 1000),
    uptime: Math.floor((Date.now() - serverStart.getTime()) / 1000),
  });
});

app.get("/:imageName", async (req, res) => {
  const { imageName } = req.params;
  const imagePath = join(PUBLIC_DIR, "assets/images", imageName);

  try {
    await fs.access(imagePath);
    res.sendFile(imagePath);
  } catch {
    console.error(`Image not found: ${imageName}`);
    res.status(404).send("Image not found");
  }
});

app.listen(PORT, () => {
  console.log(`
  Local:  http://localhost:${PORT}
  Started: ${serverStart.toLocaleString()}
  `);
});
