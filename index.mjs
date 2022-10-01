import express, { application } from "express";
import path from "path";
import { engine } from "express-handlebars";
import session from "express-session";
import FileStore from "session-file-store";
import flash from "express-flash";

import conn from "./db/conn.mjs";

const app = express();

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// public path
app.use(express.static("public"));

// receber resposta do body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// session middleware
app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: path.join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// flash messages
app.use(flash());

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
