import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const Main_product = () => {
  const schema = z.object({
    quantity: z.number().min(1).max(1000),
  });

  type schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({ resolver: zodResolver(schema) });

  return (
    <div>
      <div className="">
        <div className=""></div>
        <div className="">
          <span>
            Apple iPhone 12 mini - 64 GB - White (Unlocked) (Single SIM)
          </span>
          <span>4.56 9 product ratings</span>
          <span>Price:</span>
          <span>$219.95</span>
          <span>+ US $25.01 shipping</span>
          <span>Est. delivery Thu, Sep 5 - Wed, Sep 25</span>
          <span>returns</span>
          <span>Condition:</span>
          <p>
            Apple iPhone 12 Mini - 64GB - White (Fully Unlocked) Works with All
            Carriers Normal signs of wear Functions Perfectly, NO issues. New
            headphones, cube, and charger included! Wholesale Our company offers
            fantastic wholesale prices. Feel free to send us your information
            regarding condition, models, quantities and we'll give you our best
            price
          </p>
          <form className="">
            <div className="">
              <label htmlFor="quantity">Quantity:</label>
              <input type="text" {...register("quantity")} />
              <span>19 available 174 sold</span>
            </div>
            {errors.quantity && (<span className="text-red-500">{errors.quantity.message}</span>)}
            <button>Buy It Now</button>
          </form>
          <button>Add to cart</button>
          <button>Make offer</button>
          <button>Add to watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Main_product;
