import React, { useState, useMemo, useEffect } from 'react'
import { Box, Image, Flex, Group, Button, Container, Grid, Stack, Divider, Pagination } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useStores } from '@/models';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import Header from '@/components/modules/Header/Header';
import  createStyle  from "./ProductListing.style";
import Footer from '@/components/modules/Footer/Footer';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import NoDataFound from '@/components/modules/NoDataFound/NoDataFound';
import { typography } from '@/themes/Mantine/typography';


const productCardData = [
    {
        "ProductName": "name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Nike name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Bhawesh",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Hp",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Nike name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Bhawesh",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Hp",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    }
]

export default function ProductListing() {
    const theme = useMantineTheme();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const [pagination, setPaginationl] = useState<number>(1);
    const [activePage, setActivePage] = useState<number>(1);
    const [filterData, setFilterData] = useState<any>(productCardData);
    const { i18nStore } = useStores();

    let url = new URL(window.location.href);
    let searchProduct = url.searchParams.get("search-product");

    let productNameFilter = productCardData.filter((element: any) => {
        if (element.ProductName.toLowerCase().includes(searchProduct)) {
            return element
        }
    })

    useEffect(() => {
        setPaginationl(Math.ceil(productNameFilter.length / 10))
        const firstPageIndex = (activePage - 1) * 10;
        const lastPageIndex = firstPageIndex + 10;
        let data = productNameFilter.slice(firstPageIndex, lastPageIndex);
        setFilterData([...data])
    }, [searchProduct, activePage])


    return (
        <Container className={classes.container}>
            <Header />
            <Flex className={classes.homePage}>
                <Flex justify={"space-between"} wrap={"wrap"}>
                    <Flex>
                        <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8} txtkey={"searchPage.yourSearched"} />
                        <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8}> : {searchProduct}</BaseText>
                    </Flex>
                    <Flex gap={30}>
                        <Image className={classes.cursor} width={38} height={38} src={Images.box_icon} />
                        <Flex gap={10} mt={5}>
                            <BaseText mt={2} style={typography.headings[i18nStore.getCurrentLanguage()].h8} txtkey={"searchPage.mostRecent"} />
                            <Image className={classes.cursor} width={22} height={22} src={Images.sort_icon} />
                        </Flex>
                    </Flex>
                </Flex>
                <Grid mt={20}>
                    {filterData.length ?
                        (filterData.map((item: any, id: any) => (
                            <Grid.Col key={id} xl={2.4} lg={3} md={3} sm={4} span={6}>
                                <Stack align="center">
                                    <ProductCard item={item} />
                                </Stack>
                            </Grid.Col>
                        ))) :
                        (<Flex w={"100%"} justify={"center"}>
                            <NoDataFound />
                        </Flex>)
                    }
                </Grid >
                <Flex className={classes.pagination}>
                    <Pagination.Root
                        onChange={setActivePage}
                        total={pagination} radius="xl"
                        classNames={{
                            control: classes.control
                        }}>
                        <Group className={classes.paginationGroup}>
                            <Pagination.Previous className={classes.paginationIcon} />
                            <Pagination.Items />
                            <Pagination.Next className={classes.paginationIcon} />
                        </Group>
                    </Pagination.Root>
                </Flex>
                <Divider my="xs" />
            </Flex >
            <Footer />
        </Container >
    )
} 
