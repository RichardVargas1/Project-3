const path = require("path");
const router = require("express").Router();
const speechRoutes = require("./speech");
const userAuthRoutes = require("./userAuth");

// Speech routes
router.use("/speech", speechRoutes);

// User Authentication Routes
router.use("/userAuth", userAuthRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
