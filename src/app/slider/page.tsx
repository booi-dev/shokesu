import React from "react";
import SlideContainer from "./SlideContainer";
import Slide from "./Slide";
import Image from "next/image";

const images = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "black car",
  },
  {
    id: "2",
    url: "https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
    <div>
      <SlideContainer>
        {images.map((img) => (
          <Slide key={img.id}>
            <Image src={img.url} alt={img.alt} width={200} height={200} />
          </Slide>
        ))}
      </SlideContainer>
    </div>
  );
};

export default Page;
