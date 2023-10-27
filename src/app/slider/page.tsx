import Link from "next/link";

const Page = () => {
  return (
    <div className="p-20 ">
      <div className="py-8 text-4xl">
        <Link href="./slider/2"> 2 </Link>
      </div>

      <div className="py-8 text-4xl">
        <Link href="./slider/3"> 3 </Link>
      </div>

      <div className="py-8 text-4xl">
        <Link href="./slider/stacks"> Stacks </Link>
      </div>
    </div>
  );
};

export default Page;
