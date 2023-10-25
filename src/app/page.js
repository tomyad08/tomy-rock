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
    </div>
  );
}
