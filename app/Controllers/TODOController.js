import { ProxyState } from '../AppState.js'
import { todosService } from "../Services/TODOService.js"

// This is the alert at load
window.onload = function agentPrompt() {
        var name = prompt('Enter Agent Name');
        if (name != null && name != "") {
            // alert(name);
            ProxyState.todos.push(name) //I think this pushes to temp storage???
        }
    document.getElementById('agent').innerText = name
    } //I could probably add a save/load state to this so It will hold- how to reset that though? Add load save state that works with the other load/savestates  


    // This should draw the card that loads the 
function _drawTodos() {
    console.log("You are in todo draw- button works")
    let tasks = ProxyState.tasks
    let taskElm = document.getElementById('todolist')
    let template = ''
    todos.forEach(t => {
        let todos = ProxyState.todos.filter(t => t.todos == t.id)
        template += `
               <div class="col-4 bg-dark ml-5" id="todolist">
             <div class="form-check text-light" name="chkBox" > 
                          <ul id="content">
                            <li class="col-12 flex-column">
                            <input
                            required
                            minlength="2"
                            maxlength="15"
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            name="defaultCheck"/>
                          <label class="form-check-label" for="defaultCheck">
                            Find Dekard
                          </label>
                          <button name="repairItem" onclick="app.todosController.deleteTodo('${t.id}')"><span class="bg-transparent">🗑</span></button> 
                          </li>
                          </ul>
                        </div>
                </div>
                `
                taskElm.innerHTML = template
    })
}
    



export default class TODOController {
    constructor() {
        //console.log('todo controller is up')
    }
        
    createTodo(event) {
        event.preventDefault()
        console.log("button works")
        let form = event.target
        let newTodos = {
            name: form.name.value,
            id: form.id.value,
            
        }
        todosService.createTodo(newTodos)
        
        form.reset()
        
     }

}
