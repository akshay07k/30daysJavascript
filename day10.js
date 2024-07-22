// // Basic Event Handling⬇︎
// let btn = document.querySelector("#change");
// btn.addEventListener("click", function () {
//     let p = document.querySelector("#para");
//     p.innerHTML = "A paragraph tag";
// })

// let img = document.querySelector("#mount");
// img.addEventListener("dblclick", function () {
//     if(img.style.display == "none"){
//         img.style.display = "block";
//     }
//     else{
//         img.style.display = "none";
//     }
// })




// // Mouse Events⬇︎
// let p = document.querySelector("#para");
// p.addEventListener("mouseover", function () {
//     p.style.backgroundColor = "aliceblue"
// })
// p.addEventListener("mouseout", function () {
//     p.style.backgroundColor = ""
// })



// // Keyboard Events⬇︎
// let input = document.querySelector("#name")
// input.addEventListener("keydown", function (e) {
//     console.log(e.key);
// })

// input.addEventListener("keyup", function () {
//     console.log(input.value);
// })




// // Form Events⬇︎
// let form = document.querySelector("#form");
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("Name:", e.target.name.value);
//     console.log("Pass:", e.target.pass.value);
// })


// let select = document.querySelector("#select");
// let selectValue = document.querySelector("#selectValue");

// select.addEventListener("change", function(){
//     // console.log(select.options[select.selectedIndex]);
//     let option = select.options[select.selectedIndex];
//     selectValue.innerHTML = `Selected value is ${option.value}`
// })



// // Event Delegation⬇︎
// let ul = document.querySelector("#ul-list");
// ul.addEventListener("click", function(e){
//     console.log(e.target.innerText);
// })

// let li = document.createElement("li")
// li.innerHTML = "list5"
// ul.append(li)
