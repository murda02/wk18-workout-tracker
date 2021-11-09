const router = require("express").Router();
const Workout = require("../models/workout.js");

//GET workouts
router.get("/api/workout", (req, res) => {
  Workout.aggregate([
    { $addFields: {
      totalDuration: {
        $sum: '$workouts.duration'
      }
    }}
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Post workout
router.post("/api/workout", (req, res) => {
  body = req.body;
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
