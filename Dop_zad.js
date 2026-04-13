import { useState } from "react";

const Paragraphs = ({ par }) => {
    // Храним для каждого абзаца: развернут или нет
    const [openStates, setOpenStates] = useState(Array(par.length).fill(false));

    // Функция которая переключает состояние конкретного абзаца
    const toggle = (index) => {
        const copy = [...openStates];
        copy[index] = !copy[index];
        setOpenStates(copy);
    };

    // Функция которая берет только первое предложение
    const getFirst = (text) => {
        const dotIndex = text.indexOf(".");
        if (dotIndex === -1) return text;
        return text.slice(0, dotIndex + 1);
    };

    return (
        <div>
            {par.map((text, index) => (
                <p key={index} onClick={() => toggle(index)}>
                    {openStates[index] ? text : getFirst(text)}
                    {!openStates[index] && "..."}
                </p>
            ))}
        </div>
    );
};

export default Paragraphs;