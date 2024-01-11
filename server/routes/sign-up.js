const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("sign-up-form"));

router.post("/", async (req, res, next) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        const result = await user.save();
        res.redirect("/");
    } catch(err) {
        return next(err);
    };
});

module.exports = router;