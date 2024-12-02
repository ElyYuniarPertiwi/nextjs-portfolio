// Importing the Image component from Next.js
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src="/circle.png" // Path to your image
        width={260} // Image width
        height={260} // Image height
        className="w-full h-full"
        alt="Decorative Circle"
      />
    </div>
  );
};

export default Circles;
