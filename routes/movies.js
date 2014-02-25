module.exports = {
    getMovies: function (req, res) {
        res.send([
            {
                id: 1,
                title: 'Mask',
                year: 1994,
                genre: 'comedy',
                rate: '6.8'
            },
            {
                id: 2,
                title: 'Titanic',
                year: 1997,
                genre: 'drama',
                rate: '7.7'
            },
            {
                id: 3,
                title: 'Avatar',
                year: 2009,
                genre: 'action',
                rate: '8.0'
            }
        ]);
    }
}
