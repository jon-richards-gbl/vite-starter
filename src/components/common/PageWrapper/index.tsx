import React, { Suspense } from "react";

type PageWrapperProps = {
  page: React.ReactNode;
};

interface PageWrapperState {
  hasError: boolean;
}

export default class PageWrapper extends React.Component<
  PageWrapperProps,
  PageWrapperState
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.warn({ error, errorInfo });
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
  }

  // TODO: Update this to show some cool 'Oops!' graphic and the error text?
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Something went wrong.</p>
          <p>
            {/* Need to show error message here?  
            Can we use { isRouteErrorResponse } from "react-router-dom";*/}
            <i></i>
          </p>
        </div>
      );
    }

    return (
      <Suspense fallback={<div>loading...</div>}>{this.props.page}</Suspense>
    );
  }
}
