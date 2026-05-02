import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HelloWorldProps {
  msg: string;
}

export const HelloWorld = ({ msg }: HelloWorldProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{msg}</h1>

      <div>
        <button type='button' onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <button className='tanish-btn'>Basic Button</button>
        <button className='tanish-btn-primary'>Primary Button</button>
        <ul>
          <li>
            {' '}
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <p>
        Edit <code>components/HelloWorld.jsx</code> to test HMR (Hot Module
        Replacement)
      </p>

      <p>
        Check out{' '}
        <a href='https://vitejs.dev/guide/' target='_blank'>
          create-react
        </a>
        , the official React + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the{' '}
        <a href='https://react.dev/learn' target='_blank'>
          React Docs Scaling up Guide
        </a>
        .
      </p>
      <p>Click on the Vite and Vue logos to learn more</p>
    </div>
  );
};
