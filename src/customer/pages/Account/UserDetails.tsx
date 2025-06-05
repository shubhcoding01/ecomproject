import React from 'react'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        {/* {Personal Details} */}

        <div className='w-full lg:w-[30%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-xl font-bold'>Personal Details</h1>
            </div>
            <div className='space-y-3'>
                <p className='text-gray-700'>Name: John Doe</p>
                <p className='text-gray-700'>Email:</p>
                <p className='text-gray-700'>Phone: +1234567890</p>
                <p className='text-gray-700'>Address: 123 Main St, City, Country</p>
            </div>
        </div>

        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                
                

            </div>

        </div>

    </div>
  )
}

export default UserDetails