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
async function getUsersData(userIds) {
    try {
        const promises = userIds.map(userId => fetchUserData(userId));
        const result = await Promise.allSettled(promises);
        console.log('All settled:', result);
        const success = result.filter(r => r.status === 'fulfilled').map(r => r.value);
        const errors = result.filter(r => r.status === 'rejected').map(r => r.reason);
        return {success, errors};
    } catch (err) {
        console.error('Ops something went wrong', err);
        return {success: [], errors: []};
    }
}
getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});
