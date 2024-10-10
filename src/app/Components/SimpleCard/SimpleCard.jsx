import { BarChart } from "lucide-react";
import donat from "../Images/donat.png";
import donatChart from "../Images/donatChart.png";
import donatt from "../Images/donatt.png";
import barChart from "../Images/barChart.png";
import Image from "next/image";

const cardImages = {
  1: donat,
  2: donatChart,
  3: donatt,
  4: barChart,
};
export function SimpleCard({ id, number, title, description }) {
  const isColumnLayout = id === 3 || id === 4;

  let classNames = "flex p-6 bg-white rounded-xl gap-3 w-1/4";
  if (isColumnLayout) classNames = classNames.concat(" flex-col");

  return (
    <div className={classNames}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium">{number}</h1>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm font-light">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={cardImages[id]}
          height={isColumnLayout ? 150 : 80}
          width={isColumnLayout ? 150 : 80}
          alt={title}
          className="object-cover"
          quality={100}
        />
      </div>
    </div>
  );
}
