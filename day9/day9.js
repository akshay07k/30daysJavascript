// // Selecting and Manipulating Elements⬇︎
// let div = document.getElementById("super")
// div.innerText = "Hey, this is div"
// let collection = document.getElementsByClassName("main")
// // console.log(collection[0]);
// collection[0].style.backgroundColor = "lightblue"



// // Creating and Appending Elements⬇︎
// let div = document.createElement("div");
// div.innerHTML = "Hey this is second div"
// document.body.append(div)

// let li = document.createElement("li");
// li.innerText = "new li";
// document.getElementsByTagName("ul")[0].append(li)



// // Removing Elements⬇︎
// document.querySelector("#super").remove()

// let collection = document.getElementsByTagName("li");
// collection[collection.length - 1].remove()




// // Modifying Attributes and Classes⬇︎
// let div = document.querySelector("#super");
// div.className = "super"
// console.log(div);

// div.classList.remove("super")



// // Event Handling⬇︎
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    document.querySelector("#para").innerHTML = "Changed paragrah"
})

btn.addEventListener("mouseover", function () {
    console.log("Adf");
    this.style.borderColor = "lightblue";
})