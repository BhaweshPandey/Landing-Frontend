// React and next import
import React from 'react';
//mantine component
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { typography } from '@/themes/Mantine/typography';
//internal component
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BackButton } from '@/components/elements/BackButton';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { CancellingOrderModal } from '@/components/modules/Modals/CancellingOrderModal/CancellingOrderModal';
import { ReturnProductModal } from '@/components/modules/Modals/ReturnProductModal/ReturnProductModal';
// other import
import { translate } from '@/i18n';
import { Images } from '@/public';
import  createStyle  from './OrderDetails.styles';
// store import
import { useStores } from '@/models';
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer/Footer';

const index = () => {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();

  const [opened, { open, close }] = useDisclosure(false);
  const ReturnModal = useDisclosure(false);

  const PRODUCTDETIALS_DATA = [
    {
      title: 'Pebea Sneakers',
      description: 'Product name lorem ipsu...',
      status: 'On progress',
      statusCode: 'PROGRESS',
      transactionId: '19288XKAMSAA',
      price: '$40',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'Nike',
      description: 'Product name lorem ipsu...',
      status: 'Cancelled',
      statusCode: 'CANCELLED',
      transactionId: '19288XKAMSAA',
      price: '$35',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'Rebook',
      description: 'Product name lorem ipsu...',
      status: 'Completed',
      statusCode: 'COMPLETED',
      transactionId: '19288XKAMSAA',
      price: '$54',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'Rebook',
      description: 'Product name lorem ipsu...',
      status: 'On delivery',
      statusCode: 'DELIVERY',
      transactionId: '19288XKAMSAA',
      price: '$60',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
  ];

  const ORDERDETIALS_DATA = {
    location: 'Bangalore',
    rating: '4.3',
    transcationId: '19288XKAMSAA',
    date: 'June 16th, 2021',
    name: 'Evelynn Whinsprey',
    number: '+8562910002938',
    address: 'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India',
    paymentMethod: 'Credit card',
  };

  const ItemDetails = (props: { description: string; price: string }) => {
    return (
      <Flex
        wrap={'wrap'}
        gap={'md'}
        my={'8px'}
        // align={"baseline"}
        // h={"140px"}
      >
        <Image
          src={Images.product_image_three}
          alt="product_image_three"
          height={'140px'}
          width={'112px'}
          radius={'12px'}
        />
        <Flex direction={'column'} gap={'xs'} className={classes.productCardDescription}>
          <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
            {props.description}
          </Text>
          <Flex>
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}>{'1 item'}</Text>
            &nbsp;&middot;&nbsp;
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}>
              {props.price}
            </Text>
          </Flex>
          <Flex gap={'sm'}>
            <Box className={classes.boxStyle}>
              <BaseText
                txtkey="global.button.blue"
                style={typography.buttonText[i18nStore.getCurrentLanguage()].b5}
              />
            </Box>
            <Box className={classes.boxStyle}>
              <BaseText
                txtkey="global.button.large"
                style={typography.buttonText[i18nStore.getCurrentLanguage()].b5}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  return (
    <>
    <Header/>
      <Container maw={'1000px'}>
        <Box mt={'50px'}>
          <BackButton heading={translate('myOrder.orderDetails.heading')} />
        </Box>
        <Grid m={0} mt={'26px'} py={'26px'} px={'xl'} className={classes.gridConatiner}>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Flex w={'100%'} justify={'center'} align={'center'} direction={'column'} h={'100%'}>
              <Flex align={'center'} gap={'lg'} w={'95%'} justify={'space-between'} wrap={'wrap'}>
                <Flex gap={'md'} align={'center'}>
                  <Image src={Images.pebea} alt="Pebea Icon" width={'54px'} height={'54px'} />
                  <Flex direction={'column'} gap={'5px'}>
                    <BaseText
                      className={classes.title}
                      style={typography.label[i18nStore.getCurrentLanguage()].l6}
                      txtkey="myOrder.headingPebeaSneakers"
                    />
                    <Flex align={'center'} gap={'8px'}>
                      <Flex gap={'5px'} align={'center'}>
                        <Image
                          src={Images.location_pin}
                          alt="Pebea Icon"
                          width={'14px'}
                          height={'14px'}
                        />
                        <Text
                          color={theme.colors.dark[9]}
                          style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}
                        >
                          {ORDERDETIALS_DATA.location}
                        </Text>
                      </Flex>
                      <Divider orientation="vertical" />
                      <Flex gap={'5px'} align={'center'}>
                        <Image
                          src={Images.rating_icon}
                          alt="Pebea Icon"
                          width={'14px'}
                          height={'14px'}
                        />
                        <Text
                          color={theme.colors.dark[9]}
                          style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}
                        >
                          {ORDERDETIALS_DATA.rating}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Image
                  src={Images.group_chat_icon}
                  alt="Pebea Icon"
                  width={'32px'}
                  height={'32px'}
                />
              </Flex>
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} className={ i18nStore.isRTL? classes.cardTwoSectionisRtl : classes.cardTwoSection}>
            <Stack>
              <Flex w={'100%'} justify={'space-between'} wrap={'wrap'} gap={'xs'}>
                <Stack spacing={'7px'} className={classes.stackMargin}>
                  <BaseText
                    color={theme.colors.gray[5]}
                    style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
                    txtkey="myOrder.transactionDetails.orderId"
                  />
                  {
                    <Text
                      style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                      color={theme.colors.blue[4]}
                    >
                      {translate('myOrder.orderDetails.status.progress')}
                    </Text>
                  }
                  {/* <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
                  {'Completed'}
                </Text> */}
                </Stack>
                <Stack spacing={'7px'} className={classes.stackMargin}>
                  <BaseText
                    color={theme.colors.gray[5]}
                    style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
                    txtkey="myOrder.transactionDetails.orderId"
                  />
                  <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
                    {ORDERDETIALS_DATA.transcationId}
                  </Text>
                </Stack>
                <Stack spacing={'7px'} className={classes.stackMargin}>
                  <BaseText
                    color={theme.colors.gray[5]}
                    style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
                    txtkey="myOrder.transactionDetails.date"
                  />
                  <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
                    {ORDERDETIALS_DATA.date}
                  </Text>
                </Stack>
              </Flex>
              <Flex gap={'md'} wrap={'wrap'}>
                <BaseButton
                  style_variant="outline"
                  color_variant="red"
                  w={'150px'}
                  onClick={() => {
                    open();
                  }}
                >
                  <BaseText txtkey="global.button.cancel" color={theme.colors.red[8]} />
                </BaseButton>
                <BaseButton
                  style_variant="outline"
                  color_variant="red"
                  w={'150px'}
                  onClick={() => {
                    ReturnModal[1].open();
                  }}
                >
                  <BaseText txtkey="global.button.return" color={theme.colors.red[8]} />
                </BaseButton>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
        <Grid m={0} mt={'32px'}>
          <Grid.Col xs={12} sm={7} md={7} lg={7} xl={7}>
            <BaseText txtkey="myOrder.orderDetails.itemsDetails" color={theme.black} />
            <Box className={classes.orderDetailsProducts}>
              {PRODUCTDETIALS_DATA.map((item, index) => {
                return (
                  <ItemDetails key={index} price={item.price} description={item.description} />
                );
              })}
            </Box>
          </Grid.Col>
          <Grid.Col xs={12} sm={5} md={5} lg={5} xl={5}>
            <BaseText txtkey="myOrder.orderDetails.deliveryDetails" color={theme.black} />
            <Box className={classes.orderDetailsProducts} h={'212px'}>
              <Stack spacing={'lg'}>
                <Flex gap={'sm'} align={'center'}>
                  <Image
                    src={Images.icon_person}
                    alt="icon_person"
                    width={'20px'}
                    height={'20px'}
                  />
                  <Text>{ORDERDETIALS_DATA.name}</Text>
                </Flex>
                <Flex gap={'sm'} align={'center'}>
                  <Image
                    src={Images.icon_reciever}
                    alt="icon_person"
                    width={'20px'}
                    height={'20px'}
                  />
                  <Text>{ORDERDETIALS_DATA.number}</Text>
                </Flex>
                <Flex gap={'sm'} align={'center'}>
                  <Image
                    src={Images.icon_location}
                    alt="icon_person"
                    width={'20px'}
                    height={'20px'}
                  />
                  <Text>{ORDERDETIALS_DATA.address}</Text>
                </Flex>
              </Stack>
            </Box>
            <BaseText
              txtkey="myOrder.orderDetails.paymentDetails"
              mt={'31px'}
              color={theme.black}
            />
            <Box className={classes.orderDetailsProducts} >
              <Stack spacing={'lg'}>
                <Flex gap={'sm'} align={'center'} w={'100%'} justify={'space-between'}>
                  <BaseText txtkey="myOrder.orderDetails.method" color={theme.black} />
                  <Text
                    color={theme.black}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  >
                    {ORDERDETIALS_DATA.paymentMethod}
                  </Text>
                </Flex>
                <Flex gap={'sm'} align={'center'} w={'100%'} justify={'space-between'}>
                  <BaseText txtkey="myOrder.orderDetails.itemPrice" color={theme.black} />
                  <Text
                    color={theme.black}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  >
                    {'$382.00'}
                  </Text>
                </Flex>
                <Flex gap={'sm'} align={'center'} w={'100%'} justify={'space-between'}>
                  <BaseText txtkey="myOrder.orderDetails.fee" color={theme.black} />
                  <Text
                    color={theme.black}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  >
                    {'$12.00'}
                  </Text>
                </Flex>
                <Image src={Images.dash_line_cart} />
                <Flex gap={'sm'} align={'center'} w={'100%'} justify={'space-between'}>
                  <BaseText
                    txtkey="myOrder.orderDetails.payment"
                    color={theme.black}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  />
                  <Text
                    color={theme.black}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  >
                    {'$12.00'}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      <Divider my="xs" />
      </Container>
      <Footer/>
      <CancellingOrderModal opened={opened} onClose={close} />
      <ReturnProductModal opened={ReturnModal[0]} onClose={ReturnModal[1].close} />
    </>
  );
};

export default index;
