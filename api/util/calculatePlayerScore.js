function calculatePlayerScore(stats) {
  if (stats.matchesPlayed === 0) return 0;

  // Normalized stats
  const goalsPerGame = stats.goals / stats.matchesPlayed;
  const assistsPerGame = stats.assists / stats.matchesPlayed;
  const savesPerGame = stats.saves / stats.matchesPlayed;
  const shotsPerGame = stats.shots / stats.matchesPlayed;
  const winRate = stats.wins / stats.matchesPlayed;
  const shotAccuracy = stats.shots > 0 ? stats.goals / stats.shots : 0;
  const demoRatio =
    (stats.demosInflicted - stats.demosTaken) / stats.matchesPlayed;
  const streakBonus = Math.min(stats.longestStreak, 5) * 5; // up to 25pts

  // Weighted scoring
  let score = 0;
  score += goalsPerGame * 60;
  score += assistsPerGame * 40;
  score += savesPerGame * 40;
  score += shotAccuracy * 80;
  score += winRate * 200;
  score += demoRatio * 10;
  score += streakBonus;

  // Clamp between 0 and 1000
  score = Math.max(0, Math.min(1000, score));
  return Math.round(score * 100) / 100;
}

module.exports = calculatePlayerScore;
