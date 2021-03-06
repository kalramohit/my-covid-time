import ContentBox from '../components/common/ContentBox'
import HeadTags from '../components/common/HeadTags'
import AppCarousel from '../components/common/banner'
import FloatingRibbon, { Button } from '../components/common/FloatingRibbon'
import NextLink from 'next/link'
import {Stack, Box, Center, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <div>
      <HeadTags
        title="About The Project and Team"
        description="Learn about why MyCovidTime.in exists,what purpose it surves t"
      />
      <ContentBox>
        <Heading as="h1" size="2xl" pb={6}>
          About Us
        </Heading>
        <Text>
              <strong>My Covid Time</strong> is a non-profit & open source project with focus on building public platform to allow common citizens to share stories of difficut time. It is an attempt to express regard and admiration for their efforts, as well as to encourage fellow citizens to keep hope and contribute to society in every way possible.
            <br />
            </Text>

        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Why We Created MyCovidTime.In
          </Heading>
          <Stack spacing={4}>
            <Text>
            The year 2020 will no doubt be etched in the memory of all human beings around the world for many years to come. When on one hand millions succumbed to the untamed virus , positive outcomes as collaboration, community service and empathy for those in need sprung up in its wake.
            The real time stories will set up an account for posterity to read and reflect upon that humanity is one religion  above all man made prejudices and that positive spirit and compassion are unfailingly powerful weapons to combat emotional turmoil.
          
            </Text>
            
          </Stack>
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Who We Are
          </Heading>
          <Text>
            We are group of common citizens  who are ambitious to voice out singular encounters when humankind ascended with collective endeavours to battle the pandemic.
            We can be contact at info@mycovidtime.in  
          </Text>
          
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Our Mission
          </Heading>
          <Text>
          Our mission is to enhance genuine accounts of the individuals who saw the pandemic in its face and braved it courageously. Their accounts will fill the need of an enduring source of motivation for readers from far and wide.
          </Text>
        </Box>

      </ContentBox>
      <FloatingRibbon>
        <NextLink href="/new" passHref>
          <Link >
            <Text borderRadius="8px"
              width="100%"
              backgroundColor="#03193D" textAlign="center" color="#fff" paddingLeft="5px" paddingRight="5px" TextAlign="center"><span><b> Post Story</b></span></Text>
          </Link>
        </NextLink>
        < Text TextAlign="center" paddingLeft="5px"> Tell the world your experience during the pendemic or may share with the world how it has changed your life</Text>
      </FloatingRibbon>

    </div>
    
  )
}
