import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  const wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithLoggingHOC extends Component {
    componentDidMount() {
      console.log(`Component ${wrappedName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${wrappedName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingHOC.displayName = `WithLogging(${wrappedName})`;

  return WithLoggingHOC;
};

export default WithLogging;

