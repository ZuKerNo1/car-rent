import { Ads, CardCar, CustomButton } from "@/components";
import Image from "next/image";

const ListCar = [
  {
    id: 1,
    name: "Koenigsegg",
    brand: "Sport",
    isLiked: true,
    thumbnail: "car_1.png",
    gasoline: 90,
    tranmission: "Manual",
    people: 2,
    price: 99,
  },
  {
    id: 2,
    name: "Nissan GT - R",
    brand: "Sport",
    isLiked: false,
    thumbnail: "car_2.png",
    gasoline: 80,
    tranmission: "Manual",
    people: 2,
    price: 80,
  },
  {
    id: 3,
    name: "Rolls - Royce",
    brand: "Sport",
    isLiked: false,
    thumbnail: "car_3.png",
    gasoline: 90,
    tranmission: "Manual",
    people: 2,
    price: 96,
  },
  {
    id: 4,
    name: "Nissan GT - R",
    brand: "Sport",
    isLiked: true,
    thumbnail: "car_2.png",
    gasoline: 70,
    tranmission: "Manual",
    people: 2,
    price: 80.5,
  },
  {
    id: 5,
    name: "MG ZX Exclusice",
    brand: "SUV",
    isLiked: true,
    thumbnail: "car_1.png",
    gasoline: 90,
    tranmission: "Manual",
    people: 2,
    price: 99,
  },
  {
    id: 6,
    name: "New MG ZS",
    brand: "Hatchback",
    isLiked: false,
    thumbnail: "car_2.png",
    gasoline: 80,
    tranmission: "Manual",
    people: 2,
    price: 80,
  },
  {
    id: 7,
    name: "CR  - V",
    brand: "SUV",
    isLiked: false,
    thumbnail: "car_3.png",
    gasoline: 90,
    tranmission: "Manual",
    people: 2,
    price: 96,
  },
  {
    id: 8,
    name: "New MG ZS",
    brand: "Hatchback",
    isLiked: true,
    thumbnail: "car_2.png",
    gasoline: 70,
    tranmission: "Manual",
    people: 2,
    price: 80.5,
  },
];

const ListAds = [
  {
    id: 1,
    title: "The Best Platform for Car Rental",
    description:
      "Ease of doing a car rental safely and reliably. Of course at a low price.",
    thumbnail: "ads_car1.png",
  },
  {
    id: 2,
    title: "Easy way to rent a car at a low price",
    description:
      "Providing cheap car rental services and safe and comfortable facilities.",
    thumbnail: "ads_car2.png",
  },
];

const popularCar = ListCar.slice(0, 4);

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F6F7F9]">
      <div className="max-w-[1312px] mx-auto my-10 mt-[124px] ">
        {/* Banner ADS */}
        <div className="flex justify-between my-8">
          {ListAds.slice(0, 4).map((item) => (
            <Ads key={item.id} item={item} />
          ))}
        </div>

        {/* Pick up - Drop off */}

        {/* List Car Popular*/}
        <div className="w-full mb-8">
          <div className="flex justify-between text-base font-semibold">
            <p className=" text-[var(--secondary-400)] mb-5 px-5">
              Popular Car
            </p>

            <p className="text-[var(--primary-500)] px-5 hover:underline underline-offset-2 cursor-pointer">
              View all
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularCar.map((item) => (
              <CardCar key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* List Car Recomendation*/}
        <div className="w-full mb-8">
          <p className="text-base font-semibold text-[var(--secondary-400)] mb-5 px-5">
            Recomendation Car
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ListCar.map((item) => (
              <CardCar key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Button show more */}
        <div className="w-full flex items-center justify-center">
          <div className="inline-flex mx-auto my-16">
            <CustomButton title="Show more car" containerStyles="w-[156px]" />
          </div>
          <p className="inline-flex font-medium text-sm text-[var(--secondary-400)] justify-self-end">
            120 Car
          </p>
        </div>
      </div>
    </main>
  );
}
