import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return <div>hello</div>;
}
