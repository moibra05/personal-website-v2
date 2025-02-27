import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-primaryBlue p-4 pl-0 flex justify-between items-center shadow-lg">
      <Image src="/logo-no-background.png" alt="Logo" width={70} height={70} />
    </nav>
  );
}
