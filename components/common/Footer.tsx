import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import VercelSVG from '../icons/VercelSVG'

export default function Footer() {
  return (
    <Box
      as="footer"
      backgroundColor="#202020"
      color="#FFF"
      paddingTop={10}
      paddingBottom={8}
      textAlign="left"
    >
      <Container centerContent maxW="container.sm">
        <SimpleGrid columns={[2, 3]} width="100%" textAlign={['left', 'center']}>
          <MenuItem padding={1} marginBottom={1}>
            Home
          </MenuItem>
          <MenuItem to="/new" padding={1} marginBottom={1}>
            Share Your Story
          </MenuItem>
          <MenuItem to="/about" padding={1} marginBottom={1}>
            About
          </MenuItem>
          <MenuItem to="/faq" padding={1} marginBottom={1}>
            FAQ
          </MenuItem>
          <MenuItem
            to="https://kvmhxg5ojy6.typeform.com/to/gUsoYkft"
            externalLink={true}
            padding={1}
            marginBottom={1}
          >
            Media Form
          </MenuItem>
          {/*<MenuItem padding={1} marginBottom={1}>Releases</MenuItem>*/}
          <MenuItem
            to="https://github.com/kalramohit/my-covid-time"
            externalLink={true}
            padding={1}
            marginBottom={1}
          >
            Open Source Project
          </MenuItem>
          <MenuItem
            to="https://app.usefathom.com/share/RVQXQDGO/mycovidtime.in"
            externalLink={true}
            padding={1}
            marginBottom={1}
          >
            Analytics
          </MenuItem>
          <MenuItem to="mailto:info@mycovidtime.in" padding={1} marginBottom={1}>
            Email Us
          </MenuItem>
        </SimpleGrid>
        <Text as="strong" paddingTop={4} mb={4}>
          Dedicated to Covid Warriors{' '}
          <span role="img" aria-label="heart" style={{ filter: 'brightness(0) invert(1)' }}>
            ❤️
          </span>
        </Text>
        <MenuItem
          to="https://vercel.com?utm_source=my-covid-story&utm_campaign=oss"
          externalLink={true}
        >

        </MenuItem>
      </Container>
    </Box>
  )
}
