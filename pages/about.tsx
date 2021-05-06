import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import ContentBox from '../components/common/ContentBox'
import HeadTags from '../components/common/HeadTags'
import AppCarousel from '../components/common/banner'

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
    </div>
  )
}
