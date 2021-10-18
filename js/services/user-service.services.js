function __createUsers() {

}

function _saveUsers() {

}

function getUsersToShow() {
    

}

function doLogin(userName, password) {
    const user = gUsers.find(user => user.username === userName && user.password === password);
    if(user) return user;
    return null;
}