import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
