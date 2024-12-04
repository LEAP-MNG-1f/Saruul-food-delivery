import Link from "next/link";
import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container max-w-[1160px] m-auto mt-[300px] mb-[300px]">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non tempora,
          officiis soluta excepturi labore ullam nam, deleniti impedit qui,
          laboriosam nesciunt quaerat commodi quisquam reiciendis hic harum iste
          doloribus perferendis laborum! Nihil est ex odit dolorem repudiandae,
          eligendi id soluta culpa, deserunt facilis vel, amet nesciunt labore
          illo suscipit vitae sit! Voluptates in maiores adipisci nemo, sint aut
          magni consequatur nulla deleniti cupiditate asperiores facilis atque
          ea temporibus! Iusto pariatur architecto dicta ducimus dignissimos
          distinctio cupiditate nesciunt, accusantium eius labore aliquid
          perspiciatis dolorem est, quam, nisi vel! Accusamus quae inventore
          nisi atque veniam, ducimus magni assumenda vero alias distinctio
          aspernatur.
        </p>
        <div className="flex">
          <p className="font-extrabold text-[100px] text-red-500">
            +976 8093 317
          </p>
          <Link href="/admin">
            <p className="font-extrabold text-[100px] text-red-500">1</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
