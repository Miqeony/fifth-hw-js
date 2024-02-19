const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler`s List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],


    listMoviesByGenre: function (genre) {
        const movieInGenre = this[genre];
        if (movieInGenre) {
            console.log(`Фільми у жанрі "${genre}": ${movieInGenre.join(' , ')}`);
        } else {
          console.log(`Такого жанру "${genre}" немає! `);
        }
      },
}

movies.listMoviesByGenre('drama');

movies.listMoviesByGenre('sci-fi');