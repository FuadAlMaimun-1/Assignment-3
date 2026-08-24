function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length === 0 ) {
        return "Invalid";
    }

    if(users.some(user => user.isActive === undefined)) {
        return "Invalid";
    }

    return users.filter((user) => user.isActive === true);
}
const userInfo = [{name: "A"}]
console.log(filterActiveUsers(userInfo));