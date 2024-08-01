function saveAtLocalAndSession(key, value) {
    if(typeof key !== "string"){
        console.log("Key must be string");
        return;
    }
    localStorage.setItem(key, JSON.stringify(value))
    sessionStorage.setItem(key, JSON.stringify(value))
}

saveAtLocalAndSession("userName", "Akshay")


function retrieve(key) {
    const dataFromLocal = localStorage.getItem(key)
    const dataFromSession = sessionStorage.getItem(key)

    console.log("Data in LocalStorage", dataFromLocal);
    console.log("Data in SessionStorage", dataFromSession);
}

retrieve("userName")


function removeFromBoth(key) {
    const dataFromLocal = JSON.parse(localStorage.getItem(key))

    const dataFromSession = JSON.parse(sessionStorage.getItem(key))

    console.log(dataFromLocal);
    console.log(dataFromSession);

    localStorage.removeItem(key);
    sessionStorage.removeItem(key);

    console.log("Removed from LocalStorage and SessionStorage");
    
}

removeFromBoth("userName")