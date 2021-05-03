import { Box, BoxProps, Text } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'



import Link from 'next/link'

export default function Logo({ ...props }: BoxProps) {
  return (
    <Box {...props} >
<<<<<<< HEAD
      <div className="logo-img"></div>
      <div className="log-text" style={{ width: 350 }}>
=======
      <div ></div>
      <div  style={{ width: 350 }}>
>>>>>>> deb8d8f048b7c8a364632b0a69a58b1df9e45406
        <Text paddingLeft="60px" paddingTop="5px" color="black" fontSize="md" fontWeight="bold">
          <Link href="/">My Covid Time</Link>
        </Text>
        <span style={{ paddingLeft: 10, color: "#55099D" }}>Inspiring stories of most difficult times</span>
      </div>
    </Box >
  )
}
