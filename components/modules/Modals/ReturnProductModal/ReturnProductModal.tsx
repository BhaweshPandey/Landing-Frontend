// react and nextb import
import React, { useState } from 'react';
// mantine component
import { Flex, Image, Radio, Stack, Text, useMantineTheme } from '@mantine/core';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
// stores import
import { useStores } from '@/models';
import I18nFlex from '@/components/elements/I18nFlex/I18nFlex';
import { typography } from '@/themes/Mantine/typography';
import { Images } from '@/public';
import { createStyle } from './ReturnProductModal.styles';
 

export const ReturnProductModal = (props: {
  opened?: any;
  onClose?: any;
  id?: string;
  setAddressRecall?: any;
}) => {
  const { i18nStore } = useStores();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const [loader, setLoader] = useState(false);
  const theme = useMantineTheme();
  const [checked, setChecked] = useState('');

  const Reason = [
    {
      id: '1',
      title: 'An item or part is missing from my order',
    },
    {
      id: '2',
      title: 'I have received a damaged or defective product',
    },
    {
      id: '3',
      title: 'I have received a wrong item',
    },
  ];

  return (
    <>
      <BaseModal
        size={'sm'}
        padding={'30px'}
        radius={'xl'}
        opened={props.opened}
        onClose={() => {
          props.onClose();
        }}
        withCloseButton={false}
      >
        <Flex justify={'space-between'} direction={'column'} h={'480px'}>
          <Stack>
            <I18nFlex justify={'space-between'} align={'center'} w={'100%'}>
              <BaseText
                txtkey="myOrder.orderDetails.return.heading"
                style={typography.label[i18nStore.getCurrentLanguage()].l4}
                color={theme.colors.dark[8]}
              />
              <Image
                src={Images.close_modal_icon}
                alt="close_modal_icon"
                width={'14px'}
                height={'14px'}
                className='cursor'
                onClick={() => {
                  props.onClose();
                }}
              />
            </I18nFlex>
            <BaseText
              mt={'10px'}
              align={i18nStore.isRTL ? 'right' : 'left'}
              txtkey="myOrder.orderDetails.return.para"
              style={typography.paragraph[i18nStore.getCurrentLanguage()].p4}
              color={theme.colors.gray[7]}
              //   mb={"30px"}
            />

            {Reason.map((item, index) => {
              return (
                <I18nFlex
                  w={'100%'}
                  align={'center'}
                  justify={'space-between'}
                  gap={'md'}
                  // my={"11px"}
                >
                  <Text style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i1}>
                    {item.title}
                  </Text>
                  <Radio
                    key={index}
                    value={item.id}
                    checked={checked == item.id ? true : false}
                    onChange={(event) => {
                      setChecked(event.target.value);
                    }}
                    classNames={{
                      radio: classes.radio,
                    }}
                  />
                </I18nFlex>
              );
            })}
          </Stack>
          <BaseButton
            fullWidth
            style_variant={'filled'}
            color_variant={'blue'}
            loading={loader}
            onClick={() => {
              props.onClose();
            }}
          >
            <BaseText txtkey="global.button.submit" />
          </BaseButton>
        </Flex>
      </BaseModal>
    </>
  );
};
