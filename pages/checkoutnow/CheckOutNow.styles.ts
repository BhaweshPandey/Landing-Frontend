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
    cardProductHeading:{
      ...typography.paragraph.en.p3
    },
    cardProductPrice:{
      ...typography.paragraph.en.p3
    },
    priceBox:{
      minHeight:"236px",
      width:"100%",
      border:`1px`,
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`,
      borderRadius:22,
      padding:24
    },
    cartBox:{
      minHeight:"152px",
      width:"100%",
      border:`1px`,
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`,
      borderRadius:22,
      padding:24
    },
    cardDetailFlex:{
      display:"flex",
      flexWrap:"nowrap",
      [theme.fn.smallerThan('xs')]: {
        flexWrap:"wrap"
      },
    },
    typeBox:{
      height:"22px",
      width:"100px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"5px 11px",
      borderRadius:"40px",
      borderWidth:"1px",
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`
    },
    itemDetailBox:{
      alignSelf: "baseline",
      width: "100%",
      height: "140px",
      marginTop:"50px",
      [theme.fn.smallerThan('xs')]: {
        marginTop:"0px",
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
