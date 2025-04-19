import { About, Contact, Home } from "@/components/pages/PageModules";

export default async function Page({
  params,
}: {
  params: { submenu: string };
}) {
  const { submenu } = await params;

  switch (submenu) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;

    default:
      return <h1>Page not found</h1>;
  }
}
