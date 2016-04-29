console.log("Hell");
const todos = (state =[], action)=>{
  switch (action.type) {
      case "ADD_TODO":
        return [...state,
               {
                 id: action.id,
                 text: action.text,
                 completed: false,
               }
              ];
    case "TOGGLE_TODO":
      return state.map(todo =>{
        if(action.id !== todo.id){
          return todo;
        }
        else{
          return {...todo,
                 completed: !todo.completed};
        }
      });
      default:
        return state;       
  };
};

const testAddTodos = () =>{
  const stateBefore = [];
  const action ={
    type: "ADD_TODO",
    id: 0,
    text: 'learn redux',
  }
  const stateAfter = [
    {
    id: 0,
    text: 'learn redux',
    completed: false,
  }];
  deepFreeze(stateBefore);
  deepFreeze(action);
  
  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

const testToggleTodos = () => {
  const stateBefore = [
        {
    id: 0,
    text: 'learn redux',
    completed: false,
  },
    {
      id: 1,
      text: 'hey text2 learn reacto',
      completed: false,
    }
  ];
  const action = {
    type: "TOGGLE_TODO",
    id:1,
  };
  
  const stateAfter = [
        {
    id: 0,
    text: 'learn redux',
    completed: false,
  },
    {
      id: 1,
      text: 'hey text2 learn reacto',
      completed: true,
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action))
    .toEqual(stateAfter);
}

testAddTodos();
testToggleTodos();
console.log("passed");
