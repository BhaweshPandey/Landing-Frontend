import React, { useState } from "react";
import { Box, useMantineTheme } from "@mantine/core";
import { useStores } from "@/models";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { typography } from "@/themes/Mantine/typography";
import { translate } from "@/i18n";
import { useMediaQuery } from "@mantine/hooks";
import I18nFlex from "@/components/elements/I18nFlex/I18nFlex";
import useStyles from '../ProductPage.style'
import { ProductDetailType, ProductStockType } from "@/models/modules/product/schemas";

function AboutProduct(props:{
  data: ProductDetailType | null | undefined
}) {

  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const matches = useMediaQuery("(max-width: 500px)");
  const {classes} = useStyles();

  const ProductLabels = [
    translate("productPage.condition"),
    translate("productPage.currentQuantity"),
    translate("productPage.material"),
    translate("productPage.delivery")
  ];

  

  const ApiData = [
    {
      productDescriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`
    },
    {
      productDescriptionText: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`
    }
  ];


  const ProductValues = [
    "New",
    props.data?.product_stock !=undefined ? props.data?.product_stock[0].quantity: null,
    "Cotton",
    "Pick up & delivery courrier"
  ];


  return (
    <Box className= {classes.aboutTabStyles}>
      {ProductLabels.map((item, id) => {
        return (
          <I18nFlex justify={"space-between"}>
            <BaseText c={theme.colors.gray[6]} mb={"14px"}>
              {item}
            </BaseText>
            <Box w={matches ? "50%" : "70%"}>
              <BaseText
                sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
                mb={"14px"}
                style={typography.label[i18nStore.getCurrentLanguage()].l9}
              >
                {ProductValues[id]}{" "}
              </BaseText>
            </Box>
          </I18nFlex>
        );
      })}
      {/* {ApiData.map((item, id) => {
        return ( */}
          <BaseText
            // key={id}
            sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
            mt={"40px"}
            style={{
              ...typography.paragraph[i18nStore.getCurrentLanguage()].p6
            }}
          >
            {props.data?.description}
          </BaseText>
        {/* );
      })} */}
    </Box>
  );
}

export default AboutProduct;
