import { Box, BoxProps, Text } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'



import Link from 'next/link'

export default function Logo({ ...props }: BoxProps) {
  return (
    <Box {...props} >
      <div ></div>
      <div  style={{ width: 350 }}>
        <Text paddingLeft="60px" paddingTop="5px" color="black" fontSize="md" fontWeight="bold">
          <Link href="/">My Covid Time</Link>
        </Text>
        <span style={{ paddingLeft: 10, color: "#55099D" }}>Inspiring stories of most difficult times</span>
      </div>
    </Box >
  )
}
