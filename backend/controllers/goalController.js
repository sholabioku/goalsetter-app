const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc Get goals
// @Route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc Set goals
// @Route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text filed');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc Update goal
// @Route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc Delete goal
// @Route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
