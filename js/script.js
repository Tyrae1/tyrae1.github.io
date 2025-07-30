'use strict';
//1.MAP
const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];
function groupByCategory(items) {
    const map = new Map();
    for (const item of items) {
        const key = item.category;
        if (map.has(key)) {
            map.get(key).push(item);
        } else {
            map.set(key, [item]);
        }
    }
    return map;
}
const resultMap = groupByCategory(items);
for (const [category, products] of resultMap) {
    console.log('Категорія:', category.name);
    console.log('Товари:', products);
}
//2. Set
const obj1 = { name: "a" };
const obj2 = { name: "a" };
const input = [obj1, obj1, obj2, obj2, obj1];

function filterUniqueByReference(input) {
    return Array.from(new Set(input));
}

const resultSet = filterUniqueByReference(input);
console.log(resultSet);
//3.WeakMap

function createMetadataStorage() {
    const metaData = new WeakMap();
    return {
        setMetaData(obj, data) {
            metaData.set(obj, data);
        },
        getMetaData(obj) {
            return metaData.get(obj);
        },
        hasMetaData(obj) {
            return metaData.has(obj);
        },
        deleteMetaData(obj) {
            return metaData.delete(obj);
        }
    };
}
const storage = createMetadataStorage();
const user1 = { name: "Anna" };
const user2 = { name: "Oleg" };
const user3 = { name: "Alice" };
storage.setMetaData(user1, {role: "admin"});
storage.setMetaData(user2, {role: "user"});
storage.setMetaData(user3, {role: "test"});
console.log(storage.getMetaData(user1));
console.log(storage.getMetaData(user2));
console.log(storage.getMetaData(user3));
console.log(storage.hasMetaData(user1));
console.log(storage.hasMetaData({name: 'Anna'}));
console.log(storage.hasMetaData(user3));
storage.deleteMetaData(user3);
console.log(storage.hasMetaData(user3));
console.log(storage.getMetaData(user3));

//4.WeakSet

class ObjectTracker {
    constructor() {
        this.weakSet = new WeakSet();
    }
        mark(obj) {
           this.weakSet.add(obj);
    }
        wasProcessed(obj) {
           return this.weakSet.has(obj);
    }
}
const tracker = new ObjectTracker();
const obj = {name: 'A'};
console.log(tracker.wasProcessed(obj));
tracker.mark(obj);
console.log(tracker.wasProcessed(obj));