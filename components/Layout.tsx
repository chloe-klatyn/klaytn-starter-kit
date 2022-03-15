import Navbar from "./Navbar";
import "tailwindcss/tailwind.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="font-light mr-auto">{children}</main>
    </div>
  );
};

export default Layout;
