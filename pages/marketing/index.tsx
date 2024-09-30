import React from 'react';
import {
  Flex,
  useMantineTheme,
  Box,
  Text,
  Button,
  Stack,
  Image,
  Container,
  Center,
} from '@mantine/core';
import MarketingStyle from './Marketing.styles';
import { Images } from '../../public/index';
import CardCarousel from '@/components/modules/Carousel/CardCarousel/CardCarousel';
import Link from 'next/link';

// Swiper imports
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { ContentMarketingModal } from './contentMarketingModal/ContentMarketingModal';
import Faq from '@/components/modules/Faq/Faq';

const cardData = [
  {
    img: Images.img1,
    name: 'Content Created',
    alt: 'Graphic describing Marketing strategy with examples',
  },
  {
    img: Images.img2,
    name: 'Audiences Reached',
    alt: 'Example and Components of Marketing Strategy',
  },
  {
    img: Images.img3,
    name: 'Leads Generated',
    alt: 'A graphic explaining Marketing execution Roadmap and its importance in Content Marketing.',
  },
  {
    img: Images.img4,
    name: 'ROAS',
    alt: 'A graphic showing Marketing Execution Roadmap designed by Krishna for businesses.',
  },
  {
    img: Images.img5,
    name: 'ROAS',
    alt: 'A graphic Defining Content Plan , “A content plan not only ensures clarity but also ensures that it is in sync with the marketing strategy developed by us. It is simple, structured and efficient.” The graphic also has image of a content plan designed by Krishna',
  },
  {
    img: Images.img6,
    name: 'ROAS',
    alt: 'A graphic containing images of content plan designed by Krishna',
  },
  {
    img: Images.img7,
    name: 'ROAS',
    alt: 'This image contains the snippets of content created by Krishna for social media platforms.',
  },
  {
    img: Images.img8,
    name: 'ROAS',
    alt: 'Multiple images of graphics created by Krishna for Pickit to be shared on Instagram.',
  },
  {
    img: Images.img9,
    name: 'Samples of images/ posters created for Parley by Krishna',
  },
  {
    img: Images.img10,
    name: 'ROAS',
    alt: 'Images created by Krishna for Ihelp. These are examples of content created for content marketing',
  },
  {
    img: Images.img11,
    name: 'ROAS',
    alt: 'Grid view of multiple instagram profiles showcasing capability of Krishna in producing content for businesses from diverse industries.',
  },
];

const carouselData = [
  {
    about:
      "Partnering with Krishna was definitely a game-changer for our business. SEO takes time but it was worth the effort and our search rankings have improved. We're seeing great results from the blog content and website changes made by Krishna team. Kudos to Vivek and his team for clear communication, tangible results and close collaboration.",
    name: 'Bhawesh',
    position: 'Web Designer',
    pic: Images.images_avatar,
    company: 'Batzawaj',
  },
  {
    about:
      "Couldn't be happier with the content Krishna created. It's spot-on with what I had in mind, and it's doing the rounds on all our platforms. It's like they read my mind and turned it into content magic. Special thanks to Rajat and Shweta for adding a creative depth to our content. Definitely recommend their services!",
    name: 'Jitendra',
    position: 'Web Designer',
    pic: Images.images_avatar,
    company: 'Sai Hospital Chains',
  },
  {
    about:
      'Big thanks to Krishna for boosting our online ads. Google, Facebook, Instagram – they’ve got it covered. From creating ad copies, to finalizing and reaching the target audiences, everyhting was handled well by the team. Seeing more clicks, more sales and less product returns. Can’t ask for more.',
    name: 'Bhupesh',
    position: 'Web Designer',
    pic: Images.images_avatar,
    company: 'ATBS',
  },
  {
    about:
      "I used to tackle social media solo, and then I found Krishna. What a game-changer! Their team took over content creation, scheduling, engagement – you name it. Now, I'm not just posting; I'm connecting. The difference is real, and their insightful analysis guides the way. Grateful for the collaboration – these guys know their stuff!",
    name: 'Sachin',
    position: 'Web Designer',
    pic: Images.images_avatar,
    company: 'Pure Mountain Fun',
  },
];

