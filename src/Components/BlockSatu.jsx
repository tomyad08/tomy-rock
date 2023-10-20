import Image from "next/image";

const BlockSatu = () => {
  return (
    <div className="bg-repeat pt-10 pe-4 xl:pe-0 w-full bg-black xl:bg-transparent xl:h-screen flex justify-center items-bottom">
      <Image
        src="/rock.png"
        alt=" "
        width={600}
        height={600}
        className="bottom-0"
      />
    </div>
  );
};
export default BlockSatu;
