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

    const childCategory = (category:any,parentCategoryId:any) => {
        return category.filter((child:any) => child.parentCategoryId == parentCategoryId)
    }

  return (
    <Box sx={
        {zIndex:2}
    } className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
        <div className=' flex gap-10 text-sm flex-wrap'>
            {
                categoryTwo["men"]?.map((item) => <div>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        
                        {childCategory(categoryThree["men"],item.categoryId).map
                        ((item:any) => <div>
                             <li className='hover:text-primary-color cursor-pointer'>
                            {item.name}
                        </li>
                        </div>)}

                       
                    </ul>
                </div>)
            }
        </div>

    </Box>
  )
}

export default CategorySheet