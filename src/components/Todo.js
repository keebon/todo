import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends React.Component{
    state = {
        todos : []
    }

    addTodo = (todo) => {
        this.setState({
            todos : [todo, ...this.state.todos]
        });
    }

    render(){
        return(
            <div className = "todo">
                <div className = "container">
                    <div className = "form-wrapper">
                        <TodoForm 
                        onSub = {this.addTodo}
                        />
                        {this.state.todos.map(todo => 
                            <TodoList 
                            key = {todo.id}
                            todo = {todo}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}