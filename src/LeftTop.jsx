import { VStack } from '@chakra-ui/react'
import React from 'react'
import Comb from './components/Comb'
import Left from './components/Left'

export default function LeftTop() {
  return (
    <div>
        <VStack>
            <Comb/>
            <Left/>
        </VStack>
    </div>
  )
}
