import {useRef} from "react";

export default function UseRefHookDemo() {

    const inputEl = useRef(null);
    const onButtonClick = () => {
        // input 박스에 focus 줘야함
        inputEl.current.focus();
    }

    return(
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>클릭시 인풋박스에 포커스 주어짐</button>
        </>
    );
}