const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  workouts: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    distance: {
      tyep: Number,
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
