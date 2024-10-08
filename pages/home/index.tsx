import { useEffect, useState } from 'react';
import { Box, Stack, Grid, Image, Flex, Center, Container, Divider, Loader } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import HeroCarousal from '@/components/modules/Carousel/heroCarousal/HeroCarousal';
import BrandLogoCarousal from '@/components/modules/Carousel/brandLogoCarousal/BrandLogoCarousal';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import Header from '@/components/modules/Header/Header';
import  createStyle  from './Home.style';
import Footer from '@/components/modules/Footer/Footer';
import { useRouter } from 'next/router';
import { Carousel } from '@mantine/carousel';
import { ProductPaginatedType } from '@/models/modules/product/schemas';
import ErrorMessage from '@/components/elements/ErrorMessage/ErrorMessage';
import { CategoryListType, CategoryPaginatedType } from '@/models/modules/category/schemas';

const productCardData = [
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Bhawesh',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Hp',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'اسم المنتج لوريم إيبسوم دولور سيت أميت',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
];

const carouselData = [
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.page_logo,
  },
];

const carouselMultipleIamgeData = [
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
];

const galleryItemData = [
  {
    Image: Images.gallery_item,
    name: 'Apparel Category',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
];

const productSectionsCard = [
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
];

const productName = [
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
];

export default function Home() {

  const { i18nStore, productStore, categoryStore } = useStores();

  const [showAll, setShowAll] = useState(false);
  const [productListLoader, setProductListLoader] = useState(true);
  const [error, setError] = useState('');
  
  const useStyles = createStyle();
  const { classes } = useStyles();
  const router = useRouter();

  const CategoriesPage = (item: any) => {
    // if (item == 'Apparel Category') router.push(`/categories?seachCategory=${item}`);
    router.push(`/categories?seach-category=${item}`);
  };

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const CarouselBoxMobile = (props: { data: CategoryPaginatedType | null | undefined }) => (
    <Carousel
      dir={'ltr'}
      height={100}
      slideSize="13%"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'lg', slideSize: '14%', slideGap: '8px' },
        { maxWidth: 'md', slideSize: '17%', slideGap: '6px' },
        { maxWidth: 'sm', slideSize: '20%', slideGap: '4px' },
        { maxWidth: 'xs', slideSize: '50%', slideGap: '4px' },
      ]}
      classNames={{
        control: classes.control,
      }}
    >
      {props.data?.results.map((item: CategoryListType, id: number) => (
        <Carousel.Slide key={id} classNames={classes.crouselSlide}>
          <Box className={classes.slideBox}>
            <Image onClick={() => CategoriesPage(item.name)} src={item.image} width={'66px'} />
            <BaseText onClick={() => CategoriesPage(item.name)}>{item.name}</BaseText>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  useEffect(() => {
    productStore.getProductListPaginated().then((res) => {
      if (res.ok) {
        if (productStore.productDetails != null) {
          setProductListLoader(false);
        }
      } else if (res.code == 400) {
        if (res.error) {
          setError(res.error);
          setProductListLoader(false);
          setTimeout(() => {
            setError('');
          }, 5000);
        }
      }
    });
    categoryStore.getCategoryList().then((res) => {
      if (res.ok) {
        if (categoryStore.categoryListData != null) {
        }
      } else if (res.code == 400) {
        if (res.error) {
          setError(res.error);
          setProductListLoader(false);
          setTimeout(() => {
            setError('');
          }, 5000);
        }
      }
    });
  }, []); 

  return (
    <Container className={classes.container}>
      <Header />
      <Flex className={classes.homePage}>
        <HeroCarousal carouselData={carouselData} />
        <Grid className={classes.galleryItemBox}>
          {categoryStore.categoryListData?.results.map((item, id) => (
            <Grid.Col key={id} xl={2} lg={2} md={3} sm={4} xs={6}>
              <Stack align="center">
                <Image
                  onClick={() => CategoriesPage(item.name)}
                  className="cursor"
                  width={66}
                  height={66}
                  src={item.image}
                />
                <BaseText
                  onClick={() => CategoriesPage(item.name)}
                  className="cursor"
                  style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                >
                  {item.name}
                </BaseText>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
        <Box className={classes.galleryItemBoxForMobile}>
          {/* <CarouselBoxMobile data={categoryList} /> */}
        </Box>
        <BrandLogoCarousal carouselMultipleIamgeData={carouselMultipleIamgeData} />
        
        {productStore.productPaginated?.results ? (
          <Box>
            <Center>
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                txtkey={'homePage.productSectionsName'}
              />
            </Center>
            <Grid mt={20}>
              {productListLoader ? (
                <Center h={'100vh'}>
                  <Loader size="xl" />
                </Center>
              ) : productStore.productPaginated?.results.length > 0 ? (
                productStore.productPaginated?.results.map((item, id) => (
                  <Grid.Col
                    style={{ display: showAll || id < 10 ? 'block' : 'none' }}
                    key={id}
                    xl={2.4}
                    lg={3}
                    md={3}
                    sm={4}
                    span={6}
                  >
                    <Stack align="center">
                      <ProductCard item={item} />
                    </Stack>
                  </Grid.Col>
                ))
              ) : (
                <ErrorMessage message={'homePage.errors.productNotAdded'} />
              )}
            </Grid>
            <Center>
              {!showAll ? (
                <BaseButton
                  w={140}
                  mt={20}
                  style_variant="filled"
                  color_variant="blue"
                  onClick={handleSeeMoreClick}
                >
                  <BaseText
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                    txtkey={'homePage.seeMore'}
                  />
                </BaseButton>
              ) : (
                <BaseButton
                  w={140}
                  mt={20}
                  style_variant="filled"
                  color_variant="blue"
                  onClick={handleSeeMoreClick}
                >
                  <BaseText
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                    txtkey={'homePage.seeLess'}
                  />
                </BaseButton>
              )}
            </Center>
          </Box>
        ) : null}
        {productName.map((value: any, index: any) => (
          <Box key={index}>
            <Flex>
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                txtkey={value.productName}
              />
            </Flex>
            <Grid mt={20}>
              {value.ProductDetails.map((item: any, id: any) => (
                <Grid.Col key={id} xl={2} lg={3} md={3} sm={4} span={6}>
                  <Stack align="center">
                    <ProductCard item={item} />
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
            <Center>
              <BaseButton w={140} mt={20} style_variant="filled" color_variant="blue">
                <BaseText
                  style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  txtkey={'homePage.seeMore'}
                />
              </BaseButton>
            </Center>
          </Box>
        ))}
        <Divider my="xs" />
      </Flex>
      <Footer />
    </Container>
  );
}
