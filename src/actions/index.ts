let nextTodoId = 0;

export const addTodo = (text) => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text,
});

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    filter,
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id,
});

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const toggleOpen = (name) => ({
    type: "TOGGLE_OPEN",
    name: name,
});

export const toggleSidebar = () => ({
    type: "TOGGLE_SIDEBAR",
});

export const changeNav = (list: string[]) => ({
    type: "CHANGE_NAV",
    list: list,
});
