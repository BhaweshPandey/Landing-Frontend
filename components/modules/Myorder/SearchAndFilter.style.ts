import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

const createStyle = () => {

  const {i18nStore} = useStores()

  return createStyles((theme) => ({
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
export default createStyle
