const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;


app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const routes = require('./app/routing/routes-Api');
const htmlRoutes = require('./app/routing/routes-HTML');

app.use(routes)
app.use(htmlRoutes)

app.listen(PORT, function () {
    console.log('listening on http://localhost:' + PORT);
});
