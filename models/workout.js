const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter workout name"
  },
  type: {
    type: String,
  },
  weight: {
    type: Number,
    required: "Enter weight"
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
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
