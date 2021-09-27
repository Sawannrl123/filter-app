import React from 'react';
import { isEqual } from 'lodash';

const usePrevious = (value) => {
  const currentRef = React.useRef(value);
  const previousRef = React.useRef();

  if(!isEqual(currentRef.current, previousRef.current)) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}

export default usePrevious;
