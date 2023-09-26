
import Link from 'next/link';
import Image from 'next/image';
import { getDiscountedPricePercentage } from '@/utils/helper';
const ProductCard = ({data: {attributes: p, id}}) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className=" transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer  "
    >
      <div className="relative overflow-hidden">
        <Image
          width={500}
          height={500}
          loading="lazy"
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
        <div className="absolute h-full w-full bg-black/20 flex items-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300  ">
          <button className="mx-auto mt-[20rem] w-[10rem] py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="p-4 text-black/[0.9] ">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>
          {p.original_price && (
            <>
              <p className="text-base font-medium line-through ">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
