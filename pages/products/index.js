const ProductList = ({ products }) => {
  return (
    <>
      <h1>Product list</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log("Generating / regenerating products");
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
