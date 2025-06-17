import React from 'react';
import { ViewportContext } from './viewport';

const useViewport = () => {
  const viewPort = React.useContext(ViewportContext);
  return viewPort;
};

export default useViewport;
