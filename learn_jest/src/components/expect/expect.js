import React from 'react';

export const bestLaCroixFlavor = () => {
    return "grapefruit"
}

const Expect = () => {

    return (
        <div>
            <h1>Expect method</h1>
            <p>The expect function is used every time you want to test a value. You will rarely call expect by itself. Instead, you will use expect along with a "matcher" function to assert something about a value.</p>

            <p>It's easier to understand this with an example. Let's say you have a method bestLaCroixFlavor() which is supposed to return the string 'grapefruit'. Here's how you would test that:</p>
        </div>
    )
}

export default Expect;