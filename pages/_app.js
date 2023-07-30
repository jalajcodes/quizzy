import "../styles/styles.css";
import Layout from "../components/Root";
import { QuizDataProvider } from "../context/QuizProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <QuizDataProvider>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </QuizDataProvider>
  );
}
