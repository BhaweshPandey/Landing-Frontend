import React from 'react'
import { Flex, Image, Box, Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Footer.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useStores } from '@/models';
import Link from 'next/link';

function Footer() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();

    const English = () => {
        i18nStore.setAppLanguage("en")
        location.reload();
    }
    const Arabic = () => {
        i18nStore.setAppLanguage("ar")
        location.reload();
    }

    return (
        <>
            <Flex>
                <Button onClick={() => English()}>English</Button>
                <Button onClick={() => Arabic()}>Arabic</Button>
            </Flex>
            <Flex className={classes.containerBox}>
                <Flex className={classes.leftBox}>
                    <Image src={Images.logo_blue} width={102} height={26} />
                    <Flex className={classes.logoBox}>
                        <Flex gap={16}>
                            <Flex className={classes.avatar}>f</Flex>
                            <Flex className={classes.avatar}>
                                <Image src={Images.instagram_icon} mt={6} width={14} height={14} />
                            </Flex>
                            <Flex className={classes.avatar}>
                                <Image src={Images.twitter_logo} mt={6} width={14} height={14} />
                            </Flex>
                        </Flex>
                        <BaseText className={classes.copyrightName} txtkey={"footer.copyrightName"} />
                    </Flex>
                </Flex>
                <Box className={classes.rightBox}>
                    <Link href={'./faq-questions-answers'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.faq"} />
                    </Link>
                    <BaseText className={classes.cursor} txtkey={"footer.chats"} />
                    <Link href={'./my-order'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.myOrders"} />
                    </Link>
                    <Link href={'./profile'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.myProfile"} />
                    </Link>
                </Box>
                <Box className={classes.rightBox}>
                    <BaseText className={classes.cursor} txtkey={"footer.aboutUs"} />
                    <Link href={'./terms-and-condition'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.termsConditions"} />
                    </Link>
                    <Link href={'./privacy-policy'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.privacyPolicy"} />
                    </Link>
                    <Link href={'./cookie-policy'} className={classes.link}>
                        <BaseText className={classes.cursor} txtkey={"footer.cookiePolicy"} />
                    </Link>
                </Box>
                <Box className={classes.logoImage}>
                    <Image src={Images.page_logo} />
                </Box>
            </Flex>


            <Flex wrap={"wrap"} className={classes.mobileFooter}>
                <Flex className={classes.leftBoxMobile}>
                    <Image src={Images.logo_blue} width={102} height={26} />
                    <Flex className={classes.logoBox}>
                        <Flex justify={"center"} gap={16}>
                            <Flex className={classes.avatar}>f</Flex>
                            <Flex className={classes.avatar}>
                                <Image src={Images.instagram_icon} mt={6} width={14} height={14} />
                            </Flex>
                            <Flex className={classes.avatar}>
                                <Image src={Images.twitter_logo} mt={6} width={14} height={14} />
                            </Flex>
                        </Flex>
                        <BaseText className={classes.copyrightName} txtkey={"footer.copyrightName"} />
                    </Flex>
                </Flex>
                <Flex wrap={"wrap"} justify={"center"} gap={"20px"}>
                    <Flex className={classes.rightBoxMobile}>
                        <Link href={'./faq-questions-answers'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.faq"} />
                        </Link>
                        <BaseText className={classes.cursor} txtkey={"footer.chats"} />
                        <Link href={'./my-order'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.myOrders"} />
                        </Link>
                        <Link href={'./profile'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.myProfile"} />
                        </Link>
                    </Flex>
                    <Flex className={classes.rightBoxMobile}>
                        <BaseText className={classes.cursor} txtkey={"footer.aboutUs"} />
                        <Link href={'./terms-and-condition'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.termsConditions"} />
                        </Link>
                        <Link href={'./privacy-policy'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.privacyPolicy"} />
                        </Link>
                        <Link href={'./cookie-policy'} className={classes.link}>
                            <BaseText className={classes.cursor} txtkey={"footer.cookiePolicy"} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer