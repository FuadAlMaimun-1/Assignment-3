function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0 || scores.find(score => typeof score !== "number")) {
        return "Invalid";
    }
    
    const scoreUpdated = scores.map(score => score + 10);
    return scoreUpdated.reduce((total, score) => total + score, 0)
}
const numberArray = [80, "90", 70]
console.log(bonusScore(numberArray));