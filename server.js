import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.resolve('dist')));
app.use(express.static(path.join(__dirname, "public"))); // CSS, JS, images, PDF, favicon, etc.

// Routes
app.get("/", async (req, res) => {
  try {
    res.render('pages/index', {page: 'index'});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');5
  }
});

app.get("/projects/Bannerfy", async (req, res) => {
  try {
    res.render('pages/bannerfy', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Kunst-in-c", async (req, res) => {
  try {
    res.render('pages/kunst-in-c', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Api", async (req, res) => {
  try {
    res.render('pages/api', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});


app.get("/projects/countdown-game", async (req, res) => {
  try {
    res.render('pages/countdown-game', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/investment-tool", async (req, res) => {
  try {
    res.render('pages/investment-tool', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Runite", async (req, res) => {
  try {
    res.render('pages/runite', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Fancy-Fireworks", async (req, res) => {
  try {
    res.render('pages/fancy-fireworks', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Pokedex", async (req, res) => {
  try {
    res.render('pages/pokedex', { page: 'project' });
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get('/download-cv', (req, res) => {
  const filePath = 'public/CV-MartijnKooijman.pdf';
  res.download(filePath, 'CV-MartijnKooijman.pdf', (err) => {
    if (err) {
      console.error('Download failed:', err);
      res.status(500).send('Kan CV niet downloaden');
    }
  });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});