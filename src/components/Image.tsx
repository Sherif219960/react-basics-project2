interface IProps {
  ImageUrl: string;
  Alt: string;
  ClassName: string;
}

const Image = ({ ImageUrl, Alt, ClassName }: IProps) => {
  return (
    <>
      <img src={ImageUrl} alt={Alt} className={ClassName} />
    </>
  );
};

export default Image;
