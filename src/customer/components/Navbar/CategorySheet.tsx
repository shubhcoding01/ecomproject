import React from 'react'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'

const categoryTwo = {
    men:menLevelTwo,
    women:womenLevelTwo,
    electronics:electronicsLevelTwo,
    furniture:furnitureLevelTwo
}

const categoryThree = {
    men:menLevelThree,
    women:womenLevelTwo,
    electronics:electronicsLevelTwo,
    furniture:furnitureLevelTwo
}

const CategorySheet = () => {
  return (
    <div>CategorySheet</div>
  )
}

export default CategorySheet