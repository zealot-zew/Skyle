import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex-1 flex flex-col w-full max-sm:w-full transform transition duration-200 hover:scale-105">
        <img
            src = {imgURL} alt={name} className="w-[220px] h-[220px]"
        />
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white">{name}</h3>
        <p className="font-semibold font-montserrat text-coral-red text-2xl">{price}</p>
    </div>
  )
}

export default PopularProductCard