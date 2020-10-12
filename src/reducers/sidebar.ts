const initialState = {
    shrink: false,
    items: [
        {
            name: "home",
            link: "/",
            icon: "home",
        },
        {
            name: "link",
            link: "/app",
            icon: "global",
        },
        {
            name: "dropdown",
            isOpen: false,
            icon: "snippets",
            subItems: [
                {
                    name: "action",
                    link: "/",
                },
                {
                    name: "newaction",
                    link: "/app",
                },
            ],
        },
        {
            name: "link",
            link: "/auto",
            icon: "setting",
        },
    ],
};

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_OPEN":
            const newItems = state.items.map((item) =>
                item.name === action.name
                    ? { ...item, isOpen: !item.isOpen }
                    : item
            );
            return { ...state, items: newItems };
        case "TOGGLE_SIDEBAR":
            return { ...state, shrink: !state.shrink };
        default:
            return state;
    }
};

export default sidebar;
