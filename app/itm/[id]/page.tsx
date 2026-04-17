import { About_this_product } from "@/components/Product/about_this_product/about_this_product";
import Listings_for_product from "@/components/Product/listings_for_product/listings_for_product";
import Ratings_and_reviews from "@/components/Product/ratings_and_reviews/ratings_and_reviews";
export default async function page() {
  return (
    <div>
      <About_this_product />
      <Listings_for_product />
      <Ratings_and_reviews />
    </div>
  );
}
