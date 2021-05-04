import { Box, BoxProps, Text } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'



import Link from 'next/link'

export default function Logo({ ...props }: BoxProps) {
  return (
    <Box {...props} >
      <div className="logo-img"></div>
      <div className="log-text" style={{ width: 350 }}>
        <Text paddingLeft="60px" paddingTop="5px" color="black" fontSize="md" fontWeight="bold">
          <Link href="/"><Text fontWeight="bold">My Covid Time</Text></Link>
        </Text>
        <span style={{ paddingLeft: 15, color: "#55099D" }}>Inspiring stories of Covid-19</span>
      </div>
    </Box >
  )
}
