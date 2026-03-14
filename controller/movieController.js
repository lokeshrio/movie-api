import Movie from "../model/movieModel.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.log("error in getMovies", error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    console.log(req.body)
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, desc: req.body.desc },
      {
        new: true,
      },
    );
    await res.status(200).json(updateMovie);
  } catch (error) {
    console.log("error in updateMovie", error);
  }
};

export const deleteMovies = async () => {
  try {
  } catch (error) {
    console.log("error in deleteMovies", error);
  }
};

export const createMovie = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    console.log(req.body);

    const movie = await newMovie.save();
    return res.status(200).json(movie);
  } catch (error) {
    console.log("error in createMovie", error);
    return res.status(400).json({ message: error.message });
  }
};
