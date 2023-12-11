import { IProduct } from "../interfaces";
import { textSlicer } from "../utils";
import Image from "./Image";
import Button from "./Ui/Button";
interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { title, description, price, imageURL } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col ">
      <Image
        ImageUrl={imageURL}
        Alt={title}
        ClassName="rounded-md mb-2 h-52 w-full "
      />
      <h2>{title}</h2>
      <p>{textSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 cursor-pointer bg-violet-800 rounded-full" />
        <span className="w-5 h-5 cursor-pointer bg-red-600 rounded-full" />
        <span className="w-5 h-5 cursor-pointer bg-green-800 rounded-full" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          ClassName="w-10 h-10 rounded-full"
          ImageUrl={imageURL}
          Alt={"DODGE CHALLENGER RT COUPE 2022"}
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-800 ">edit</Button>
        <Button className="bg-red-700 hover:bg-red-700 ">destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
