const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// initialise express

const app = express();

//enabling cors

app.use(cors());

// routes
app.use(`/api/search/`, require("./routes/searchResults.js"))

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
