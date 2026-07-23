import Link from "next/link";
import logoLarge from "@/assets/images/img-logo-large.png";
import logoSmall from "@/assets/images/img-logo-small.png";
import Image from "next/image";

const Gnb = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="mx-auto flex h-15 max-w-[1200px] items-center px-2.5">
        <Link href="/">
          <Image
            src={logoSmall}
            alt="do it"
            className="h-10 w-auto sm:hidden"
          />
          <Image
            src={logoLarge}
            alt="do it"
            className="hidden h-10 w-auto sm:block"
          />
        </Link>
      </div>
    </header>
  );
};

export default Gnb;
