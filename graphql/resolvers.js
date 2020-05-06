import { getMovies, getMovieById, suggestion } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieById(id),
    suggestions: (_, { id }) => suggestion(id),
  },
};

export default resolvers;
