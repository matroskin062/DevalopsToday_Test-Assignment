import Router, { AppProps } from 'next/dist/next-server/lib/router/router';
import { wrapper } from '../store/store';
import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
