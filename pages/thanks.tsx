import { ReactNode, useEffect } from 'react'
import { Button, Center, Container, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'

import HeadTags from '../components/common/HeadTags'

import BlankLayout from '../layouts/Blank'
import TwitterSVG from '../components/icons/TwitterSVG'
import FacebookSVG from '../components/icons/FacebookSVG'
import InstagramSVG from '../components/icons/InstagramSVG'
import NextLink from 'next/link'

const Thanks = () => {
  // Triggers a Story goal event on Fathom
  useEffect(() => {
    window?.fathom?.trackGoal('RT0FH11Y', 0)
  }, [])

  return (
    <>
      <HeadTags
        title="Thanks for sharing your story"
        description="Thank you for sharing your story of the impact that COVID-19 has had on you. We'll be reviewing your submission soon."
      />
      <Container pt="32">
        <Center>
          <Heading as="h1" size="lg" pb="8">
            Thank you for your story
          </Heading>
        </Center>
        <VStack spacing="12px" align="left">
          <Text>
            <strong>Thank you for submitting your story.</strong> 
            <br/>
            We will publish your story within 24-48 hours after validating process. You may want to read our <span style={{fontWeight:"bold"}}><Link  href="/faq">FAQ</Link></span> for validation process.
          </Text>
          
          <Text>
            {' '}
            If you have any questions, reach out to{' '}
            <a style={{ fontWeight: 'bold', color: '#55099D' }} href="mailto:info@mycovidtime.in">
              info@mycovidtime.in
            </a>
            .
          </Text>
        </VStack>
        <VStack pt="8" align="center" spacing={8}>
          <Heading as="h2" size="md">
            Spread the word
          </Heading>

          <Flex flexWrap="wrap" justifyContent="center">
            <Link href="https://twitter.com/MyCOVIDTime" isExternal margin="5px">
              <Button color="white" leftIcon={<TwitterSVG />}>
                Share @MyCOVIDTime    </Button>
            </Link>

            <Link href="https://www.facebook.com/MyCOVIDTime" isExternal margin="5px">
              <Button color="white" leftIcon={<FacebookSVG />}>
                Share @MyCovidTimeIN
              </Button>
            </Link>

            <Link href="https://www.instagram.com/MyCOVIDTime/" isExternal margin="5px">
              <Button color="white" leftIcon={<InstagramSVG />}>
                Share @mycovidtime_in
              </Button>
            </Link>
          </Flex>

          <NextLink href="/">
            <Link>
              <Button variant="outline" size="sm" marginBottom="40px">
                Return to Stories
              </Button>
            </Link>
          </NextLink>
        </VStack>
      </Container>
    </>
  )
}

const ThanksLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Thanks.getLayout = ThanksLayout

export default Thanks
