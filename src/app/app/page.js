import { BannerSec } from "@/components/common/HomeComponents/BannerSec";
import { ProductList } from "@/components/common/HomeComponents/ProductList";
import { Specialists } from "@/components/common/HomeComponents/Specialists";

export default function Home() {
  return (
    <>
      <div className="w-full bg-indigo-800">

        <BannerSec />

        <ProductList />

        <Specialists />

      </div>
    </>
  );
}
