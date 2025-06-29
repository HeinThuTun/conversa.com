let menu = document.getElementById("menu");
let drop = document.getElementById("drop");
let navBar = document.getElementById("drop2");
let cross = document.getElementById("cross");
let home_bg = document.getElementById("home_bg");
let about_us = document.getElementById("about");
let events = document.getElementById("events");
let contact_us = document.getElementById("contact_us");
let home2 = document.getElementById("home2");
let about_us2 = document.getElementById("about_us");
let events2 = document.getElementById("events2");
let contact_us2 = document.getElementById("contact_us2");
let volunteer = document.getElementById("volunteer");
let volunteer2 = document.getElementById("volunteer2")

home2.addEventListener("click", () =>{
  home2.classList.add("under_line");
  if(about_us2.classList.contains("under_line") || volunteer2.classList.contains("under_line") || events2.classList.contains("under_line") || contact_us2.classList.contains("under_line")){
    about_us2.classList.remove("under_line");
    events2.classList.remove("under_line");
    contact_us2.classList.remove("under_line");
    volunteer2.classList.remove("under_line");
  }
})

volunteer2.addEventListener("click", () =>{
  volunteer2.classList.add("under_line");
  if(about_us2.classList.contains("under_line") || home2.classList.contains("under_line") || events2.classList.contains("under_line") || contact_us2.classList.contains("under_line")){
    about_us2.classList.remove("under_line");
    events2.classList.remove("under_line");
    contact_us2.classList.remove("under_line");
    home2.classList.remove("under_line");
  }
})

about_us2.addEventListener("click", () =>{
  about_us2.classList.add("under_line");
  if(home2.classList.contains("under_line") || volunteer2.classList.contains("under_line") || events2.classList.contains("under_line") || contact_us2.classList.contains("under_line")){
    home2.classList.remove("under_line");
    events2.classList.remove("under_line");
    contact_us2.classList.remove("under_line");
    volunteer2.classList.remove("under_line");
  }
})

events2.addEventListener("click", () =>{
  events2.classList.add("under_line");
  if(home2.classList.contains("under_line") || volunteer2.classList.contains("under_line") ||  about_us2.classList.contains("under_line") || contact_us2.classList.contains("under_line")){
    home2.classList.remove("under_line");
    about_us2.classList.remove("under_line");
    contact_us2.classList.remove("under_line");
    volunteer2.classList.remove("under_line");
  }
})

contact_us2.addEventListener("click", () =>{
  contact_us2.classList.add("under_line");
  if(home2.classList.contains("under_line") || events2.classList.contains("under_line") || about_us2.classList.contains("under_line")){
    home2.classList.remove("under_line");
    events2.classList.remove("under_line");
    about_us2.classList.remove("under_line");
    volunteer2.classList.remove("under_line");
  }
})

home_bg.addEventListener("click", () => {
  home_bg.classList.add("background");
  if(about_us.classList.contains("background")){
    about_us.classList.remove("background");
  }
  if(events.classList.contains("background")){
    events.classList.remove("background");
  }
  if(contact_us.classList.contains("background")){
    contact_us.classList.remove("background");
  }
  if(volunteer.classList.contains("background")){
    volunteer.classList.remove("background");
  }
})
 
about_us.addEventListener("click", () => {
  about_us.classList.add("background");
  if(home_bg.classList.contains("background")){
    home_bg.classList.remove("background");
  }
  if(events.classList.contains("background")){
    events.classList.remove("background");
  }
  if(contact_us.classList.contains("background")){
    contact_us.classList.remove("background");
  }
  if(volunteer.classList.contains("background")){
    volunteer.classList.remove("background");
  }
})

events.addEventListener("click", () => {
  events.classList.add("background");
  if(home_bg.classList.contains("background")){
    home_bg.classList.remove("background");
  }
  if(about_us.classList.contains("background")){
    about_us.classList.remove("background");
  }
  if(contact_us.classList.contains("background")){
    contact_us.classList.remove("background");
  }
  if(volunteer.classList.contains("background")){
    volunteer.classList.remove("background");
  }
})

contact_us.addEventListener("click", () => {
  contact_us.classList.add("background");
  if(home_bg.classList.contains("background")){
    home_bg.classList.remove("background");
  }
  if(events.classList.contains("background")){
    events.classList.remove("background");
  }
  if(about_us.classList.contains("background")){
    about_us.classList.remove("background");
  }
  if(volunteer.classList.contains("background")){
    volunteer.classList.remove("background");
  }
})

volunteer.addEventListener("click", () => {
  volunteer.classList.add("background");
  if(home_bg.classList.contains("background")){
    home_bg.classList.remove("background");
  }
  if(events.classList.contains("background")){
    events.classList.remove("background");
  }
  if(about_us.classList.contains("background")){
    about_us.classList.remove("background");
  }
  if(contact_us.classList.contains("background")){
    contact_us.classList.remove("background");
  }
})

menu.addEventListener("click", () => {
  navBar.classList.toggle('hidden');
  if(cross.classList.contains("hidden")){
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    menu.classList.remove("hidden")
    cross.classList.add("hidden")
  }
})

cross.addEventListener("click", () => {
  navBar.classList.toggle('hidden');
  if(cross.classList.contains("hidden")){
    menu.classList.add("hidden");
    cross.classList.remove("hidden");
  } else {
    menu.classList.remove("hidden")
    cross.classList.add("hidden")
  }
})

