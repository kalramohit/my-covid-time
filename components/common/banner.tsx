import { Carousel } from 'react-responsive-carousel'
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import ContentBox from '../common/ContentBox'
import { helpers } from 'faker'
const data = [
    { "url": "/img/healthcare1.jpg", "title": "Because of you we didn’t give up" }
    , { "url": "/img/healthcare.jpg", "title": "Bowing in gratitude" }
    , { "url": "/img/communityhelp.jpg", "title": "Service before self is service to God" }
    , { "url": "/img/faith.jpg", "title": "Where there is faith miracles happen " }

]
const AppCarousel = () => (
    <div  >
        <Carousel
            dynamicHeight={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            transitionTime={1000}
            interval={10000}
        >
            {data.map(storytype => (
                <div key={storytype.url}  >
                    <Box height="400px"
                        style={{
                            backgroundImage: `url(${storytype.url})`,
                            backgroundSize: "cover"
                        }}
                        bgPosition="center 40%"
                        color="white"
                    >
                        <Box height="100%">
                            <ContentBox height="100%" pt={[8, null, 14]} pb={[10, null, 32]}>
                                <br />
                                <div> <Heading height="100%" bg="rgba(0, 0, 0, 0.5)"  paddingBottom=".5em" paddingTop=".5em" fontSize={['2.2em']} fontWeight={100}>{storytype.title}</Heading></div>

                            </ContentBox>
                        </Box>
                    </Box>

                </div>
            ))}
        </Carousel>
    </div >
)
export default AppCarousel
