const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
require("dotenv").config();

var indexRouter = require('./routes/index');
//var signUpRouter = require('./routes/sign-up')

const mongoDb = process.env.DATABASE_URI;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


console.log(mongoDb)

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
  })
);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const match = await bcrypt.compare(password, user.password);
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      };
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      };
      return done(null, user);
    } catch(err) {
      return done(err);
    };
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch(err) {
    done(err);
  };
});

const app = express();
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
//app.use('/sign-up', signUpRouter);

app.get("/sign-up", (req, res) => res.render("sign-up-form"));



app.post("/sign-up", async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if(err) {
        return next(err);
      }
      const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
        const result = await user.save();
        res.redirect("/");
  });
    } catch(err) {
        return next(err);
    }
    });

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if(err) {
      return next(err);
    }
    res.redirect("/")
  })
})

app.listen(3000, () => console.log("app listening on port 3000!"));