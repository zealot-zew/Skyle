import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='services' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='font-palanquin text-4xl font-bold dark:text-white'>Our <span className='text-coral-red'>Popular</span> Services</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-white-400'>Experience Top Notch services brands love </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 '> 
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/> 
      ))}
      </div>
    </section>
  )
}

export default PopularProducts