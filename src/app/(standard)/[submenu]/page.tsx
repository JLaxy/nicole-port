export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case "home":
      return <h1>Home</h1>;
    case "about":
      return <h1>About</h1>;
    case "contact":
      return <h1>Contact</h1>;

    default:
      return <h1>Page not found</h1>;
  }
}
