function solve(input) {
    const result = [];

    for (const movieInfo of input) {
        if (movieInfo.includes('addMovie')) {
            result.push({
                name: movieInfo.split('addMovie ')[1]
            });
        } else if (movieInfo.includes('directedBy')) {
            const movieName = movieInfo.split(' directedBy ')[0];
            const directorName = movieInfo.split(' directedBy ')[1];

            const movieIndex = result.findIndex((movie => movie.name === movieName));

            if (movieIndex !== -1) {
                result[movieIndex].director = directorName;
            }
        } else if (movieInfo.includes('onDate')) {
            const movieName = movieInfo.split(' onDate ')[0];
            const date = movieInfo.split(' onDate ')[1];

            const movieIndex = result.findIndex((movie => movie.name === movieName));

            if (movieIndex !== -1) {
                result[movieIndex].date = date;
            }
        }
    }

    return result.filter(movie => !!movie.director && !!movie.date);
}

console.log(solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]));

console.log(solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]));