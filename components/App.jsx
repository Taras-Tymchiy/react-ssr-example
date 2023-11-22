import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScreenClassProvider, Container } from 'react-grid-system';

import GridSystem from './GridSystem.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

function App({ fallbackScreenClass }) {
  useEffect(() => {
    console.log('App mounted');
  }, []);
  return (
    <ScreenClassProvider fallbackScreenClass={fallbackScreenClass}>
      <Container>
        <h1>
          React Grid System
        </h1>
        <h2>
          Grid
        </h2>
        <GridSystem />

        <h2>
          Responsive utilities
        </h2>
        <ResponsiveUtilities />

        <h1>
          React I18nify
        </h1>
      </Container>
    </ScreenClassProvider>
  );
}

App.propTypes = {
  fallbackScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

App.defaultProps = {
  fallbackScreenClass: 'xl',
};

export default App;
