document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const keyHandler = () =>{
    document.addEventListener('keydown',(e)=>{
      // console.log(e.key)
      const container = document.querySelector('#moves-container')
      if (e.key==="ArrowUp"){
        li = document.createElement('li')
        li.textContent='up'
        container.appendChild(li)
      }
      else if (e.key=="ArrowDown"){
        li = document.createElement('li')
        li.textContent='down'
        container.appendChild(li)
      }
      else if (e.key=="ArrowLeft"){
        li = document.createElement('li')
        li.textContent='left'
        container.appendChild(li)
      }
      else if (e.key=="ArrowRight"){
        li = document.createElement('li')
        li.textContent='right'
        container.appendChild(li)
      }
      else if (e.key=="Backspace"){
        // console.log("spida")
        if (container.lastChild){container.lastChild.remove()}else{alert("No moves to delete")}
      }
    })
  }

  const button2 =()=>{
    btn=document.querySelector('#move-button')
    btn.addEventListener('click',(e)=>{
        const container = document.querySelector('#moves-container')
        if (container.firstChild){
          function ride (){
          go=container.firstChild.textContent
          move(go)
          container.firstChild.remove()
          }
        } else {
          alert("Out of Moves!")
        }
    })
  }

  function button (){
    btn=document.querySelector('#move-button')
    const container = document.querySelector('#moves-container')
    btn.addEventListener('click',(e)=>{
      function ride() {
        let direction = container.firstElementChild.textContent
        move(direction)
        container.firstElementChild.remove()
        if (container.firstElementChild === null) {
          clearInterval(myVar)
        }
      }
      let myVar = setInterval(ride, 500)
    })
  }
  
  keyHandler()
  button()

})
