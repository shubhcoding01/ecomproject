import React from 'react'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree'
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree'
import { Box } from '@mui/material'

const categoryTwo = {
    men:menLevelTwo,
    women:womenLevelTwo,
    electronics:electronicsLevelTwo,
    furniture:furnitureLevelTwo
}

const categoryThree = {
    men:menLevelThree,
    women:womenLevelThree,
    electronics:electronicsLevelThree,
    furniture:furnitureLevelThree
}

const CategorySheet = () => {
  return (
    <Box sx={
        {zIndex:2}
    } className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
        <div className=' flep text-sm flex-wrap'>
            {
                categoryTwo["men"]?.map((item) => <div>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        <li>

                        </li>
                    </ul>
                </div>)
            }
        </div>

    </Box>
  )
}

export default CategorySheet