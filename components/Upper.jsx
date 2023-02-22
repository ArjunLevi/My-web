import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Upper = () => {
  return (
    <Link href='/' className='overflow-hidden bg-black'>
            
              <div className='rounded-full bottom cursor-pointer flex justify-center pb-2   ease-in duration-300 mt-auto '>
                <HiOutlineChevronDoubleUp
                  className='text-black dark:text-gray-400 inset-x-0 '
                  size={30}
                />
              </div>
            
          </Link>
  )
}

export default Upper;