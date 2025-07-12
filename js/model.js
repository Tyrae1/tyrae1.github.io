'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    const DB = loadFromLocalStorage();
    function saveToLocalStorage() {
        localStorage.setItem('contacts', JSON.stringify(DB));
    }
    function loadFromLocalStorage() {
        const data = localStorage.getItem('contacts');
        return data ? JSON.parse(data) : [];
    }

    const validateObject = (objectToValidate) => {
        if(typeof objectToValidate !== 'object') return false;
        const keysToValidate = Object.keys(objectToValidate);

        let isValid = true;

        for(let i = 0; i < OBJECT_KEYS.length; i++) {

            if(!keysToValidate.includes(OBJECT_KEYS[i])) {
                isValid = false
                break
            }

        }
        return isValid;
    }
    const getData = () => {
        return DB;
    }
    const setData = (data) => {

        // Object validation
        if(!data) return null;

        if(typeof data !== "object") return null;

        if(!validateObject(data)) return null;

        // Generate uniq ID
        let id = 1
        const currentData = getData();
        if(currentData.length > 0) {
            id = currentData[currentData.length-1].id + 1
        }

        // Save data to database;
        const dataToSave = {...data, id};
        DB.push(dataToSave);
        saveToLocalStorage();
        // return saved element
        return DB.at(-1);
    }
    const deleteData = ({id}) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();

        const userIndex = currentData.findIndex((singleUser) => id === singleUser.id );

        const deleted = DB.splice(userIndex, 1)[0];
        saveToLocalStorage();
        return deleted;
    }


    return {
        getData,
        setData,
        deleteData,
    }
}

const dataBase = createDataBase();