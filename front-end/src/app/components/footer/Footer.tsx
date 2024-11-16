import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="h-[600px] place-items-center bg-green-600 flex flex-col justify-center items-center gap-8">
          <p className="text-white font-extrabold text-[40px]">
            Saruul's food delivery
          </p>
          <div className="flex justify-between container max-w-[1100px]">
            <Link href="/">
              <p className="text-white font-bold text-[20px] underline">home</p>
            </Link>
            <Link href="/contact">
              <p className="text-white font-bold text-[20px] underline">
                contact
              </p>
            </Link>
            <Link href="/category">
              <p className="text-white font-bold text-[20px] underline">
                category
              </p>
            </Link>
            <Link href="/delivery">
              <p className="text-white font-bold text-[20px] underline">
                delivery
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
