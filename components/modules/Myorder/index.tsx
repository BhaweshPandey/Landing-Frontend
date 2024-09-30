import React, { useState } from 'react';
import { translate } from '@/i18n';
import { Flex, Image, Input, Select, useMantineTheme } from '@mantine/core';
import { Images } from '@/public';
 
import createStyle from './SearchAndFilter.style';
import { useStores } from '@/models';

const SearchAndFilter = (props: { searchText: string; setSearchText: Function }) => {
  const theme = useMantineTheme();
  const [searchBoolean, setSearchBoolean] = useState<boolean>();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const { i18nStore } = useStores()

  const DROPDOWN_DATA = [
    {
      label: 'Most recent',
      value: 'Most recent',
    },
    {
      label: 'Oldest',
      value: 'Oldest',
    },
    {
      label: 'A-Z name',
      value: 'A-Z name',
    },
    {
      label: 'Z-A name',
      value: 'Z-A name',
    },
    {
      label: 'Highest price',
      value: 'Highest price',
    },
    {
      label: 'Lowest price',
      value: 'Lowest price',
    },
    {
      label: 'Most items',
      value: 'Most items',
    },
    {
      label: 'Least items',
      value: 'Least items',
    },
  ];
  return (
    <Flex justify={'space-between'} wrap={'wrap'} my={theme.spacing.xl}>
      <Input
        // classNames={classes}
        type={'search'}
        placeholder={`${translate('myOrder.search')}`}
        variant="filled"
        value={props.searchText}
        onChange={(e:any) => {
          props.setSearchText(e.target.value);
        }}
        w={'320px'}
        radius={theme.radius.lg}
        size="md"
        rightSection={
          props.searchText ? (
            <Image
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'10px'}
              height={'10px'}
              className='cursor'
              onClick={() => {
                props.setSearchText('');
              }}
            />
          ) : null
        }
      />
      <Select
        variant="filled"
        placeholder="Select"
        data={DROPDOWN_DATA}
        onClick={() => {
          setSearchBoolean((pre) => !pre);
        }}
        switchDirectionOnFlip
        rightSection={
          searchBoolean ? (
            <Image src={Images.dropdown_icon} alt="dropdown_icon" width={'22px'} height={'22px'} />
          ) : (
            <Image
              src={Images.dropdown_icon_down}
              alt="dropdown_icon_down"
              width={'22px'}
              height={'22px'}
            />
          )
        }
        classNames={{
          dropdown: classes.dropdown,
          input: classes.input,
          item: classes.item,
        }}
        transitionProps={{ transition: 'pop-top-left', duration: 500, timingFunction: 'ease' }}
      />
    </Flex>
  );
};

export default SearchAndFilter;
