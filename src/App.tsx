import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import Modal from "./components/Ui/Modal";
import { FormInputList, ProductList } from "./data";
import { ChangeEvent, useState } from "react";
import { IProduct } from "./interfaces";

const App = () => {
  // STATE
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    color: [],
    category: { name: "", imageURL: "" },
  });

  const [isOpen, setIsOpen] = useState(false);

  // HANDLER
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // render productList
  const RenderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  // render FromInputList
  const RenderFromInputList = FormInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mt-1 text-sm font-medium leading-6 text-gray-900"
      >
        {input.label}
      </label>

      <Input
        name={input.name}
        id={input.id}
        type={input.type}
        value={""}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <div className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {RenderProductList}
      </div>
      <Modal isOpen={isOpen} CloseModal={closeModal} title="Add New Product">
        <form className="space-y-3">
          {RenderFromInputList}
          <div className="flex items-center space-x-3 ">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-400">cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
