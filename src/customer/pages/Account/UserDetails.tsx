import React from 'react'
import ProfileFieldCard from '../../../component/ProfileFieldCard'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        {/* {Personal Details} */}

        {/* <div className='w-full lg:w-[30%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-xl font-bold'>Personal Details</h1>
            </div>
            <div className='space-y-3'>
                <p className='text-gray-700'>Name: John Doe</p>
                <p className='text-gray-700'>Email:</p>
                <p className='text-gray-700'>Phone: +1234567890</p>
                <p className='text-gray-700'>Address: 123 Main St, City, Country</p>
            </div>
        </div> */}

        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-700'>Personal Details</h1>
            </div>
            <div>
                <ProfileFieldCard key="Name" value={"John Doe"} />
                <ProfileFieldCard key="Email" value="example1@mail.in" />
                <ProfileFieldCard key="Phone" value="+91 1234567890" />
                <ProfileFieldCard key="Address" value="123 Main St, City, Country" />
                <ProfileFieldCard key="Date of Birth" value="01 Jan 1990" />

            </div>

        </div>

    </div>
  )
}

export default UserDetails