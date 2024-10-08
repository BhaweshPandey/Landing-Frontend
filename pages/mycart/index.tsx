// React and next import
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// mantine component import
import { Box, Container, Divider, Flex, Grid, Image, Input, Stack, useMantineTheme } from '@mantine/core';
// styles file import
import  createStyle  from './MyCart.styles';
 
import { typography } from '@/themes/Mantine/typography';
// internal components import
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer/Footer';
// image import
import { Images } from '@/public';
// stores import
import { useStores } from '@/models';

const MyCart = () => {
  // style function
  const useStyles = createStyle();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { i18nStore } = useStores()
  const router = useRouter()

  // State Mangement
  const [itemCount, setItemCouunt] = useState<number>(1);

  const decrement = () => {
    itemCount > 1 && setItemCouunt(itemCount - 1);
  };
  const increment = () => {
    setItemCouunt(itemCount + 1);
  };

  return (
    <>
      <Header/>
      <Container maw={'1000px'} mt={'50px'}>
        <BaseText className={classes.title} txtkey="myCart.heading" />
        <Grid mt={'50px'} m={0}>
          <Grid.Col xs={12} sm={12} md={8} lg={8} xl={8} p={0}>
            <Stack w={'95%'} mb={'40px'}>
              <Flex align={'center'} gap={'lg'} mb={'lg'}>
                <Image src={Images.pebea_icon} alt="Pebea Icon" width={'34px'} height={'34px'} />
                <BaseText className={classes.subHeading} txtkey="myCart.pebeaSneakers" />
              </Flex>
              <Flex w={'100%'} gap={'lg'} mb={'sm'}
                className={classes.cardDetailsPrice}
              >
                <Image
                  src={Images.cart_image}
                  alt="cart iamges"
                  width={'112px'}
                  height={'140px'}
                  radius={'12px'}
                />
                <Flex w={'100%'} h={'140px'}>

                <Stack w={'100%'} className={classes.priceDetails} >
                  <BaseText className={classes.cardProductHeading}>
                    {'Product name lorem ipsum dolor sit amet '}
                  </BaseText>
                  <BaseText className={classes.cardProductPrice}>{'$78.25'}</BaseText>
                  <Flex w={'100%'} justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <Flex gap={'md'}>
                      <BaseButton style_variant={'outline'} color_variant={'gray'}>
                        <BaseText txtkey="global.button.blue" color={theme.colors.cyan[9]} />
                      </BaseButton>
                      <BaseButton style_variant={'outline'} color_variant={'gray'}>
                        <BaseText txtkey="global.button.large" color={theme.colors.cyan[9]} />
                      </BaseButton>
                    </Flex>
                    <Flex gap={'lg'} className={classes.countFlex} >
                      <Box className='cursor'>
                        <Image
                          src={Images.delete_cart_icon}
                          alt="delete_cart_icon"
                          width={'20px'}
                          height={'20px'}
                        />
                      </Box>
                      <Box onClick={decrement} className='cursor'

                      >
                        <Image
                          src={Images.minus_icon}
                          alt="delete_cart_icon"
                          width={'20px'}
                          height={'20px'}
                        />
                      </Box>
                      <div>{itemCount}</div>
                      <Box onClick={increment} className='cursor'>
                        <Image
                          src={Images.add_icon}
                          alt="delete_cart_icon"
                          width={'20px'}
                          height={'20px'}
                        />
                      </Box>
                    </Flex>
                  </Flex>
                </Stack>
                </Flex>
              </Flex>
            </Stack>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={4} lg={4} xl={4} p={0}
            className={classes.payNow}
          >
            <Flex
              direction={'column'}
              justify={'space-between'}
              w={'100%'}
              p={'24px'}
              className={classes.priceBox}
            >
              <Flex gap={'xs'}>
                <Image src={Images.coupon_icon} alt="coupon_icon" width={'38px'} height={'38px'} />
                <Input variant="filled" radius={'xl'} w={'100%'} placeholder="Voucher code" />
              </Flex>
              <Flex justify={'space-between'} align={"center"} >
                <BaseText color={theme.colors.cyan[9]}>{'Total price (5 items)'}</BaseText>
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8} color={theme.colors.dark[9]}>{'$394.00'}</BaseText>
              </Flex>
            </Flex>
            <Link 
              href={'/checkoutnow'}
              className='textDecoration'
            >
              <BaseButton color_variant="blue" style_variant={'filled'} mt={'xl'}>
                <BaseText  color={'white'} txtkey="checkOutNow.backButtonText" />
              </BaseButton>
            </Link>
          </Grid.Col>
        </Grid>
      <Divider my="xs" />
      </Container>
      <Footer/>
    </>
  );
};

export default MyCart;
