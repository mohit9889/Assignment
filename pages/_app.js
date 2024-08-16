import MainLayout from "~/layouts/MainLayout";
import "~/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
