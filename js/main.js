'use strict'

var gUsers = [{
        id: 'u101',
        username: 'puki',
        password: 'secret',
        lastLoginTime: new Date(),
        isAdmin: false
    }, {
        id: 'u102',
        username: 'koren',
        password: '12345',
        lastLoginTime: new Date(),
        isAdmin: true
    },
    {
        id: 'u103',
        username: 'luli',
        password: 'yes',
        lastLoginTime: new Date(),
        isAdmin: false
    }
]

function init() {
    saveToStorage('usersDB', gUsers);
}

function renderSignIn() {

}
// loginTry()
function loginTry() {
    const users = loadFromStorage('usersDB');
    const elUserName = document.getElementById('userName');
    const elPassword = document.getElementById('password');
    const user = doLogin(elUserName.value, elPassword.value);
    console.log('elUserName', elUserName.value);
    // const user = gUsers.find(user => user.username === elUserName.value);
    console.log('elUserName', user);
    // console.log(userNameIdx);
    if (!user) return;

    user.lastLoginTime = new Date();
    saveToStorage('loggedinUser' , user);
    if(!user.isAdmin) window.location = 'content.html';
    window.location = 'admin.html'

}

function signedIn() {
    const user = loadFromStorage('loggedinUser');
    window.location = 'content.html'

}


