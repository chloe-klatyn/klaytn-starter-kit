import Navbar from "./Navbar";
import "tailwindcss/tailwind.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="font-light mt-20 ml-20">{children}</main>
    </div>
  );
};

export default Layout;
