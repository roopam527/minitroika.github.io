
console.log(document.getElementById("navigation__checkbox").checked)
var checkBox = document.getElementById("navigation__checkbox");

var sections = document.querySelectorAll('section')
checkBox.addEventListener('change',(event)=>{
    
        sections.forEach((element)=>{
            if(checkBox.checked){
            element.style.transform="scale(0)";
            }
            else{
               element.style.transform="";
            }
        })
        
    }
)

var hideSections =()=>{
    sections.forEach((element)=>{
        console.log(element)
        element.classList.add("display--hidden")
        //element.classList.remove("display--block")
        
    })
}
var display =(id)=>{

    element = document.getElementById(id)
   hideSections();
   element.classList.toggle("display--hidden")
   element.style.transform="";
    //document.getElementById(id).classList.add("display--block")
   
    // if(id=="section-events"){
    //     document.getElementById(id).classList.add("display--inherit")
        
    // }
    checkBox.checked = false
}

var init = ()=>{
   
   display('section-header')
}

init();

document.getElementById("btn-header").addEventListener('click',()=>display('section-header'))
document.getElementById("btn-about").addEventListener('click',()=>display('section-about'))
document.getElementById("btn-events").addEventListener('click',()=>display('section-events'))
document.getElementById("btn-study").addEventListener('click',()=>display('section-study'))
document.getElementById("btn-team").addEventListener('click',()=>display('section-team'))
document.getElementsByClassName("btn-team")[0].addEventListener('click',()=>display('section-team'))

