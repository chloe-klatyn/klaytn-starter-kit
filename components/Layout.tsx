import Navbar from "./Navbar";
import "tailwindcss/tailwind.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className=" flex font-light justify-center">{children}</main>
    </div>
  );
};

export default Layout;
