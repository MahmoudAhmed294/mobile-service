const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  config = require("./app/config/config.js"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  compression = require("compression"),
  app = express();
const PORT = config.PORT;

corsOptions = {
  origin: config.FRONT_HOST,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this page." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/order.routes")(app);

// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
