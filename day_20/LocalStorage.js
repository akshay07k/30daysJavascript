// Understanding LocalStorage⬇︎
// Activity1
(function () {
    const str = "This is string";
    localStorage.setItem("str", str);

    const retrievedString = localStorage.getItem("str")

    console.log(retrievedString);
})
// ()


;(function () {
    const obj = {
        name: "Akshay",
        age: 19
    }

    localStorage.setItem("data", JSON.stringify(obj))

    const retrievedObj = JSON.parse(localStorage.getItem("data"))

    console.log(retrievedObj);
})
// ()



// Activity2

function saveAtLocal(e){
    e.preventDefault()
    
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;

    localStorage.setItem("userData", JSON.stringify({userName, userEmail}))
}

function loadData(){
    const userData = localStorage.getItem("userData");
    if(userData){
        document.body.append(userData)
    }
}

function removeFromLocal(){
    const userData = JSON.parse(localStorage.getItem("userData"))

    if(userData){
        console.log(userData);

        localStorage.removeItem("userData");

        console.log("Removed from LocalStorage");
    }
}

document.getElementById("userForm").addEventListener("submit", saveAtLocal)

document.addEventListener("DOMContentLoaded", loadData)

document.getElementById("remove").addEventListener("click", removeFromLocal)