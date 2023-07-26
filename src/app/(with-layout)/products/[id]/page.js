/* eslint-disable @next/next/no-img-element */
export const getData = async (id) => {
  const res = await fetch(`http://localhost:5000/watches/${id}`, {
    cache: "no-store", // server side rendering (getServerSideProps)
  });
  return await res.json();
};

const ProductDetails = async ({ params }) => {
  const product = await getData(params.id);

  return (
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <div className="w-[50%]">
        <img src={product?.image} alt="" />
      </div>
      <div className="w-[50%] space-y-3">
        <h1 className="text-3xl font-semibold">{product?.name}</h1>
        <p className="text-xl">Rating: {product?.rating}</p>
        <ul className="space-y-1 text-lg">
          {product?.features?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <button className="btn btn-neutral">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
