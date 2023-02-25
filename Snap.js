const menu = document.querySelector(".menu")
const featureArrow= document.getElementById("feature-arrow")
const companyArrow = document.getElementById("company-arrow")
const sideNav = document.querySelector(".side-nav")
const closeMenu = document.querySelector(".close-menu")
const featureSidebar = document.getElementById("feature-sidebar")
const companySidebar = document. getElementById("company-sidebar")


menu.addEventListener("click", displaySide )
closeMenu.addEventListener("click", closeSide)
featureSidebar.addEventListener("click", fDroplink)
companySidebar.addEventListener("click", cDroplink)




function displaySide(){
  sideNav.style.display = "block"
  }

function closeSide(){
   sideNav.style.display = "none"
}

function fDroplink(){
   let featureSidebarLink = document.getElementById("feature-sidebar-link")
   if(featureSidebarLink.style.display === ""){
      featureSidebarLink.style.display = "block"
   }
   else{
      featureSidebarLink.style.display = ""
   }
}

function cDroplink(){
   let companySidebarLink = document.getElementById("company-sidebar-link")
   if(companySidebarLink.style.display === ""){
      companySidebarLink.style.display = "block"
   }
   else{
      companySidebarLink.style.display = ""
   }
}

 featureArrow.addEventListener("click", function(){
 let clicks = document.getElementById("featureContent")
if (clicks.style.display === ""){
   clicks.style.display = "block"
} else {
   clicks.style.display = ""
}

})


companyArrow.addEventListener("click", function(){
let click = document.getElementById("companyContent")
if (click.style.display === ""){
   click.style.display = "block"
} else {
   click.style.display = ""
}
})


