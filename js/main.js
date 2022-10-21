const cursor=document.querySelector(".cursor")
const lcursor=document.querySelector(".link-c")
const hand=document.querySelector(".hs")
window.addEventListener("mousemove",(e)=>{
    let x=e.x
    let y=e.y
    cursor.style.left=`${x}px`
    cursor.style.top=`${y}px`
    lcursor.style.left=`${x}px`
    lcursor.style.top=`${y}px`
})
const links=document.querySelectorAll("a")
links.forEach(function(link){
  link.addEventListener("mouseover", function(){
    lcursor.classList.add("active")
    cursor.classList.add("active")
  })
  link.addEventListener("mouseout", function(){
    lcursor.classList.remove("active")
    cursor.classList.remove("active")
  })
})
const navi=document.querySelector(".navi")
const img=document.querySelectorAll(".img")
const navBox=document.querySelectorAll(".nav-box a")
const fixed=document.querySelector(".fixeds")
const expert=document.querySelector(".expertise")
navi.addEventListener("mouseover", function(e){
  let id=e.target.dataset.id
  if(id){
    img.forEach(function(im){
      im.classList.remove("active")
      e.target.classList.add("active")
    })
     let sect=document.getElementById(id)
     sect.classList.toggle("active")
  }
})
const lines =document.querySelectorAll(".line")
window.addEventListener("scroll", function(){
  lines.forEach(function(line){
    let lineHeight=line.getBoundingClientRect().top
    if(window.innerHeight>lineHeight-100){
      line.classList.add("active")
    }
  })
  let linkHeight=navi.getBoundingClientRect().top
  let expertHeight=expert.getBoundingClientRect().top
  if(this.window.innerHeight>linkHeight+100){
    navi.classList.add("active")
    document.body.style.backgroundColor="#fff"
  }
  else{
     document.body.style.backgroundColor="#000"
  }
  if(this.window.innerHeight>expertHeight-100){
    document.body.style.backgroundColor="#000"
    expert.classList.add("active")
  }
})
navi.addEventListener("mouseout", function(e){
  let id=e.target.dataset.id
  if(id){
    img.forEach(function(im){
      im.classList.remove("active")
      e.target.classList.add("active")
    })
     let sect=document.getElementById(id)
     sect.classList.remove("active")
  }
})
const secta=document.querySelectorAll(".secta")
navBox.forEach(function(nav){
  nav.addEventListener("click", function(e){
    let sectt=nav.nextElementSibling
    e.preventDefault()
    fixed.classList.add("active")
    setTimeout(function(){
      fixed.classList.remove("active")
      sectt.classList.add("active")
      lcursor.classList.add("scale")
      lcursor.innerHTML="launch project"
    },2000)
  })
})
const close=document.querySelectorAll(".close")
close.forEach(function(clo){
   clo.addEventListener("click",function(){
    secta.forEach(function(sect){
      fixed.classList.add("active")
      lcursor.classList.remove("scale")
      lcursor.innerHTML=`<div class="eye">
      <img src="/img/eye2.png" alt="" width="25px">
  </div>`
      setTimeout(function(){
        fixed.classList.remove("active")
        sect.classList.remove("active")
        window.scrollTo(0,0)
      },2000)
    })
   })
})
const fixedLine=document.querySelector(".liner-fixed")
const countEl=document.querySelector(".count-text")
const liner=document.querySelectorAll(".liner")
let count=0
let interval=setInterval(function(){
  count+=13
  if(count>=91){
    clearInterval(interval)
    setTimeout(function(){
      fixedLine.classList.add("active")
    },1000)
    
  }
  countEl.innerHTML=count
},1000)
window.addEventListener("load", function(){
  liner.forEach(function(line){
    line.classList.add("active")
  })
  if(history.scrollRestoration){
    history.scrollRestoration="manual"
   }
   else{
    window.scrollTo(0,0)
   }

})