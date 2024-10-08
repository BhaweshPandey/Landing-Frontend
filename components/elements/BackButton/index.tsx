import React from 'react';
import { Flex, Image } from '@mantine/core';
import { Images } from '../../../public/index';
import { useStores } from '../../../models';
import { BaseText } from '../BaseText/BaseText';
import { useRouter } from 'next/router';
import { typography } from '@/themes/Mantine/typography';

export const BackButton = (props: { heading?: string | null; navigationLink?: any }) => {
  const { i18nStore } = useStores();
  const router = useRouter();

  return (
    <Flex align={'center'} gap={'md'} className='cursor'>
      <Image
        onClick={() => {
          router.back();
        }}
        style={{
          scale: i18nStore.isRTL ? '-1' : '1',
        }}
        src={Images.back_button_icon}
        alt="icon"
        width={'24px'}
        height={'20px'}
      />
      <BaseText
        style={typography.headings[i18nStore.getCurrentLanguage()].h2}
      > {props.heading} </BaseText>
    </Flex>
  );
};