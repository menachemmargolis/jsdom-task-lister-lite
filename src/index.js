document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')

   form.addEventListener('submit', function(event){
     event.preventDefault()
     let ul = document.getElementById('tasks')

     let list = document.createElement("li")
     
     
     list.innerHTML = event.target[0].value

     if(event.target[1].value == '1'){list.style.color ='red'}
     else if(event.target[1].value == '2'){list.style.color ='blue'}



     let destroy = document.createElement('button')
     destroy.innerText = "delete"
  
   
     ul.append(destroy, list)

          destroy.addEventListener('click',function(event){
            let deltedLi = event.target.nextElementSibling
            destroy.remove()
            deltedLi.remove()
          })
     
   }) 

});
