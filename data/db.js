const headerRoute = require('./header.json')
const aboutRoute = require('./about.json')
const filmsRoute = require('./films.json')
const seriesRoute = require('./series.json')

module.exports = function () {
    return {
        headerRoute : headerRoute,
        aboutRoute : aboutRoute,
        filmsRoute : filmsRoute,
        seriesRoute : seriesRoute
    }
}