import Product1 from "../../../../public/assets/icons/product_1.svg";
import Product2 from "../../../../public/assets/icons/product_2.svg";
import Product3 from "../../../../public/assets/icons/product_3.svg";
import Product4 from "../../../../public/assets/icons/product_4.svg";

const AppBar = () => {
  return (
    <section className="app-bar hidden w-[48px] flex-col items-center rounded-[100px] p-2 lg:flex ">
      <button className="relative flex h-10 w-10 items-center justify-center  grayscale hover:grayscale-0">
        <Product1 />
      </button>
      <button className="relative flex h-10 w-10 items-center justify-center grayscale hover:grayscale-0">
        <Product2 />
      </button>
      <button className="relative flex h-10 w-10 items-center justify-center grayscale hover:grayscale-0">
        <Product3 />
      </button>
      <button className="relative flex h-10 w-10 items-center justify-center grayscale hover:grayscale-0">
        <Product4 />
      </button>
    </section>
  );
};

export default AppBar;
