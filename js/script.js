'use strict';
const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};
function findValuesByKey(obj, targetKey) {
    let result = [];

        for (let key in obj){
            const value = obj[key];
            if (key === targetKey) {
                result.push(value);
            }
    if (typeof value === 'object' && value !== null) {
            const nestedResult = findValuesByKey(value, targetKey);
            result = result.concat(nestedResult);
    }
    }
    return result;
}
findValuesByKey(data, "id");
findValuesByKey(data, "name");
console.log(findValuesByKey(data, "id"));
console.log(findValuesByKey(data, "name"));
// ➜ [1, 2, 3, 4, 5]
