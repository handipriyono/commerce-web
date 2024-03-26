import Footer from "../../commons/components/Footer";
import Header from "../../commons/components/Header";
import useProductQuery from "../homepage/hooks/useProductQuery";
import Display from "./components/Display";

export default function HomePage() {
  const { dataProduct, isLoading } = useProductQuery();

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        <Header />
      </div>

      <main>
        <section className="px-2 sm:px-20 py-4 sm:py-14">
          <Display data={dataProduct} isLoading={isLoading} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
