import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [count, setCount] = useState(0);

  const names = [{ name: 'mark' }, { name: 'john' }, { name: 'kev' }, { name: 'berry' }, { name: 'sally' }];

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>Increment</button>
      {count <= 0 ? '' : (<button type="button" onClick={() => setCount(count - 1)}>Decrement</button>)}
      <button type="button" onClick={() => setCount(0)}>Reset</button>
      <h2>{count}</h2>
      <h1>
        { count < 5 ? '' : ('WINNER!')}
      </h1>
      <div>
        {names.map((obj) => (
          count === names.indexOf(obj) ? (<h2>{obj.name}</h2>) : ''
        ))}
      </div>
    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Defualt Counter',
};
