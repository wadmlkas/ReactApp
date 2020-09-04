import React from 'react';

type LinkProps = {
    active: boolean,
    children: Node,
    onClick: (event) => void
}

const Link = ({ active, children, onClick }: LinkProps) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
)

export default Link