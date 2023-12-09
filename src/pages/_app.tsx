import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import NavigationLayout from "../components/layouts/navigation-layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NavigationLayout>
      <Component {...pageProps} />
    </NavigationLayout>
  );
};

export default MyApp;
