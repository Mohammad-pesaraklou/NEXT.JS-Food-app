import Layout from "@/components/template/Layout";
import "@/styles/global/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
