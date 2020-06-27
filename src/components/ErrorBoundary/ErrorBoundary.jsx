import React from 'react';

import ErrorPage from '../ErrorPage';

class ErrorBoundary extends React.Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ErrorPage /> : this.props.children;
  }
}

export default ErrorBoundary;