/*function showSidebar(){
    const Sidebar=document.querySelector('.navbar-items')
     Sidebar.style.display= 'flex'
  }
  function hideSidebar(){
    const Sidebar=document.querySelector('.navbar-items')
     Sidebar.style.display= 'none'
  }*/
 const list=document.querySelector('.menubar')
 const items=document.querySelector('.navbar-items')
list.addEventListener('click',()=>{
    items.classList.toggle('show')
})

