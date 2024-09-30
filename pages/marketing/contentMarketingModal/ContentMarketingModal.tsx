// react and nextb import
import React, { useState } from 'react';
// mantine component
import { Box, Flex, Image , useMantineTheme } from '@mantine/core';
// styles components
import createStyle from './ContentMarketingModal.styles';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { Input } from '@/components/elements/Input/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object({
  website_url: yup.string().required(`${translate("authentication.required")}`),
  instagram_account_url: yup.string(),//.required(`${translate("authentication.required")}`),
  facebook_account_url: yup.string(),//.required(`${translate("authentication.required")}`),
  tiktok_handle: yup.string(),//.required(`${translate("authentication.required")}`),
  x_account_handle: yup.string(),//.required(`${translate("authentication.required")}`),
  email: yup.string().email(`${translate("authentication.invalidEmail")}`).required(`${translate("authentication.required")}`),
  name: yup.string().required(`${translate("authentication.required")}`),
}).required();
type FormData = yup.InferType<typeof schema>;

export const ContentMarketingModal = (props: {
  opened?: any;
  onClose?: any;
}) => {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState("");
  const { classes } = useStyles();

  const contentMarketingForm = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data:Record<string,string>) => {
    const formData=new FormData
    Object.keys(data).map((k)=>{
      formData.append(k,data[k])
    })
    try {
      const getCSRF=await axios.get("https://blog-backend.ikana.io/blogs/api/v2/get-csrf",{
          withCredentials:true
      })      
      const response = await axios.post(
        //'https://script.google.com/a/macros/ikana.io/s/AKfycbyUX2W2x5Ir4lYLHMvF3Zg68wTqZK6m5AWYijdkXrt9jnfzyPim2wdTZxmzAWHMp4-S/exec',
        'https://blog-backend.ikana.io/audit-form/',
        formData, 
        {
          withCredentials:true,
          headers: {
          //  'Token': 'AKfycbyUX2W2x5Ir4lYLHMvF3Zg68wTqZK6m5AWYijdkXrt9jnfzyPim2wdTZxmzAWHMp4-S',
            "X-CSRFToken":getCSRF.data["csrfToken"]
          }
        }
      );
      console.log('Form submitted successfully!', response.data);
      contentMarketingForm.reset();
      props.onClose(); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
      <BaseModal
        size={'lg'}
        padding={'30px'}
        radius={'xl'}
        opened={props.opened}
        onClose={() => {
          props.onClose();
          contentMarketingForm.reset();
        }}
        withCloseButton={false}
        styles={{
          overlay: {
            zIndex: 999
          },
          inner: {
            zIndex: 9999999
          }
        }}
      >
        <form
          // method="POST"
          // action="https://script.google.com/a/macros/ikana.io/s/AKfycbyUX2W2x5Ir4lYLHMvF3Zg68wTqZK6m5AWYijdkXrt9jnfzyPim2wdTZxmzAWHMp4-S/exec"
          onSubmit={contentMarketingForm.handleSubmit(onSubmit)}>
          <Flex
            direction={i18nStore.isRTL ? 'row-reverse' : 'row'}
            justify={'space-between'}
            align={'center'}
          >
            <BaseText
              style={typography.headings[i18nStore.getCurrentLanguage()].h2}
              color={theme.colors.dark[8]}
            >
              Social Media and Website Audit
            </BaseText>
            <Image
              onClick={() => {
                props.onClose();
                contentMarketingForm.reset();
              }}
              className='cursor'
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>
          <BaseText
            style={typography.paragraph[i18nStore.getCurrentLanguage()].p8}
            color={theme.colors.dark[8]}
            mt={20}
          >
            Take a few minutes to complete our Digital brand Evaluation Form. We will analyze your Social Media Accounts and Email you a detailed Audit report PDF for each platform.
          </BaseText>

          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              Website URL
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter URL'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.website_url?.message}
              inputvalue={contentMarketingForm.register("website_url")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              Instagram Account URL
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter URL'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.instagram_account_url?.message}
              inputvalue={contentMarketingForm.register("instagram_account_url")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              Facebook Account URL
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter URL'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.facebook_account_url?.message}
              inputvalue={contentMarketingForm.register("facebook_account_url")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              TikTok Handle
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter URL'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.tiktok_handle?.message}
              inputvalue={contentMarketingForm.register("tiktok_handle")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              X Account Handle
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter URL'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.x_account_handle?.message}
              inputvalue={contentMarketingForm.register("x_account_handle")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              Email
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter your email'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.email?.message}
              inputvalue={contentMarketingForm.register("email")}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              color={theme.black}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            >
              Name
            </BaseText>
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={'Enter your name'}
              style_variant={'inputText2'}
              component={'input'}
              error={contentMarketingForm.formState.errors.name?.message}
              inputvalue={contentMarketingForm.register("name")}
            />
          </Box>
          <BaseButton
            mt={'30px'}
            loading={loader}
            style_variant={'filled'}
            color_variant={'blue'}
            type='submit'
            onClick={() => {
              // props.onClose()
            }}
          >
            <BaseText > Submit </BaseText>
          </BaseButton>
        </form>
      </BaseModal>
    </>
  );
};

export default ContentMarketingModal