import Product from "@/components/UI/Product";

export const getData = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache", // getStaticProps
    next: {
      revalidate: 5, // ISR
    },
  });
  return await res.json();
};

const Home = async () => {
  const data = await getData();

  return (
    <div className="p-5">
      <h1 className="text-4xl font-medium">Our Products</h1>
      <div className="mt-5 grid grid-cols-3 gap-5 w-full">
        {data?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
