import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores()
  return createStyles((theme) => ({
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginTop: '50px',
      ...typography.headings.en.h2,
    },
    subHeading: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      ...typography.headings.en.h6,
    },
    cardProductHeading:{
      ...typography.paragraph.en.p3,
      fontWeight:600
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
    },
    statusBox:{
      height:"24px",
      width:"108px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      borderWidth:"1px",
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`,
      borderRadius:22,
      padding:"4px 14px",
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
      padding:"2px",
      borderRadius:"40px",
      borderWidth:"1px",
      borderStyle:"solid",
      borderColor:`${theme.colors.gray[2]}`
    },
    itemDetailBox:{
      width: "100%",
      height: "140px",
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
    leftGrid:{
      borderLeftWidth: i18nStore.isRTL?"0px": "1px",
      borderLeftStyle:  "solid",
      borderLeftColor:  `${theme.colors.gray[2]}`,
      borderRightWidth: i18nStore.isRTL?"1px": "0px",
      borderRightStyle:  "solid",
      borderRightColor:  `${theme.colors.gray[2]}`,
      [theme.fn.smallerThan('sm')]: {
        borderLeftWidth:"0px"
      }
    },
    cardTwoSection:{
      height:"160px",
      padding:"20px 50px",
      [theme.fn.smallerThan('sm')]: {
        padding:"10px 5px"
      }
    },
    buttonDetails:{
      width:"101px",
      [theme.fn.smallerThan('xs')]: {
        width:"100%",
      },
    }
  }));
};
