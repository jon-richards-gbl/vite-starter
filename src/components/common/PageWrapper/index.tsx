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

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Suspense fallback={<div>loading...</div>}>{this.props.page}</Suspense>
    );
  }
}
