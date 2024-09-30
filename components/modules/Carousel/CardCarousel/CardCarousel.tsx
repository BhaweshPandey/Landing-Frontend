import React, { useRef } from 'react'
import { Flex, Image, Box, useMantineTheme, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { createStyle } from "./CardCarousel.style"
import { useStores } from '@/models';
import Autoplay from 'embla-carousel-autoplay';
import { IconPlayerPauseFilled } from '@tabler/icons-react';

type CarouselDataType = {
    name: string,
    about: string,
    position: string,
    pic: string,
    company:string
}

function CardCarousel(props: { carouselData?: any }) {
    const theme = useMantineTheme();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const { i18nStore } = useStores();
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <>
            <Carousel
                maw={"100%"}
                mx="auto"
                withIndicators
                slideSize="33.333333%"
                breakpoints={[
                    { maxWidth: 'xl', slideSize: '33.333333%' },
                    { maxWidth: 'lg', slideSize: '50%' },
                    { maxWidth: 'md', slideSize: '100%' },
                ]}
                slideGap="md"
                loop
                align="start"
                classNames={{
                    indicator: classes.indicator,
                    control: classes.control
                }}
                height={350}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {props.carouselData.map((item: CarouselDataType, id: number) => (
                    <Carousel.Slide key={id}>
                        <Box className={classes.carouselCard}>
                            {/* <IconPlayerPauseFilled /> */}
                            <Text c={theme.colors.dark[5]} fz={15} fw={400}>{item.about}</Text>
                            <Flex mb={100} gap={10} align={"center"}>
                                {/* <Image width={50} height={50} src={item.pic} /> */}
                                <Flex gap={5}>
                                    <Text fz={16} fw={600}>Company Name :</Text>
                                    <Text fz={16} fw={500} c={theme.colors.dark[4]}>{item.company}</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    )
}

export default CardCarousel