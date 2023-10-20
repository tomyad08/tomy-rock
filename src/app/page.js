import BlockEmpat from "@/Components/BlockEmpat";
import BlockLima from "@/Components/BlockLima";
import BlockSatuDua from "@/Components/BlockSatuDua";
import Blocktiga from "@/Components/BlockTiga";

export default function Home() {
  return (
    <div>
      <BlockSatuDua />
      <Blocktiga />
      <BlockEmpat />
      <BlockLima />

      <div className="hidden md:flex fixed top-5 right-5">
        <audio controls autoPlay loop>
          <source src="/audio1.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}
