import React, { useEffect, useState } from 'react';

function DelayedEffect(props: { timerMs: number }) {
    const { timerMs } = props;

    const [val, toggle] = useState('val');

    useEffect(() => {
        setTimeout(() => {
            toggle(`${val} then ${timerMs}`)
        }, timerMs)
    }, [timerMs]);

    return <div>{val}</div>
}

export default DelayedEffect;