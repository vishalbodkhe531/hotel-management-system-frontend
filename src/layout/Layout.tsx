import Hero from "../components/Hero";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col min-h-[80vh]">
        <Hero />
        <div className="container mx-auto py-10 flex-1">{children}</div>
      </div>
    </>
  );
}

export default Layout;