function Marketing() {
  const { classes } = MarketingStyle();
  const theme = useMantineTheme();
  const sm = useMediaQuery('(max-width:760px)');
  const [opened, { open, close }] = useDisclosure(false);

  const footerLinks = [
    { link: 'https://ikana.io/about', name: 'About us' },
    { link: 'https://ikana.io/services', name: 'Services' },
    { link: 'https://ikana.io/projects', name: 'Projects' },
    { link: 'https://ikana.io/info', name: 'Contact us' },
    { link: 'https://ikana.io/projects/calculator', name: 'Estimate your project' },
    { link: 'https://ikanabusinessreview.com/', name: 'Krishna Business Review' },
    { link: 'https://ikana.io/blogs', name: 'Blogs' },
  ];

  const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

  return (
    <Center>
      <Container maw={1600} m={0} p={0} className={classes.container}>
        <Flex className={classes.ikanaLogo}>
          <Image maw={100} mah={100} src="https://gallerypng.com/wp-content/uploads/2024/05/god-krishna-png-images.png" />
        </Flex>
        <Stack align="center" justify="center" className={classes.heroSection}>
          <h1>
            <Text mt={5} className={classes.headingText} ta={'center'} fz={56} fw={700} lh={1.25}>
              The <span className={classes.headingTextBold}>Content Marketing Team</span> that
              Delivers
            </Text>
          </h1>

          <Text my={20} c={theme.colors.dark[5]} ta={'center'} fz={21} fw={500}>
            Share your brand story with the help of our experts who deliver engaging content to the
            right people
          </Text>
          <Button onClick={open} className={classes.button}>
            Free Social Media & Website Audit
          </Button>
          <ContentMarketingModal opened={opened} onClose={close} />
        </Stack>
        <Flex className={classes.mainImageBox}>
          <Image
            src={Images.main_banner}
            alt="Graphic showing how teams from Krishna Business solutions streamline a business’ content marketing across multiple platforms."
          />
        </Flex>
        <Stack align="center" justify="center" className={classes.heroSection}>
          <h2>
            <Text mt={10} className={classes.headingText} ta={'center'} fz={40} fw={700} lh={1.25}>
              <span style={{ color: theme.colors.indigo[8] }}>Content Marketing </span> that{' '}
              <span style={{ fontWeight: 400 }}>( Actually )</span> gets Results
            </Text>
          </h2>
          <Text ta={'center'} c={theme.colors.dark[5]} fz={20} fw={400}>
            What do we do?
          </Text>
          <Text c={theme.colors.blue[4]} ta={'center'} fz={18} fw={700}>
            Create. Market. Analyze. Repeat.
          </Text>

          <Container className={classes.containerSwiper}>
            <Swiper
              modules={[Autoplay, Pagination, Thumbs, Navigation, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={1}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1,
                },
              }}
            >
              {cardData.map((item: any, id: any) => (
                <SwiperSlide key={id}>
                  <Image src={item.img} width={'100%'} height={'100%'} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>

          {/* <Button className={classes.button}>{item.buttonText}</Button> */}
          {/* <Grid mt={20}>
                    {cardData.map((item: any, id: any) => (
                        <Grid.Col key={id} xl={3} lg={3} md={3} sm={4} span={6}>
                            <Stack align={"center"} justify={"center"}>
                                <Image src={item.img} />
                                <Text mt={20} c={theme.colors.dark[5]} fz={17} fw={400}>{item.name}</Text>
                            </Stack>
                        </Grid.Col>
                    ))}
                </Grid> */}
        </Stack>
        <Stack mt={60} mb={30} justify={'center'} align={'center'}>
          <Button onClick={open} className={classes.button}>
            Free Social Media & Website Audit
          </Button>
        </Stack>
        <Flex className={classes.multipleExpertsBox}>
          <Flex direction={'row-reverse'} className={classes.socialMediaSectionSecond}>
            <Image
              maw={400}
              mah={400}
              src={Images.onboarding}
              alt="Illustration of 4 experts of content marketing team talking to each other."
            />
            <Stack align={'center'}>
              <Box className={classes.socialMediaTextBox}>
                <h2>
                  <Text className={classes.headingText} fz={45} fw={700} lh={1.25}>
                    Multiple Experts <span style={{ fontWeight: 400 }}>in one go</span>
                  </Text>
                </h2>
                <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                  Think of Krishna like hiring a whole crew of specialists in one go—graphic designer,
                  copywriter, social media manager, PPC specialist, content editor, video editor and
                  even a data analyst.
                </Text>
                <Text c={theme.colors.dark[5]} fz={17} fw={400}>
                  It's like assembling your Marketing Avengers! 😉
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Flex>
        <Flex className={classes.strategyBox}>
          <Flex className={classes.socialMediaSectionSecond}>
            <Image
              maw={400}
              mah={400}
              src={Images.platforms}
              alt="Illustration of an audience using multiple social media platforms. The icons of social media platforms are coming out of the screen."
            />
            <Box className={classes.socialMediaTextBox}>
              <h2>
                <Text className={classes.headingText} fz={45} fw={700} lh={1.25}>
                  Strategy to Action <span style={{ fontWeight: 400 }}> across Platforms</span>
                </Text>
              </h2>
              <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                Think of us as your brand storytellers. We take your vision, turn it into a
                strategy, and share it where your audience is hanging out—simple as that!{' '}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex className={classes.multipleExpertsBox}>
          <Flex direction={'row-reverse'} className={classes.socialMediaSectionSecond}>
            <Image
              maw={400}
              mah={400}
              src={Images.data}
              alt="An illustration of a data analyst in a content marketing team. The data analyst is interacting with graphs."
            />
            <Box className={classes.socialMediaTextBox}>
              <h2>
                <Text className={classes.headingText} fz={45} fw={700} lh={1.25}>
                  Data-Driven <span style={{ fontWeight: 400 }}> Decision </span>
                </Text>
              </h2>
              <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                By diving into data buckets across various platforms, we analyze, schedule,
                distribute, and review content with precision.{' '}
              </Text>
              <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                Our approach includes analyzing relevant KPIs for each platform, ensuring our
                decisions are based on data insights rather than mere aesthetics or gut feelings.{' '}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex className={classes.strategyBox}>
          <Flex className={classes.socialMediaSectionSecond}>
            <Image
              maw={400}
              mah={400}
              src={Images.pricing}
              alt="An illustration of a jar containing golden coins with $ Sign on it. This illustration is related to the pricing of the content marketing team and the transparent box symbolises transparency in pricing by Krishna."
            />
            <Box className={classes.socialMediaTextBox}>
              <h2>
                <Text className={classes.headingText} fz={45} fw={700} lh={1.25}>
                  Transparent Pricing
                </Text>
              </h2>
              <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                Simple as it gets: with a monthly subscription, your dedicated content marketing
                team with all the experts you need.
              </Text>
              <Text my={25} c={theme.colors.dark[5]} fz={17} fw={400}>
                No hidden fees, just straightforward support for your success!
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Stack className={classes.reviewSection} justify={'center'} align={'center'}>
          <Button onClick={open} className={classes.button}>
            Free Social Media & Website Audit
          </Button>
          <h2>
            <Text className={classes.headingText} fz={35} fw={700} lh={1.25} my={15}>
              It’s the Marketing Team they’ve always Wanted
            </Text>
          </h2>
          <CardCarousel carouselData={carouselData} />
        </Stack>
        <Stack justify={'center'} align={'center'} className={classes.cardSection}>
          <Button onClick={open} className={classes.button}>
            Free Social Media & Website Audit
          </Button>
        </Stack>
        <Stack justify={'center'} align={'center'} className={classes.touchSection}>
          <h2>
            <Text ta={'center'} className={classes.headingText} fz={40} fw={700} lh={1.25}>
              <span className={classes.headingTextBold}>Your Content Marketing Team </span> is
              ready. Are You?
            </Text>
          </h2>
          <Button mt={20} mb={10} className={classes.button}>
            <Link className={classes.link} href={'https://ikana.io/info'}>
              <Text c={theme.white}> Get in touch </Text>
            </Link>
          </Button>
        </Stack>

        <Faq />

        <Stack className={classes.footer}>
          <Flex
            w={'100%'}
            gap={20}
            justify={'space-between'}
            className={classes.footerLinkBox}
            align={'center'}
          >
            <Image maw={100} mah={100} src="https://gallerypng.com/wp-content/uploads/2024/05/god-krishna-png-images.png" />
            <Flex gap={20} wrap={'wrap'} justify={'center'} align={'center'}>
              {footerLinks.map((item, id) => (
                <Link key={id} className={classes.link} href={item.link}>
                  <Text>{item.name}</Text>
                </Link>
              ))}
            </Flex>
            <Flex gap={10}>
              <Link
                className={classes.link}
                href={'https://www.facebook.com/people/Krishna-Business-Solutions/100076063577167/'}
              >
                <Image width={40} height={40} src={Images.menu_facebook_logo} />
              </Link>
              <Link
                className={classes.link}
                href={'https://www.linkedin.com/company/ikana-business-solutions/'}
              >
                <Image width={40} height={40} src={Images.menu_linkedin_logo} />
              </Link>
              <Link
                className={classes.link}
                href={'https://www.instagram.com/ikana_business_solutions/'}
              >
                <Image width={40} height={40} src={Images.menu_instagram_logo} />
              </Link>
            </Flex>
          </Flex>
          <Flex>
            <Text>copyright © Krishna, 2023</Text>
          </Flex>
        </Stack>
      </Container>
    </Center>
  );
}
export default Marketing;
