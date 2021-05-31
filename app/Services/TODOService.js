import { ProxyState } from "../AppState.js"
import { TODO } from "../Models/TODO.js"


class TODOService {
       createTodo(newtodos) {
        ProxyState.todos = [...ProxyState.todos, new TODO(newtodos)]
        ProxyState.todos = ProxyState.todos
        
        ProxyState.on('todos')
        
        console.log('in the items service', ProxyState.todos)
    }
}

export const todosService = new TODOService()