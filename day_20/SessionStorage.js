// Understanding SessionStorage⬇︎
// Activity3
(function (){
    const str = "This is string";
    sessionStorage.setItem("str", str);

    const retrievedString = sessionStorage.getItem("str")

    console.log(retrievedString);
})
// ()


;(function () {
    const obj = {
        name: "Akshay",
        age: 19
    }

    sessionStorage.setItem("data", JSON.stringify(obj))

    const retrievedObj = JSON.parse(sessionStorage.getItem("data"))

    console.log(retrievedObj);
})
// ()



// Activity4

function saveAtSession(e){
    e.preventDefault()
    
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;

    sessionStorage.setItem("userData", JSON.stringify({userName, userEmail}))
}

function loadData(){
    const userData = sessionStorage.getItem("userData");
    if(userData){
        document.body.append(userData)
    }
}

function removeFromSession(){
    const userData = JSON.parse(sessionStorage.getItem("userData"))

    if(userData){
        console.log(userData);

        sessionStorage.removeItem("userData");

        console.log("Removed from LocalStorage");
    }
}

document.getElementById("userForm").addEventListener("submit", saveAtSession)

document.addEventListener("DOMContentLoaded", loadData)

document.getElementById("remove").addEventListener("click", removeFromSession)

