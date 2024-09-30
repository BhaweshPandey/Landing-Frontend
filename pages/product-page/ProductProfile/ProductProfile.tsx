import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import I18nFlex from '@/components/elements/I18nFlex/I18nFlex';
import { translate } from '@/i18n';
import { useStores } from '@/models';
import { Images } from '@/public';
import { typography } from '@/themes/Mantine/typography';
import { Button, Flex, Image, Popover, Stack, Text, useMantineTheme } from '@mantine/core';
import BadgeIcon from '../BadgeIcon/BadgeIcon';
import useStyles from '../ProductPage.style';
import ProductTabs from '../ProductsTabs/ProductTabs';
import {
  CarouselDataType,
  ProductDetailType,
  ProductOptionType,
  ProductStockType,
} from '@/models/modules/product/schemas';

const TootTipImages = [
  Images.facebook_icon,
  Images.twitter_icon,
  Images.whatsapp_icon,
  Images.share_link_icon,
];

const ApiData = {
  productHeading: 'Product name lorem ipsum dolor set amet',
  productPrice: '$78.32',
  brandName: 'Pebea Sneakers',
  location: 'Bangalore',
  productRating: '4.1',
};

function ProductProfile(props: { data: ProductDetailType | null | undefined }) {
  const { i18nStore, cartStore } = useStores();
  const theme = useMantineTheme();
  const cartData = {
    chooseColor: '',
    chooseSize: '',
  };
  const [countItems, setCountItems] = useState(1);
  const { classes } = useStyles();
  const [isBookMarkSave, setIsBookMarkSave] = useState(false);
  const [cartDataItem, setcartDataItem] = useState(cartData);


  const addToCart = () => {
    cartStore
      .addToCart({
        quantity: countItems,
        vendor: props.data?.vendor,
        product_stock: props.data?.product_stock != null ? props.data?.product_stock[0]?.id : null,
      })
      .then((res) => {
        if (res.ok) {
          console.log('item has been added to your cart');
        }
      });
  };

  // const Variants = (props: { data: any; title: string | null }) => {
  //   return (
  //     <>
  //       <BaseText
  //         mb="16px"
  //         sx={{ textAlign: i18nStore.isRTL ? 'end' : 'start' }}
  //         style={{
  //           ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
  //           fontWeight: 'bold',
  //         }}
  //       >
  //         {props.title}
  //       </BaseText>
  //       <I18nFlex gap="xl" wrap={'wrap'}>
  //         {productOptionDetails?.product_option_details?.map(
  //           (item: ProductOptionType, id: number) => {
  //             return (
  //               <Button
  //                 bg={item.option_json_value?.hex_code}
  //                 key={`image_type_${id}`}
  //                 // w={"98px"}
  //                 variant="filled"
  //                 radius={'60px'}
  //                 onClick={() => {
  //                   setcartDataItem((pre: string | null | any) => ({
  //                     ...pre,
  //                     chooseColor: item.option_text_value,
  //                   }));
  //                 }}
  //               >
  //                 <Text
  //                   c={theme.white}
  //                   style={{
  //                     ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
  //                   }}
  //                 >
  //                   {item.option_text_value}
  //                 </Text>
  //               </Button>
  //             );
  //           }
  //         )}
  //       </I18nFlex>
  //     </>
  //   );
  // };

  // let VARIANT_OF_PRODUCTS: any = {
  //   Color: (
  //     <Variants
  //       title={translate('productPage.colors')}
  //       data={productOptionDetails?.product_option_details}
  //     />
  //   ),
  //   Size: (
  //     <Variants
  //       title={translate('productPage.size')}
  //       data={productOptionDetails?.product_option_details}
  //     />
  //   ),
  // };

  // console.log('props.data?.product_stock', JSON.stringify(props.data?.product_stock));

  return (
    <Stack miw={'50%'}>
      <I18nFlex gap={'22px'}>
        <BadgeIcon logo={Images.brand_icon} title={'Nike'} w={'22px'} h={'22px'} />
        <BadgeIcon logo={Images.star_icon} title={'4.1'} w={'17px'} h={'17px'} />
      </I18nFlex>
      <BaseText
        color={theme.colors.cyan[9]}
        sx={{ textAlign: i18nStore.isRTL ? 'end' : 'start' }}
        style={typography.headings[i18nStore.getCurrentLanguage()].h9}
      >
        {/* {ApiData.productHeading} */}
        {props.data?.name}
      </BaseText>
      <BaseText
        mt={'20px'}
        mb={'50px'}
        sx={{ textAlign: i18nStore.isRTL ? 'end' : 'start' }}
        style={typography.label[i18nStore.getCurrentLanguage()].l8}
      >
        {ApiData.productPrice}
      </BaseText>

      {/* { productOptionDetails?.product_option_details?.map((item: ProductOptionType, id: number) => {
        return (
          VARIANT_OF_PRODUCTS[item.option_type]
        )
      })} */}

      <BaseText
        mb="16px"
        sx={{ textAlign: i18nStore.isRTL ? 'end' : 'start' }}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
          fontWeight: 'bold',
        }}
      >
        {translate('productPage.colors')}
      </BaseText>
      <I18nFlex gap="xl" wrap={'wrap'}>
        {props.data?.product_stock != null
          ? props.data?.product_stock?.map((item, id) => {
              if (item.product_option_details != null)
                return item.product_option_details.map((item: ProductOptionType, id: number) => {
                  if (item.option_type == CarouselDataType.COLOR) {
                    return (
                      <Button
                        bg={item.option_json_value?.hex_code}
                        key={`image_type_${id}`}
                        // w={"98px"}
                        variant="filled"
                        radius={'60px'}
                        onClick={() => {
                          setcartDataItem((pre: string | null | any) => ({
                            ...pre,
                            chooseColor: item.option_text_value,
                          }));
                        }}
                      >
                        <Text
                          c={theme.white}
                          style={{
                            ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
                          }}
                        >
                          {item.option_text_value}
                        </Text>
                      </Button>
                    );
                  }
                });
            })
          : null}
        
      </I18nFlex>
      <BaseText
        my="16px"
        sx={{ textAlign: i18nStore.isRTL ? 'end' : 'start' }}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
          fontWeight: 'bold',
        }}
      >
        {translate('productPage.size')}
      </BaseText>
      <I18nFlex gap="xl" wrap={'wrap'}>
        {props.data?.product_stock != null
          ? props.data?.product_stock?.map(
              (item, id) => {
                if (item.product_option_details != null)
                  return item.product_option_details.map((item: ProductOptionType, id: number) => {
                    if (item.option_type == CarouselDataType.SIZE)
                      return (
                        <Button
                          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i2}
                          onClick={() => {
                            setcartDataItem((pre: string | null | any) => ({
                              ...pre,
                              chooseSize: item.option_text_value,
                            }));
                          }}
                          bg={theme.colors.dark[0]}
                          c={theme.colors.gray[6]}
                          key={`image_type_${id}`}
                          radius={'60px'}
                          variant="filled"
                        >
                          {item.option_text_value}
                        </Button>
                      );
                  });
              }
            )
          : null}
      </I18nFlex>
      <I18nFlex my={'40px'} align={'center'} gap={'18px'} wrap={'wrap'} justify={'space-between'}>
        <Flex gap={'32px'} align={'center'} wrap={'wrap'}>
          <Button
            onClick={() => {
              setCountItems((pre) => {
                if (pre == 1) {
                  return 1;
                } else {
                  return pre - 1;
                }
              });
            }}
            className={classes.addAndremoveItemStyle}
            size="sm"
            c={countItems == 1 ? theme.colors.gray[6] : theme.colors.blue[4]}
            variant="outline"
          >
            {'-'}
          </Button>
          <BaseText c={theme.colors.gray[6]} fz={'22px'} fw={'bold'}>
            {countItems}
          </BaseText>
          <Button
            className={classes.addAndremoveItemStyle}
            onClick={() => setCountItems((pre) => pre + 1)}
            size="sm"
            variant="outline"
          >
            {'+'}
          </Button>
        </Flex>
        <Flex gap="28px" wrap={'wrap'} align={'center'}>
          <BaseButton
            style={typography.headings[i18nStore.getCurrentLanguage()].h7}
            size="md"
            style_variant="outline"
            color_variant="gray"
            c={theme.colors.dark[1]}
            onClick={() => {
              addToCart();
            }}
          >
            {translate('productPage.addToCart')}
          </BaseButton>
          <BaseButton
            style={{
              ...typography.headings[i18nStore.getCurrentLanguage()].h7,
            }}
            bg={theme.colors.gray[2]}
            c={theme.colors.dark[1]}
            size="md"
            style_variant="filled"
            color_variant="gray"
          >
            {translate('productPage.buyNow')}
          </BaseButton>
          <Image
            onClick={() => setIsBookMarkSave((pre) => !pre)}
            width={'19.11px'}
            height={'25px'}
            style={{
              cursor: 'pointer',
            }}
            src={isBookMarkSave ? Images.selected_bookmark_icon : Images.bookmark_icon}
            alt="bookmark_icon"
          />

          <Popover withArrow>
            <Popover.Target>
              <Image
                style={{
                  cursor: 'pointer ',
                }}
                width={'23px'}
                height={'24px'}
                src={Images.share_icon}
                alt="share_icon"
              />
            </Popover.Target>
            <Popover.Dropdown className={classes.popoverStyle}>
              {TootTipImages.map((item, id) => {
                return (
                  <Image
                    style={{
                      cursor: 'pointer',
                    }}
                    key={id}
                    src={item}
                    width={'32px'}
                    height={'32px'}
                    alt={`image_${id}`}
                  />
                );
              })}
            </Popover.Dropdown>
          </Popover>
        </Flex>
      </I18nFlex>
      <ProductTabs data={props.data} />
    </Stack>
  );
}

export default ProductProfile;
