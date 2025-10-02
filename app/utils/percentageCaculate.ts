function calculatePercentage(raised: number, goal: number): number {
  if (goal === 0) {
    throw new Error("Goal cannot be zero.");
  }
  const total = (raised / goal) * 100;
  return Math.round(total);
}

export default calculatePercentage;
