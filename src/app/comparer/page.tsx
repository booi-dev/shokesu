// import ComparerOne from "./ComparerOne";
import ComparerTwo from "./ComparerTwo";

const img1 =
  "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600";
const img2 =
  "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ComparerTwo
        topImageURL={img1}
        bottomImageURL={img2}
        className="w-[500px] h-[500px]"
      />
    </div>
  );
};

export default page;
