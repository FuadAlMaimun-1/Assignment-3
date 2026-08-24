function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    
    if(students.find (student => 
        student.name === undefined ||
         student.score === undefined ||
         typeof student.score !== "number"
        )) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
       return student.score >= 70;
    });

    const names = qualified.map(studentInfo => 
        studentInfo.name.toUpperCase());

    return names.slice(0, 3);
}
const studentInfo = [
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]
console.log(generateLeaderboard(studentInfo));


