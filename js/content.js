'use strict';
var gStrHtml = '';

function init2() {
    // var strHtml = '';
    var elUserData = document.querySelector('.user-data');
    // strHtml
    const user = loadFromStorage('loggedinUser');
    console.log('koreb');
    console.log(user);
    addData('id',user.id)
    elUserData.innerHTML = gStrHtml;
    addData('username',user.username)
    addData('password',user.password)
    addData('lastLoginTime',user.lastLoginTime)

    elUserData.innerHTML = gStrHtml;
  
}

function addData(data,txt) {
    gStrHtml+= `<li>${data} - ${txt}</li>`
}

function logOut() {
    window.location = 'index.html'
    removeFromStorage('loggedinUser')

}