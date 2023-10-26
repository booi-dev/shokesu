import Image from "next/image";
import Slide from "./Slide";
import Slider from "./Slider";

const images = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "black car",
  },

  {
    id: "3",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    alt: "black car",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "black car",
  },
];

const Page = () => {
  return (
    <Slider>
      {images.map((img) => (
        <Slide key={img.id}>
          <Image src={img.url} alt={img.alt} fill className="" />
        </Slide>
      ))}
    </Slider>
  );
};

export default Page;
