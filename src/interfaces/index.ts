export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  color: string[];
  category: { name: string; imageURL: string };
}

export interface IFormInput {
  id: string;
  name: "title" | "price" | "description" | "imageURL";
  label: string;
  type: string;
}
