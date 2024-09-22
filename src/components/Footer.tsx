
const Footer = () => {
  return (
    <footer className='px-10 sm:px-20 mx-auto w-full my-20'>
        <div className="flex flex-col lg:flex-row p-10 justify-center md:justify-between items-center  bg-[#f0f6fc] rounded-2xl  shadow-[20px_20px_100px_0_rgba(34,44,59,0.2)] gap-4 lg:gap-0">
          <div className="flex  flex-col gap-2 items-start ">
            <h4 className="font-firma-bold text-lg sm:text-xl md:text-3xl  leading-9 text-left whitespace-nowrap ">
              Get your website today!
            </h4>
            <p className="font-firma text-xs sm:text-sm md:text-base  leading-7 text-[#6d7c94] ">
              Sell flights, hotels, and tours from about the world.
            </p>
          </div>
          <div className="flex flex-col sm:flex gap-3 items-center flex-nowrap">
              <div className="py-2 md:py-4 px-3 md:px-6 bg-[#1e61dc] rounded-lg">
                <p className="text-lg sm:text-xl md:text-2xl font-firma-medium text-[#e8f4ff]">
                  02839082932
                </p>
              </div>
           
              <div className="py-4 px-6  bg-[#fff] rounded-lg ">
                <p className="font-firma-medium text-xs sm:text-sm lg:text-lg  leading-4 text-[#1e61dc]">
                  hello@test.com
                </p>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer