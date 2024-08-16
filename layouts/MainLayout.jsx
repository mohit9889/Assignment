import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
});

const MainLayout = ({ children }) => {
  return <main className={`h-screen ${montserrat.className}`}>{children}</main>;
};

export default MainLayout;
