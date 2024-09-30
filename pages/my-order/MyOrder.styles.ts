import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

export default function createStyle() {

  const {i18nStore} = useStores()

  return createStyles((theme) => ({
    tab: {
      ...theme.fn.focusStyles(),
      color: theme.colors.gray[6] ,
      marginTop: "30px",
      width:"99px",
      height:"38px",
      borderRadius: "33px",
      border:"none",
      backgroundColor: "transparent",
      ...typography.buttonText[i18nStore.getCurrentLanguage()].b4,
      padding: "10px 18px 10px 18px",
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      display: 'flex',
      alignItems: 'center',
  
      '&:hover': {
          backgroundColor: theme.colors.blue[9],
        borderColor: "none",
        color: theme.colors.blue[7],
      },
      '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
      },
  
      '&:not(:first-of-type)': {
        borderLeft: 0,
      },
      ':nth-child(2)': {
        width:"152px",
      },
      '&:last-of-type': {
        width:"152px",
      },
      '&[data-active]': {
        backgroundColor: theme.colors.blue[9],
        borderColor: "none",
        color: theme.colors.blue[7],
      },
    },
    tabsList: {
      display: 'flex',
      gap:"20px",
      border:"none"
    },
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginTop: '50px',
      ...typography.headings.en.h2,
    },
    deleteAndLogout: {
      marginTop: '',
      [theme.fn.smallerThan('xs')]: {
        marginTop: '10px',
      },
    },
    dropdown:{
      borderRadius:"19px",
      filter: `drop-shadow(0 0 0 0.15)`
    },
    input:{
      backgroundColor:"transparent",
      width:"180px",
      ...typography.headings.en.h8,
    },
    item: {
      // applies styles to selected item
      color: theme.colors.cyan[9],
      '&[data-selected]': {
        '&::before':{
          content:"close-quote"
        },
        '&, &:hover': {
          backgroundColor:"transparent",
          color: theme.colors.dark[8],
          fontWeight:"bolder"
        },
      },

      // applies styles to hovered item (with mouse or keyboard)
      '&[data-hovered]': {
        '&:hover':{
          backgroundColor:"transparent",
          color: theme.colors.dark[9],
          fontWeight:"bolder"
        }
      },
    },
  }));
};
