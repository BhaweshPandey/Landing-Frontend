import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';

export default function createStyle() {

  return createStyles((theme) => ({
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginTop: '50px',
      ...typography.headings.en.h2,
    },
    subHeading: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      ...typography.headings.en.h2,
    },
    cardDetailsPrice:{
      display:"flex",
      flexWrap:"nowrap",
      [theme.fn.smallerThan('xs')]: {
        flexWrap:"wrap",
      },
    },
    priceDetails:{
      marginTop:"35px",
      [theme.fn.smallerThan('xs')]: {
        marginTop:"10px"
      },
    },
    cardProductHeading:{
      ...typography.paragraph.en.p3
    },
    cardProductPrice:{
      ...typography.paragraph.en.p3
    },
    priceBox:{
      height:"132px",
      width:"100%",
      border:`1px`,
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`,
      borderRadius:22
    },
    cardDetailFlex:{
      display:"flex",
      flexWrap:"nowrap",
      [theme.fn.smallerThan('xs')]: {
        flexWrap:"wrap"
      },
    },
    countFlex:{
      marginTop:"0px",
      [theme.fn.smallerThan('xs')]: {
        marginTop:"10px"
      },
    },
    payNow:{
      marginBottom:"0px",
      [theme.fn.smallerThan('md')]: {
        marginBottom:"10px"
      },
    },
  }));
};
