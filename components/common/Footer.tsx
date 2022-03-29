import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import VercelSVG from '../icons/VercelSVG'

export default function Footer() {
  function createTypeFormMarkup() {
    return { __html: "<div style=\"position:fixed;top:calc(50% - 250px);right:0;transition:width 300ms ease-out;width:0;\" data-qa=\"side_panel\"> <a class=\"typeform-share button\" href=\"https://form.typeform.com/to/IEwXJ4S3?typeform-medium=embed-snippet\" data-mode=\"side_panel\" style=\"box-sizing:border-box;position:absolute;top:300px;width:200px;height:48px;padding:0 20px;margin:0;cursor:pointer;background:#03193D;border-radius:4px 4px 0px 0px;box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08);display:flex;align-items:center;justify-content:flex-start;transform:rotate(-90deg);transform-origin:bottom left;color:white;text-decoration:none;z-index:9999;\" data-width=\"320\" data-height=\"500\" target=\"_blank\"> <span class=\"icon\" style=\"width:32px;position:relative;text-align:center;transform:rotate(90deg) scale(0.85);left:-8px;\"> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style=\"margin-top:10px;\"> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg> </span> <span style=\"text-decoration:none;font-size:18px;font-family:Helvetica,Arial,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;\"> Share Feedback </span> </a> </div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm_share\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)){ js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })() </script>" };
  }

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
          
          {/*<MenuItem padding={1} marginBottom={1}>Releases</MenuItem>*/}
          <MenuItem
            to="https://github.com/kalramohit/my-covid-time"
            externalLink={true}
            padding={1}
            marginBottom={1}
          >
            Open Source Project
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
        <div dangerouslySetInnerHTML={createTypeFormMarkup()} />
      </Container>
    </Box>
  )
}
