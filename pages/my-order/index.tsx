// React and next imports
import React, { useState } from 'react';
// mantine component imports
import { Button, Container, Divider, Flex, Image, Stack, Tabs } from '@mantine/core';
// components
import { BaseText } from '@/components/elements/BaseText/BaseText';
//styles import
import  createStyle  from './MyOrder.styles';
import { translate } from '@/i18n';
import { Images } from '@/public';
import OrderItem from '@/components/modules/OrderItem';
import { useStores } from '../../models/root-store/root-store-context';
import { typography } from '@/themes/Mantine/typography';
import { ORDER_STATUS_CODE } from '@/models/modules/dummy/schemas';
import SearchAndFilter from '@/components/modules/Myorder';
import {useRouter} from 'next/router';
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer/Footer';
//stores

const MyOrder = () => {
  const { i18nStore } = useStores();
  const useStyles = createStyle();
  const router = useRouter()
  const { classes } = useStyles();

  const [searchText, setSearchText] = useState('');

  const PRODUCTDETAILS_DATA = [
    {
      title: 'Pebea Sneakers',
      description: 'Product name lorem ipsu...',
      status: 'On progress',
      statusCode: 'PROGRESS',
      transactionId: '19288XKAMSAA',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'Nike',
      description: 'Product name lorem ipsu...',
      status: 'Cancelled',
      statusCode: 'CANCELLED',
      transactionId: '19288XKAMSAA',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'Rebook',
      description: 'Product name lorem ipsu...',
      status: 'Completed',
      statusCode: 'COMPLETED',
      transactionId: '19288XKAMSAA',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
    {
      title: 'mrf',
      description: 'Product name lorem ipsu...',
      status: 'On delivery',
      statusCode: 'DELIVERY',
      transactionId: '19288XKAMSAA',
      date: 'June 16th, 2021',
      payment: 'Credit card',
    },
  ];

  const SearchItemNotFound = () => {
    return (
      <Flex
        h={'60vh'}
        w={'100%'}
        direction={'column'}
        justify={'center'}
        align={'center'}
        px={'60px'}
      >
        <Flex w={'100%'} justify={'space-between'} align={'center'}>
          <Image
            src={Images.search_image_notfound}
            alt="search_image_notfound"
            width={'354px'}
            height={'240px'}
          />
          <Stack>
            <BaseText
              color="black"
              style={typography.headings[i18nStore.getCurrentLanguage()].h4}
              txtkey="myOrder.searchNotFound.title"
            />
            <BaseText
              style={typography.paragraph[i18nStore.getCurrentLanguage()].p2}
              txtkey="myOrder.searchNotFound.para"
            />
          </Stack>
        </Flex>
      </Flex>
    );
  };

  let search_data = PRODUCTDETAILS_DATA.filter((itemData) => {
    if ( itemData.title.toLowerCase().includes(searchText.toLowerCase()) || itemData.description.toLowerCase().includes(searchText.toLowerCase())) {
      return itemData;
    }
  });

  let filter_ongoing_data = PRODUCTDETAILS_DATA.filter((item) => {
    if (item.statusCode == ORDER_STATUS_CODE.PROGRESS || item.statusCode == ORDER_STATUS_CODE.DELIVERY ) return item;
  });

  let search_ongoing_data = filter_ongoing_data.filter((itemData) => {
    if ( itemData.title.toLowerCase().includes(searchText.toLowerCase()) || itemData.description.toLowerCase().includes(searchText.toLowerCase())) {
      return itemData;
    }
  });

  let filter_previous_order = PRODUCTDETAILS_DATA.filter((item) => {
    if (item.statusCode == ORDER_STATUS_CODE.CANCELLED || item.statusCode == ORDER_STATUS_CODE.COMPLETED ) return item;
  });

  let search_previous_order = filter_previous_order.filter((itemData) => {
    if (itemData.title.toLowerCase().includes(searchText.toLowerCase()) || itemData.description.toLowerCase().includes(searchText.toLowerCase())) {
      return itemData;
    }
  });

  return (
    <>
    <Header/>
      <Container maw={'1000px'}>
        <BaseText className={classes.title} txtkey="myOrder.heading" />
        <Tabs
          classNames={{
            tab: classes.tab,
            tabsList: classes.tabsList,
          }}
          defaultValue="AllOrders"
        >
          <Flex justify={'space-between'} align={'baseline'} wrap={'wrap'}>
            <Tabs.List>
              <Tabs.Tab value="AllOrders"> {translate('myOrder.tabs.headingOne')} </Tabs.Tab>
              <Tabs.Tab onClick={()=>{
                    setSearchText("")
                  }} value="OngoingOrders">{translate('myOrder.tabs.headingTwo')}</Tabs.Tab>
              <Tabs.Tab onClick={()=>{
                    setSearchText("")
                  }} value="PreviousOrders">{translate('myOrder.tabs.headingThree')}</Tabs.Tab>
            </Tabs.List>
          </Flex>
          <SearchAndFilter
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Tabs.Panel value="AllOrders">
            {searchText ? (
              search_data.length > 0 ? (
                search_data.map((item, index) => {
                  return (
                    <>
                      <OrderItem key={index} data={item} />
                    </>
                  );
                })
              ) : (
                <SearchItemNotFound />
              )
            ) : (
              PRODUCTDETAILS_DATA.map((item, index) => {
                return (
                  <>
                    <OrderItem key={index} data={item} />
                  </>
                );
              })
            )}
          </Tabs.Panel>
          <Tabs.Panel value="OngoingOrders">
            {searchText ? (
              search_ongoing_data.length > 0 ? (
                search_ongoing_data.map((item, index) => {
                  return (
                    <>
                      <OrderItem key={index} data={item} />
                    </>
                  );
                })
              ) : (
                <SearchItemNotFound />
              )
            ) : (
              filter_ongoing_data.map((item, index) => {
                return (
                  <>
                    <OrderItem key={index} data={item} />
                  </>
                );
              })
            )}
          </Tabs.Panel>
          <Tabs.Panel value="PreviousOrders">
            {searchText ? (
              search_previous_order.length > 0 ? (
                search_previous_order.map((item, index) => {
                  return (
                    <>
                      <OrderItem key={index} data={item} />
                    </>
                  );
                })
              ) : (
                <SearchItemNotFound />
              )
            ) : (
              filter_previous_order.map((item, index) => {
                return (
                  <>
                    <OrderItem key={index} data={item} />
                  </>
                );
              })
            )}
          </Tabs.Panel>
        </Tabs>
      <Divider my="xs" />
      </Container>
      <Footer/>
    </>
  );
};

export default MyOrder;
