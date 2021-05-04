import { Box, BoxProps, Flex, Text } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'



import Link from 'next/link'

export default function Logo({ ...props }: BoxProps) {
  const logourl = 'https://images.prismic.io/sample-poc2/aac5d3ef-a947-44e6-8277-7a5dc8b3767a_logonew.jpg?auto=compress,format&rect=0,9,58,58&w=140&h=140'
  return (
    <Box {...props} >
      <Flex>
        <Box height="60px" width="60px" style={{
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
