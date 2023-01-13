import React from "react";

const TodoItem = (props) => {
    if(props.isCompleted){
        console.log(props)
        return <div onClick={props.onIsCompletedChange(props.id)}>
            {props.content}
        </div>
    }else{
        return <div><del>
            {props.content}
        </del></div>
    }
}

export default TodoItem