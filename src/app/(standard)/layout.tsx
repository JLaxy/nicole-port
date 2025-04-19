import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <main>{children}</main>
    </>
  );
}
