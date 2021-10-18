

function doLogin(userName, password) {
    const user = gUsers.find(user => user.username === userName && user.password === password);
    if(user) return user;
    return null;
}

function checkUserName(userName, password) {
    const user = gUsers.find(user => user.username === userName);
    if(user) return user;
    return null;
}