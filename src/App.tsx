import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Modal from "./components/Ui/Modal";
import { FormInputList, ProductList } from "./data";
import { Fragment, useState } from "react";

const App = () => {
  // STATE
  const [isOpen, setIsOpen] = useState(false);

  // HANDLER
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // render productList
  const RenderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  // render FromInputList
  const RenderFromInputList = FormInputList.map((input) => (
    <div>
      <label
        htmlFor={input.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {input.name}
      </label>
      <input
        type={input.type}
        name={input.name}
        id={input.id}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
        placeholder={input.name}
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
        {RenderFromInputList}
        <div className="flex items-center space-x-2 my-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-400">cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
