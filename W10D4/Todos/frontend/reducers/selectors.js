export const allTodos = (state) => {
    let todosArr = Object.values(state.todos);
    return todosArr;
}

export const errors = (state) => {
    let errorsArr = Object.values(state.error);
    return errorsArr;
}