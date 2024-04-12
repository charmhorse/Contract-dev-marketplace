import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChildContainerProps } from "@/types/types";

export default function Layout({ children }: ChildContainerProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
