import React, { useState } from 'react';
import { Box, Flex, Image, Center } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Images } from '../../../../public/index';
import { useStores } from '@/models';
import { createStyle } from './ProductCard.style';
import { typography } from '@/themes/Mantine/typography';
import Link from 'next/link';
import { ProductType } from '@/models/modules/product/schemas';

function ProductCard(props: {
  item: ProductType;
  favoriteItemsImage?: any;
  handleRemoveItem?: any;
  id?: any;
}) {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();
  const [bookmark, setBookmark] = useState(false);
  const useStyles = createStyle();
  const { classes } = useStyles()


  let url = window.location.href

  console.log(url)

  return (
    <Flex className={classes.container}>
      <Link
        href={{
          pathname: './product-page',
          query: {
            id: props.item.id,
          },
        }}
        className="textDecoration"
      >
        <Box className={classes.productIcon}>
          <Flex className={classes.imageBox}>
            <Image width={17} height={17} src={Images.star_icon} />
            <BaseText
              c={theme.colors.dark[9]}
              style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i3}
            >
              {/* {props.item.Rating} */}
              {'4.3'}
            </BaseText>
          </Flex>
          <Center>
            {/* {props.item.product_stock?.product_media?.map((item, id) => {
              console.log("item",item.image)
              if (id==0) */}
                 <Image maw={200} src={props.item.product_stock?.product_media[0]?.image} alt={'product media'} />
            {/* //  })} */}
          </Center>
        </Box>
        <Flex wrap={'wrap'} gap={10}>
          <Flex className={classes.companyName}>
            <BaseText
              c={theme.colors.cyan[9]}
              style={typography.label[i18nStore.getCurrentLanguage()].l11}
            >
              {props.item.name}
            </BaseText>
          </Flex>
        </Flex>
        <BaseText
          c={theme.colors.dark[9]}
          style={typography.label[i18nStore.getCurrentLanguage()].l11}
        >
          {props.item.description}
        </BaseText>
      </Link>
      <Flex justify={'space-between'}>
        <Link href={'./product-page'} className="textDecoration">
          <BaseText
            c={theme.colors.dark[9]}
            style={typography.headings[i18nStore.getCurrentLanguage()].h6}
          >
            {props?.item.product_stock?.price_currency}&nbsp;
            {props?.item.product_stock?.price}
          </BaseText>
        </Link>
        {props.favoriteItemsImage ? (
          <Image
            onClick={() => props.handleRemoveItem(props.id)}
            className={classes.cursor}
            width={15}
            height={20}
            src={props.favoriteItemsImage}
          />
        ) : (
          <Image
            onClick={() => setBookmark(!bookmark)}
            className={classes.cursor}
            width={15}
            height={20}
            src={bookmark ? Images.selected_bookmark_icon : Images.vector}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default ProductCard;
