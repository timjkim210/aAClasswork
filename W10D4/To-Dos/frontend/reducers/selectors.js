export const allTodos = (state) => {
    let todosArr = Object.values(state.todos);
    return todosArr;
}