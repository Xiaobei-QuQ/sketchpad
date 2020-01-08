import { Result } from "antd";
import React from "react";
// import Error from "./Error/index";
// import Loading from './Loading';

interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: any, info: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    /* tslint:disable */
    console.error(error);
    console.error(info);
    /* tslint:eable */
  }

  public render() {
    // return <Loading />;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          status="error"
          title="内部发生错误"
          subTitle="请查看控制台日志"
        />
      );
    }

    return this.props.children;
  }
}
