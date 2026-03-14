import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';
import dbConnect from './lib/db.js';
const app = express();
const port = 6969;

dbConnect();
app.use(express.json());

app.use('/movies', moviesRoutes);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});