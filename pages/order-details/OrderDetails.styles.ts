import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

export default function createStyle() {
  const { i18nStore } = useStores()

  return createStyles((theme) => ({
    gridConatiner:{
      backgroundColor:`${theme.colors.dark[0]}`,
      borderRadius:"20px",
    },
    title: {
      ...typography.label[i18nStore.getCurrentLanguage()].h2,
    },
    cardTwoSection:{
      borderLeftWidth:"1px",
      borderLeftStyle:"solid",
      borderLeftColor:`${theme.colors.gray[2]}`,
      padding:"10px 40px",
      [theme.fn.smallerThan('md')]: {
        borderLeftWidth:"0px",
        padding:"10px 5px"
      },
    },
    cardTwoSectionisRtl:{
      borderRightWidth:"1px",
      borderRightStyle:"solid",
      borderRightColor:`${theme.colors.gray[2]}`,
      padding:"10px 40px",
      [theme.fn.smallerThan('md')]: {
        borderRightWidth:"0px",
        padding:"10px 5px"
      },
    },
    stackMargin:{
      marginBottom:"0px",
      [theme.fn.smallerThan('xs')]: {
        marginBottom:"10px"
      }
    },
    orderDetailsProducts:{
      borderWidth:"1px",
      borderStyle:"solid",
      borderColor:theme.colors.gray[3],
      borderRadius:"22px",
      marginTop:"14px",
      padding:"16px 24px",
      width:"100%"
    },
    boxStyle:{
      height:"22px",
      width:"50px",
      borderRadius:"39px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderWidth:"1px",
      borderStyle:"solid",
      borderColor:theme.colors.gray[3],
    },
    productCardDescription:{
      marginTop:"50px",
      [theme.fn.smallerThan('xs')]: {
        marginTop:"10px"
      }
    }
  }));
};
