const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = 5000;

routes(app);

app.listen(PORT, () => console.log(`PORT: ${PORT}`));

module.exports = app;
