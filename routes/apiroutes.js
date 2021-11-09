const router = require("express").Router();
const { Workout } = require("../models");

//GET workouts
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $match: {} },
     { $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
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
router.post("/api/workouts", ({ body } , res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.get('/api/workouts/range', (req, res) => {
  let range = new Date()
  range.setDate(range.getDate()-7)
  Workout.aggregate([
    { $match: {day: {$gt: range}} },
    { $addFields: { totalDuration: { $sum: '$exercises.duration'}}}
  ])
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;
