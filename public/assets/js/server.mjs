import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 8081;
const PUBLIC_DIR = join(__dirname, "../../../public");
const IMAGES_DIR = join(PUBLIC_DIR, "assets/images");
const app = express();
const serverStart = new Date();

const ICON_MAP = {
  pridecordIcon: "pridecord.png",
  pridebotIcon: "pridebotlogo.png",
};

async function updateServerImages() {
  try {
    const res = await fetch("https://api.pridebot.xyz/serverstats");
    const data = await res.json();

    for (const [key, filename] of Object.entries(ICON_MAP)) {
      if (data[key]) {
        const imageUrl = data[key].replace(".webp", ".png");
        const imgRes = await fetch(imageUrl);
        if (imgRes.ok) {
          const buffer = Buffer.from(await imgRes.arrayBuffer());
          await fs.writeFile(join(IMAGES_DIR, filename), buffer);
          console.log(`Updated ${filename}`);
        }
      }
    }
  } catch (error) {
    console.error("Failed to update server images:", error);
  }
}

updateServerImages();
setInterval(updateServerImages, 30 * 60 * 1000);

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
  const uptimeSeconds = Math.floor((Date.now() - serverStart.getTime()) / 1000);
  res.json({
    message: "Server start time",
    startTime: serverStart.toISOString(),
    timestamp: Math.floor(serverStart.getTime() / 1000),
    uptime: uptimeSeconds,
    uptimeFormatted: formatUptime(uptimeSeconds),
  });
});

app.get("/api/uptime-badge", (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - serverStart.getTime()) / 1000);
  res.json({
    schemaVersion: 1,
    label: "uptime",
    message: formatUptime(uptimeSeconds),
    color: "brightgreen",
  });
});

function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

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
