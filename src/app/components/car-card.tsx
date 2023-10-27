import Image from "next/image";

type Props = {
  img: {
    id: string;
    url: string;
    alt: string;
  };
  idx?: number;
};

const CarCard = (props: Props) => {
  const { img, idx } = props;

  return (
    <div className="relative border-8 border-white ">
      <div className="absolute top-2 aspect-square text-sm rounded-full left-2 flex items-center justify-center w-[30px] h-[30px] bg-white z-10 text-black p-2">
        {idx}
      </div>
      <div className="relative overflow-hidden w-[300px] h-[300px]">
        <Image
          // width={200}
          // height={200}
          fill
          src={img.url}
          alt={img.alt}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CarCard;
