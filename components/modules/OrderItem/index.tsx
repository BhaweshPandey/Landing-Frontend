// React and next imports
import React from 'react';
import Link from 'next/link';
// mantine components import
import { Box, Flex, Grid, Image, Stack, Text, useMantineTheme } from '@mantine/core';
// component import
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
// createStyle
import { createStyle } from './OrderItem.styles';
// other import
import { Images } from '@/public';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

const OrderItem = (props: { data: any }) => {
  const { i18nStore } = useStores();
  const useStyles = createStyle();
  const { classes } = useStyles();  
  const theme = useMantineTheme();

  const OrderAndTransactionDetails = () => {
    return (
      <Flex w={'100%'} justify={'space-between'} h={'110px'}>
        <Flex justify={'space-between'} direction={'column'}>
          <Flex gap={'5px'} direction={'column'}>
            <BaseText
              color={theme.colors.gray[5]}
              style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
              txtkey="myOrder.transactionDetails.orderId"
            />
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
              {props.data.transactionId}
            </Text>
          </Flex>
          <Flex gap={'5px'} direction={'column'}>
            <BaseText
              color={theme.colors.gray[5]}
              style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
              txtkey="myOrder.transactionDetails.price"
            />
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
              {'$ 329.00'}
            </Text>
          </Flex>
        </Flex>
        <Flex justify={'space-between'} direction={'column'}>
          <Flex gap={'5px'} direction={'column'}>
            <BaseText
              color={theme.colors.gray[5]}
              style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
              txtkey="myOrder.transactionDetails.date"
            />
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
              {props.data.date}
            </Text>
          </Flex>
          <Flex gap={'5px'} direction={'column'}>
            <BaseText
              color={theme.colors.gray[5]}
              style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
              txtkey="myOrder.transactionDetails.paymentMethod"
            />
            <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}>
              {props.data.payment}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const StatusText = (props:{
    text: string
    color: any
  }) =>{
    return(
      <Box className={classes.statusBox}>
        <BaseText
          color={props.color}
          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i4}
        >
          {props.text}
        </BaseText>
      </Box>
    )
  }

  let ORDER_STATUS_TEXT_DICT:any = {
    "PROGRESS" : <StatusText text={props.data.status} color={theme.colors.blue[3]} />,
    "DELIVERY" : <StatusText text={props.data.status} color={theme.colors.blue[3]} />,
    "COMPLETED" : <StatusText text={props.data.status} color={theme.colors.blue[3]} />,
    "CANCELLED" : <StatusText text={props.data.status} color={theme.colors.red[3]} />,
  }

  return (
    <Grid m={0}>
      <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
        <Grid>
          <Grid.Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <Image
              src={Images.order_product_image}
              alt="cart iamges"
              width={'112px'}
              height={'140px'}
              radius={'12px'}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={8} md={8} lg={8} xl={8}>
            <Flex w={'100%'} gap={'lg'} mb={'sm'} className={classes.cartBox}>
              <Flex w={'100%'} h={'140px'} direction={'column'} justify={'space-between'}>
                <Flex align={'center'} gap={'lg'}>
                  <Image src={Images.pebea} alt="Pebea Icon" width={'34px'} height={'34px'} />
                  <BaseText className={classes.subHeading}>{props.data.title}</BaseText>
                </Flex>
                <Stack spacing={'10px'}>
                  <BaseText className={classes.cardProductHeading}>
                    {props.data.description}
                  </BaseText>
                  <BaseText
                    className={classes.cardProductPrice}
                    color={theme.colors.cyan[9]}
                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  >
                    {'1 Item'}&nbsp;&middot;&nbsp;{'$78.25'}
                  </BaseText>
                  <Flex
                    gap={'5px'}
                    align={'center'}
                    //   className={classes.typeBox}
                  >
                      {
                        ORDER_STATUS_TEXT_DICT[props.data.statusCode]
                      }

                    <StatusText
                      text={"+ 3 Item more"}
                      color={theme.colors.gray[6]}
                    />
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
        <Grid
          className={classes.leftGrid}
        >
          <Grid.Col
            xs={12}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            // px={'50px'}
            // py={'20px'}
            className={classes.cardTwoSection}
          >
            <OrderAndTransactionDetails />
          </Grid.Col>
          <Grid.Col xs={12} sm={3} md={3} lg={3} xl={3}>
            <Flex
              h={'100%'}
              direction={'column'}
              justify={'flex-end'}
              // align={"baseline"}
            >
              <Link href={'/order-details'} className="textDecoration">
                <BaseButton
                  style_variant="filled"
                  color_variant="blue"
                  className={classes.buttonDetails}
                >
                  <BaseText txtkey="myOrder.detailButtonText" />
                </BaseButton>
              </Link>
            </Flex>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default OrderItem;
