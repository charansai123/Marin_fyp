// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React, { useState } from 'react';
export const testFunction1 = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
            {show && <p>Hello World!</p>}
        </div>
    );
}

export const testFunction2 = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}
export const testFunction4 = () => {
    const [count, setCount] = useState(0);

    const handleNum2 = () => {
        setCount(count);
    }

    const handleNum2set = () => {
        setCount(count)
    }

    return (
        <div>
            <button onClick={handleNum2set}>+</button>
            <span>{count}</span>
            <button onClick={handleNum2}>-</button>
        </div>
    );
}
export const testFunction5 = () => {
    const [count, setCount] = useState(0);

    const handleNum3 = () => {
        setCount(count);
    }

    const handleNum3set = () => {
        setCount(count)
    }

    return (
        <div>
            <button onClick={handleNum3set}>+</button>
            <span>{count}</span>
            <button onClick={handleNum3}>-</button>
        </div>
    );
}
const testFunction = ({ num1, num2, num3, num4, num5, num6 }) => {
    const Values1 = [113, 141, 129, 132, 150];
    const Values2 = [1208, 1362, 1614, 1541, 1859];
    const Values3 = [num1, num2, num3, num4, num5, num6]
    console.log(Values3)
    if (Values1.includes(parseInt(num1)) && Values2.includes(parseInt(num6))) {
        return "1"
    }
    return "0";
};
export const testFunction3 = () => {
    const [count, setCount] = useState(0);

    const handleNum1 = () => {
        setCount(count);
    }

    const handleNum1set = () => {
        setCount(count)
    }

    return (
        <div>
            <button onClick={handleNum1set}>+</button>
            <span>{count}</span>
            <button onClick={handleNum1}>-</button>
        </div>
    );
}
export const testFunction6 = () => {
    const [count, setCount] = useState(0);

    const handleNum4 = () => {
        setCount(count);
    }

    const handleNum4set = () => {
        setCount(count)
    }

    return (
        <div>
            <button onClick={handleNum4set}>+</button>
            <span>{count}</span>
            <button onClick={handleNum4}>-</button>
        </div>
    );
}
export const testFunction7 = () => {
    const [count, setCount] = useState(0);

    const handleNum4 = () => {
        setCount(count);
    }

    const handleNum4set = () => {
        setCount(count)
    }

    return (
        <div>
            <button onClick={handleNum4set}>+</button>
            <span>{count}</span>
            <button onClick={handleNum4}>-</button>
        </div>
    );
}
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
export default testFunction;
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom


