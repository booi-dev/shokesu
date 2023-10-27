import CarCard from "@/app/components/car-card";
import { imageData } from "@/app/components/data/data";
import Stake from "./stack";
import StackItem from "./stack-item";

const Page = () => {
  return (
    <div className="pt-40 px-20">
      <div className="flex items-center justify-center">
        <Stake
          className="w-[350px] h-[200px] p-2"
          offset={1.5}
          totalItems={imageData.length}
        >
          {imageData.map((img, idx) => (
            <StackItem key={img.id} idx={idx}>
              <CarCard img={img} idx={idx} />
            </StackItem>
          ))}
        </Stake>
      </div>
    </div>
  );
};

export default Page;
