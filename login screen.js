let myForm=document.querySelector("form");
let button=document.querySelector(".presetbutton");
let name=document.querySelector("#name");
let nameValue=document.querySelector("#nametext");
let nameDiv=document.querySelector("#namediv");

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
})

myForm.addEventListener("submit", function() {
    name.innerText="";
    name.innerText=nameValue.value;

    if(nameValue.value !== "")
{
        nameDiv.classList.remove("off");
}

else if (nameValue.value === "")
{
    nameDiv.classList.add("off");
}
})

