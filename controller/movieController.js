import Movie from "../model/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, desc: req.body.desc },
      {
        new: true,
      },
    );
    await res.status(200).json(updateMovie);
  } catch (error) {
       return res.status(400).json({ message: error.message });

  }
};

export const deleteMovies = async (req, res) => {
  try {
    const movieId = req.params.id;
    await Movie.deleteOne({_id:movieId});
    res.status(200).json({message: 'movie deleted'})
  } catch (error) {
       return res.status(400).json({ message: error.message });

  }
};

export const createMovie = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
