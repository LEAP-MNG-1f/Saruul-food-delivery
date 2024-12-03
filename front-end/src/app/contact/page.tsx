import { Footer } from "../_components/footer/Footer";
import { Header } from "../_components/header/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container m-auto mt-[300px] mb-[300px]">
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
        <p className="font-extrabold text-[100px] text-red-500">
          +976 8093 3171
        </p>
      </div>
      <Footer />
    </div>
  );
}
