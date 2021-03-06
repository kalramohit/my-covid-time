import { Box, BoxProps, Flex, Text } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'



import Link from 'next/link'

export default function Logo({ ...props }: BoxProps) {
  const logourl = 'https://images.prismic.io/sample-poc2/97106ba2-1bee-49ff-8215-de2352d5d69e_Logo_Transparent.png?auto=compress,format'
  return (
    <Box {...props} >
      <Flex>
        <Box height="60px" width="70px" style={{
          backgroundImage: `url(${logourl})`,
          backgroundSize: "cover"
        }} >
        </Box>
        <div className="log-text" style={{ width: 350 }}>
          <Text paddingLeft="10px" paddingTop="5px" color="black" fontSize="x-large" fontWeight="bold">
            <Link href="/"><Text fontWeight="bold">My Covid Time</Text></Link>
          </Text>
          <span style={{ fontSize: "ms", paddingLeft: 15, color: "#044279" }}>Inspiring stories of Covid-19</span>
        </div>
      </Flex>
    </Box >
  )
}
