// import { render } from 'sass';
import { ProxyState } from '../AppState.js'
import { todosService } from "../Services/TODOService.js"

// This is the alert at load
window.onload = function agentPrompt() {
        var name = prompt('Enter Agent Name');
        if (name != null && name != "") {
            alert("Welcome Agent " + name);
            // ProxyState.todos.push(name) 
        }
    document.getElementById('agent').innerText = name
    } //I could probably add a save/load state to this so It will hold- how to reset that though? Add load save state that works with the other load/savestates  


    // This should draw the card that loads the 
function _drawTodos() {
    // console.log("You are in todo draw- button works")
    let todos = ProxyState.todos
    let todoElm = document.getElementById('todolist')
    let template = ''
        todos.forEach(t => {
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
                            ${t.name}
                          </label>
                          <button name="repairItem" onclick="app.todosController.deleteTodo('${t.id}')"><span class="bg-transparent">🗑</span></button> 
                          </li>
                          </ul>
                        </div>
                </div>
                `
        
                todoElm.innerHTML = template
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
        _drawTodos()
       
     }

}
