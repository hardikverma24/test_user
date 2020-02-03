const calculateTip = (total, tipPercent = 0.3) => total + total * tipPercent;

module.exports = {
  calculateTip
};
