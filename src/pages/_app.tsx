import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      {/* some basic page transition animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          animate={{ opacity: 1 }}
          initial={{
            opacity: 0.1,
          }}
          exit={{
            opacity: 0.1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>{" "}
    </Provider>
  );
}
