import type { NextPage } from "next";
import InfoCard from "../components/InfoCard";

const Starter: NextPage = () => {
  return (
    <div className="flex justify-center mt-20 mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Starter;
