import React from 'react';
import ReactDOM from 'react-dom';

function TextInputWithFocusButton() {
    const inputEl: any = React.useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        if (inputEl & inputEl.current) {
            inputEl.current.focus();
        }
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}