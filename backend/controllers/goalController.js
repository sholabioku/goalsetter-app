// @desc Get goals
// @Route GET /api/goals
// @access Private
const getGoals = (req, res, next) => {
  res.status(200).json({ message: 'Get goals' });
};

// @desc Set goals
// @Route POST /api/goals
// @access Private
const setGoal = (req, res, next) => {
  res.status(200).json({ message: 'Set goal' });
};

// @desc Update goal
// @Route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res, next) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete goal
// @Route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res, next) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
