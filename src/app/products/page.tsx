import axios from "axios";
import Image from "next/image";

const url = "https://freetestapi.com/api/v1/books";
const ProductsPage = async () => {
  const { data } = await axios.get(url);

  interface IBooks {
    id: number;
    title: string;
    author: string;
    cover_image: string;
  }
  return (
    <div>
      t
      {data.map(({ id, title, author, cover_image }: IBooks) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <Image src={cover_image} alt="image" width={100} height={100} />
            <h2>{author}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
