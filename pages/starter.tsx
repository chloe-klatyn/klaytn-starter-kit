import type { NextPage } from "next";
import InfoCard from "../components/InfoCard";

const Starter: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center mt-20">
      <div className="grid grid-cols-3">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Starter;
