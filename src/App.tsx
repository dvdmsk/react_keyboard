import React, { useEffect, useRef, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string | null>(null);
  const firstRender = useRef(false);

  const handleClick = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
    }

    document.addEventListener('keyup', handleClick);

    return () => {
      document.removeEventListener('keyup', handleClick);
      setKey(null);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : `Nothing was pressed yet`}
      </p>
    </div>
  );
};
