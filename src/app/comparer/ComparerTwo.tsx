import Image from "next/image";

type TProps = {
  leftImageURL: string;
  rightImageURL: string;
  leftImageAlt?: string;
  rightImageAlt?: string;
};

const ComparerTwo = (props: TProps) => {
  const {
    leftImageURL,
    rightImageURL,
    leftImageAlt = "left image camparison",
    rightImageAlt = "right image comparison",
  } = props;

  return (
    <div>
      <Image width={500} height={500} src={leftImageURL} alt={leftImageAlt} />
    </div>
  );
};

export default ComparerTwo;
