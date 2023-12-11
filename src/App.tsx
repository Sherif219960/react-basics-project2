import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Modal from "./components/Ui/Modal";
import { ProductList } from "./data";
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

  return (
    <div className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {RenderProductList}
      </div>
      <Modal isOpen={isOpen} CloseModal={closeModal} title="Add New Product">
        <div className="flex items-center space-x-2">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-400">cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
