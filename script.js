let full=document.getElementById("full")
let color=document.getElementById("color")


color.addEventListener("input",()=>{
    selectedcolor=color.value
    console.log(selectedcolor)
    full.style.backgroundColor=selectedcolor  
})