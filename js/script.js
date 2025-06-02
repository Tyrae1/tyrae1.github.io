'use strict';
let user = {
    name: 'John',
    age: 30,
    isOnline: true,
    friends: ['Mary', 'Bob', 'Kate'],
    settings: {
        theme: 'dark',
        notifications: false
    }
}
const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;
console.log(user.name);
console.log(user.friends.length);
console.log(firstFriendName);
console.log(user.settings.theme);
console.log(notificationsEnabled);