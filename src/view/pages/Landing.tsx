import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Landing() {
  const history = useHistory();

  useEffect(() => {
    history.push('/employee');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <></>
  );
}
