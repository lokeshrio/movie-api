import express from 'express';
import {getMovies, updateMovie, deleteMovies, createMovie} from '../controller/movieController.js';

const router = express.Router();
console.log("moviesRoutes loaded");
router.get('/getmovies', getMovies);

router.post('/create', createMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovies);

export default router;