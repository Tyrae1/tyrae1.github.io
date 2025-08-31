'use strict';
const userIds = [1, 2, 3, 4, 5];
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({id, name: `User ${id}`});
            } else {
                reject(`User ${id} not found`);
            }
        }, 1000);
    })
}
function getUsersData(userIds) {
    const promises = userIds.map(userId => fetchUserData(userId));
    return Promise.allSettled(promises).then(result => {
        const success = result
            .filter(r => r.status === 'fulfilled')
            .map(r => r.value);
        const errors = result
            .filter(r => r.status === 'rejected')
            .map(r => r.reason);
        return {success, errors};
    });
}
getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});
