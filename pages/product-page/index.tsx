import I18nFlex from '@/components/elements/I18nFlex/I18nFlex';
import { useStores } from '@/models';
import { Images } from '@/public';
import { typography } from '@/themes/Mantine/typography';
import { Anchor, Box, Breadcrumbs, Container, Flex, Image, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import ProductImageCarousel from './PoductImageCarousel/ProductImageCarousel';
import useStyles from './ProductPage.style';
import ProductCard from './ProductCard/ProductCard';
import ProductProfile from './ProductProfile/ProductProfile';
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer/Footer';
import { CarouselDataType, ProductDetailType } from '@/models/modules/product/schemas';

const ItemImages = [
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
];

const BreadcrumbsLabels = [
  { title: 'Apparels', href: '#' },
  { title: 'Tops ', href: '#' },
  { title: 'T-shirt & tanks', href: '#' },
  { title: 'Basic round neck Tshirt', href: '#' },
];

function BreadcrumbPath() {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const items = BreadcrumbsLabels.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      color={theme.colors.dark[9]}
      style={typography.label[i18nStore.getCurrentLanguage()].l5}
    >
      {item.title}
    </Anchor>
  ));
  return (
    <Breadcrumbs
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: i18nStore.isRTL ? 'row-reverse' : 'row',
      }}
      separator={
        <Image
          src={Images.right_arrow_icon}
          sx={{
            rotate: i18nStore.isRTL ? '180deg' : '0deg',
          }}
          alt="arrow_icon"
          width={'6px'}
        />
      }
      mt="63px"
      color={theme.colors.dark[8]}
      style={typography.label[i18nStore.getCurrentLanguage()].l5}
    >
      {items}
    </Breadcrumbs>
  );
}

function ProductPage() {
  const productMedia = {
    mediaType: '',
    mediaUrl: '',
  };
  const { productStore } = useStores();
  const { classes } = useStyles();
  const [selectItemImage, setSelectedItemImage] = useState(productMedia);
  const [productDetailsData, setProductDetailsData] = useState<ProductDetailType>();

  let url = window.location;
  let uid = new URLSearchParams(url.search).get('id');

  useEffect(() => {
    productStore.getProductDetails(uid).then((res) => {
      if (res.ok) {
        if (productStore.productDetails != null) {
          setProductDetailsData(productStore.productDetails);
          if (productStore.productDetails?.product_stock && productStore.productDetails?.product_stock[0]?.product_media) {
            let productOptionDetails =
              productStore.productDetails?.product_stock[0]?.product_media;
            let mediaUrl : string | null = '';
            switch(productOptionDetails[0].media_type){
              case CarouselDataType.IMAGE:
                mediaUrl = productOptionDetails[0].image;
                break;
              case CarouselDataType.VIDEO:
                mediaUrl = productOptionDetails[0].video;
                break;
              case CarouselDataType.URL:
                mediaUrl = productOptionDetails[0].video_url;
                break;
            }
            let data: any = {
              mediaType: productOptionDetails[0].media_type,
              mediaUrl: mediaUrl,
            };
            console.log("data-=-=-=-=-=-=", data)
            setSelectedItemImage(data)
          }
        }
      }
    });
  }, []);

  // console.log("selectItemImage",selectItemImage)

  return (
    <>
      <Header />
      <Container maw="1350px">
        <Box className={classes.boxWrapper}>
          <BreadcrumbPath />
          <I18nFlex className={classes.flexWrapper2} justify={'center'}>
            <Box>
              <Box>
                {selectItemImage.mediaType == CarouselDataType.IMAGE ? (
                  <Image
                    className={classes.productImageStyle}
                    src={selectItemImage.mediaUrl}
                    alt="product Image"
                  />
                ) : (
                  // (selectItemImage.mediaType == 'Video' || item.media_type == 'Url') && (
                  <video
                    width="320"
                    height="240"
                    className={classes.productImageStyle}
                    controls
                    // poster="https://media.istockphoto.com/id/157604241/photo/brown-rabbit-standing-up.jpg?s=1024x1024&w=is&k=20&c=XPXBabvCKczV0V2VcGqo7-pY7Zh4fYOE3YukB0lVpVY="
                  >
                    <source src={selectItemImage.mediaUrl} type="video/mp4" />
                  </video>
                )}
                <Flex className={classes.flexWrapper1}>
                  <ProductImageCarousel
                    data={productDetailsData}
                    images={ItemImages}
                    setSelectedItemImage={setSelectedItemImage}
                  />
                </Flex>
              </Box>
              <ProductCard />
              {/* ye wala nhi krna hai abhi */}
            </Box>
            <ProductProfile data={productDetailsData} />
          </I18nFlex>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ProductPage;
