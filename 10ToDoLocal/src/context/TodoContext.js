import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todo:[{
        id:1,
        todo:"Sample",
        completed:false
    }],
    addTodo: (todo)=>{},
    toggleTodo: (id)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,todo)=>{}

});
export const TodoProvider = TodoContext.Provider;
export const useTodo = () => useContext(TodoContext);