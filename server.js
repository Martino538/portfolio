import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/assets'));
app.set('view engine', 'ejs');

// Routes
app.get("/", async (req, res) => {
  try {
    res.render('pages/index', {page: 'index'});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Kunst-in-c", async (req, res) => {
  try {
    res.render('pages/kunst-in-c', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Api", async (req, res) => {
  try {
    res.render('pages/api', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Dunkin", async (req, res) => {
  try {
    res.render('pages/dunkin', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Erfbelasting", async (req, res) => {
  try {
    res.render('pages/erfbelasting', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Fancy-Fireworks", async (req, res) => {
  try {
    res.render('pages/fancy-fireworks', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Huiskamer", async (req, res) => {
  try {
    res.render('pages/huiskamer', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

app.get("/projects/Pokedex", async (req, res) => {
  try {
    res.render('pages/pokedex', {});
  } catch (error) {
    console.error('Fetching data failed:', error);
    res.status(500).send('Failed to render data');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});