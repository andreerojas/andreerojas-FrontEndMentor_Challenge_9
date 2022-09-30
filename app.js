const numNotifications = document.querySelector('#number-notifications');
let unreadNotifications = document.querySelectorAll('.notification.unread');
const markReadBtn = document.querySelector('#markAllRead');



markReadBtn.addEventListener('click',function(){
    for (let notification of unreadNotifications){
        notification.classList.remove('unread');
    }
    numNotifications.innerText = 0;
})

