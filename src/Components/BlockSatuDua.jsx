import BlockDua from "./BlockDua";
import BlockSatu from "./BlockSatu";

export default function BlockSatuDua() {
  return (
    <div
      className="xl:flex xl:justify-center bg-repeat"
      style={{ backgroundImage: 'url("/backk.png")' }}
    >
      <BlockSatu />
      <div className="w-full ">
        <BlockDua />
      </div>
    </div>
  );
}
