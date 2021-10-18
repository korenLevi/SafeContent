'use strict'
var gUserIdx = 104;
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

// loginTry()
function loginTry() {
    const users = loadFromStorage('usersDB');
    const elUserName = document.querySelector('.userName');
    const elPassword = document.querySelector('.password');
    const user = doLogin(elUserName.value, elPassword.value);
    console.log('elUserName', elUserName.value);
    // const user = gUsers.find(user => user.username === elUserName.value);
    console.log('elUserName', user);
    // console.log(userNameIdx);
    if (!user) return;

    user.lastLoginTime = new Date();
    saveToStorage('loggedinUser' , user);
    if(!user.isAdmin) window.location = 'content.html';
    else window.location = 'admin.html'
    

}

function signedIn() {
    const user = loadFromStorage('loggedinUser');
    window.location = 'content.html'

}

function signUp() {
    const users = loadFromStorage('usersDB');
    const elUserName = document.querySelector('.userName');
    const elPassword = document.querySelector('.password');
    if(checkUserName(elUserName.value, elPassword.value))return;
    const user = createNewUser(elUserName.value, elPassword.value);

    alert('sign up success')
    // saveToStorage('loggedinUser' , user);
    
   
}

function createNewUser( UserName , password) {

   const user =  {
        id: 'u' + ++gUserIdx,
        username: UserName,
        password: password,
        lastLoginTime: new Date(),
        isAdmin: false
    }
    gUsers.push(user);
    saveToStorage('usersDB', gUsers);
    return user;
}


