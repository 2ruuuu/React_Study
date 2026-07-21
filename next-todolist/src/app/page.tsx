import Button from "@/components/Button";
import whitePlus from "@/assets/icons/ic-whitePlus.svg";

export default function Home() {
  return (
    <div>
      홈페이지
      <Button
        variant="addWhite"
        icon={<img src={whitePlus.src} alt="" width={16} height={16} />}
      >
        안녕
      </Button>
    </div>
  );
}
