// Problem 1
function studentIntroduction(student) {
    if(typeof student !== "object"){
        return "Invalid";
    }
    if(student.name === undefined || student.age === undefined || student.course === undefined){
        return "Invalid";
    } 
  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`

}

// Problem 2
function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length === 0 || (users.some(user => user.isActive === undefined))) {
        return "Invalid";
    }
        
    return users.filter((user) => user.isActive === true)
    
}

// Problem 3
function countHashtags(caption) {
    if(typeof caption !== "string"){
        return "Invalid"
    }
    
    const words = caption.split(" ")
    const hashtags = words.filter(word => word.startsWith("#"))

        let longestHashtags = "";
        for(let i = 0; i< hashtags.length; i++){
           
            const tag = hashtags[i].slice(1)
            if(tag.length > longestHashtags.length){
                longestHashtags = tag
            }
        }
        return { hashtagCount: hashtags.length, longestTag: longestHashtags }
}

// Problem 4
function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0 || scores.find(score => typeof score !== "number")) {
        return "Invalid";
    }
    
    const scoreUpdated = scores.map(score => score + 10);
    return scoreUpdated.reduce((total, score) => total + score, 0)
}

// Problem 5
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


