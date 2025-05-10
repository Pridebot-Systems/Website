import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 8081;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static(join(__dirname, "../../../public/assets")));

const serverStart = new Date();
const serverStartformat = Math.floor(serverStart.getTime() / 1000);

// Sites
app.get("/", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/sites/index.html"))
);
app.get("/morbius", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/sites/morbius.html"))
);
app.get("/partners", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/sites/partners.html"))
);
app.get("/profiles/:userId", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/sites/profiles.html"))
);

// Redirects
app.get("/github", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/redirects/github.html"))
);
app.get("/github/organization", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/redirects/githuborg.html"))
);
app.get("/invite", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/redirects/invite.html"))
);
app.get("/premium", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/redirects/premium.html"))
);
app.get("/support", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/redirects/support.html"))
);

// Legal
app.get("/tos", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/legal/tos.html"))
);
app.get("/privacy", (req, res) =>
  res.sendFile(join(__dirname, "../../../public/legal/privacy.html"))
);

app.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = join(__dirname, "../../assets/images", imageName);

  console.log(`Requested image: ${imageName}`);
  console.log(`Looking for image at: ${imagePath}`);
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Image not found: ${imagePath}`);
      res.status(404).send("Image not found");
    } else {
      res.sendFile(imagePath);
    }
  });
});

app.get("/api/serverstats", (req, res) => {
  res.json({
    message: "Server start time",
    startTime: serverStart,
    formatedStartTime: serverStartformat,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
