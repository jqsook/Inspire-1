import { ProxyState } from '../AppState.js'
import { todosService } from "../Services/TODOService.js"

// This is the alert at load
window.onload = function agentPrompt() {
        var name = prompt('Enter Agent Name');
        if (name != null && name != "") {
            alert(name);
        }
    document.getElementById('agent').innerText = name
    } //I could probably add a save/load state to this so It will hold- how to reset that though?  Log out button????  It would clear on a cache reset like the rest of the form data.


    // This should draw the card that loads the 
    function _drawTasks() {
    // console.log("You are in TasksController")
    let tasks = ProxyState.tasks
    let taskElm = document.getElementById('task')
    let template = ''
//NOTE style tag on this div for background color, background-color : MYHEXCode, t.color
    //This is for the counter <div class="ml-3"><span>  Repairs</span></div>
    tasks.forEach(t => {
        let checkitems = ProxyState.checkitems.filter(c => c.task == t.id)
        template += `
        <div class="col-3 m-3 bg-light px-0 border border-dark">
        
                <div class="ml-2 text-dark" style="background-color:${t.color}" name="p">
                    ${t.name}
                    <button class="col-2 ml-5" onclick="app.tasksController.endRepairOrder('${t.id}')">☓</button>
                </div>
                <div class="align-items-start ml-2">
                <h6>Repair:<span id="counter"></span> </h6>
                </div>
                <div class="row justify-content-center py-1 card-body ">
                    <ul class="col-12 bg-shade">
                        <li class="row align-items-center"></li>
                        <li class="row align-items-center"> </li>
                    </ul>
                    <b class="col-12"></b>
                    <ul class="col-12 bg-shade"></ul>`


        checkitems.forEach(c => {
            template +=`

                <div class="form-check" style="background-color:${t.color}"name="chk"> 
                    <ul>
                        <li class="col-12 flex-column">
                        <input
                        required
                        minlength="2"
                        maxlength="15"
                        class="form-check-input"
                        type="checkbox"
                        id="${t.id}"
                        />
                    <label class="form-check-label" for="defaultCheck1">
                        ${c.name}
                    </label>
                    <button id="remove" onclick="app.checkItemsController.endRepairItem('${t.id}')"><span class="bg-transparent">🗑</span></button>
                </div>
                </li>
                </ul>
                `
        })


                template +=   `
                    <form onsubmit="app.checkItemsController.addCheckItem(event, '${t.id}' )">
                    <div class="input-group p-3">
                    <input type="text" class="form-control" name="name"placeholder="Add Repair Task.." >
                    <div class="input-group-append">

                    <button class="p-0 border-0 "><span class="input-group-text">✚</span></button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
    `
  })
  taskElm.innerHTML = template
}




export default class TODOController {
    constructor() {
        //console.log('todo controller is up')
    }
        
         
    createTodo(event) {
        event.preventDefault()
        let form = event.target
        let newTodos = {
            name: form.name.value,
            id: form.id.value,
            
        }
        todosService.createTodo(newTodos)
        
        form.reset()
        
    }

}
