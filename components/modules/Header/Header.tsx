import React, { useEffect, useState } from 'react'
import { Flex, Image, Box, Popover, Stack } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Header.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { translate } from '../../../i18n';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group } from '@mantine/core';
import CategoriesDropdown from '../CategoriesDropdown/CategoriesDropdown';
import { IconChevronDown, IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { useRouter } from 'next/router';

function Header() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const [openCategoriesDropdown, setOpenCategoriesDropdown] = useDisclosure(false);
    const [active, setActive] = useState(false);
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>("");
    const router = useRouter();

    const searchTextFunction = () => {
        let name = searchText.toLowerCase();
        if (name.length) {
            router.push(`./product-listing?search-product=${name}`)
        }
    };

    useEffect(() => {
        userStore.getLoginUserData().then((res) => {
            if (res.ok) {
                setShowProfile(true)
            }
        })
    }, [])

    const NavbarUserProfile = () => (
        <>{
            showProfile && userStore.userData != null ?
                (
                <Link
                    href={"/profile"}
                    className='textDecoration'
                >
                <Flex gap={10}>
                    <Image src={userStore.userData.avatar}
                        width={34}
                        radius={'50%'}
                        alt="profile_image" height={34} />
                    <Box>
                        <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                        <Flex className={classes.picBox}>
                            <BaseText c={theme.white} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} >{userStore.userData.full_name}</BaseText>
                            <IconChevronDown size={18}
                                strokeWidth={3}
                                color={theme.white} />
                        </Flex>
                    </Box>
                </Flex>
                </Link>
                )
                :
                (<Flex className={classes.loginLink}>
                    <Link className={classes.link} href={'./signup'}><BaseButton h={"30px"} style_variant={"outline"} color_variant={"blue"}><BaseText txtkey={"signUpForm.signUp"} /></BaseButton></Link>
                    <Link className={classes.link} href={'./login'}><BaseButton h={"30px"} style_variant={"outline"} color_variant={"blue"}><BaseText txtkey={"signUpForm.login"} /></BaseButton></Link>
                </Flex>)
        }</>
    )

    const NavbarUserProfileMobile = () => (
        <> {showProfile && userStore.userData ?
            (
            <Link
                href={"/profile"}
                className='textDecoration'
            >
            <Flex gap={10} h={300}>
                <Image src={userStore.userData.avatar}
                    radius={'50%'}
                    alt="profile_image" width={40} height={40} />
                <Box>
                    <BaseText c={theme.colors.blue[0]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p7} txtkey={"header.yourAccount"} />
                    <Flex className={classes.picBox}>
                        <BaseText c={theme.black} style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} >{userStore.userData.full_name}</BaseText>
                        <IconChevronDown size={18}
                            strokeWidth={3}
                        />
                    </Flex>
                </Box>
            </Flex>
            </Link>
            )
            :
            (<Stack >
                <Link className={classes.link} href={'./signup'}><BaseButton h={"30px"} style_variant={"outline"} color_variant={"blue"}><BaseText c={theme.colors.blue[6]} txtkey={"signUpForm.signUp"} /></BaseButton></Link>
                <Link className={classes.link} href={'./login'}><BaseButton h={"30px"} style_variant={"outline"} color_variant={"blue"}><BaseText c={theme.colors.blue[6]} txtkey={"signUpForm.login"} /></BaseButton></Link>
            </Stack>)}</>
    )

    return (
        <Box className={classes.containerBox}>
            <Flex className={classes.container}>
                <Image src={Images.logo} width={86} height={22} />
                <Popover
                    opened={openCategoriesDropdown}
                    onOpen={() => { setActive(true) }}
                    onClose={() => { setActive(false); setOpenCategoriesDropdown.close() }}
                    radius={30}
                    zIndex={100000}
                    position="bottom" shadow="md">
                    <Popover.Target>
                        <Flex onClick={setOpenCategoriesDropdown.toggle} className={classes.categories}>
                            <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p3} c={theme.white} txtkey={"header.allCategories"} />
                            <IconChevronDown size={18}
                                strokeWidth={3} style={active ? { transform: "rotate(180deg)" } : {}}
                                color={theme.white} />
                        </Flex>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <CategoriesDropdown setOpenCategoriesDropdown={setOpenCategoriesDropdown.close} />
                    </Popover.Dropdown>
                </Popover>
                <SearchInput w={440}
                    onKeyDown={(e: any) => {
                        if (e.key === 'Enter') {
                            setSearchText(e.target.value)
                            searchTextFunction()
                        }
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    click={() => searchTextFunction()}
                    placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Link
                    href={"./mycart"}
                >
                    <Image className={classes.cursor} src={Images.shop_icon} width={20} height={20} />
                </Link>
                <Image className={classes.cursor} src={Images.chat} width={20} height={20} />
                <Link href={'./favorite-items'}>
                    <Image className={classes.cursor} src={Images.tiptop} width={14} height={17} />
                </Link>
                <Flex className={classes.notification}>
                    <Image src={Images.notification_icon} width={19} height={19} />
                </Flex>
                <NavbarUserProfile />
            </Flex>
            <Flex className={classes.mobileMenu}>
                <Group position="center">
                    <IconMenu2 onClick={open} color={theme.white} />
                </Group>
                <Image src={Images.logo} width={86} height={22} />
                <SearchInput width={240} placeholder={`${translate("frequentlyAskedQuestions.search")}`} />
                <Drawer zIndex={100000} opened={opened} color={theme.colors.blue[6]} onClose={close} title="LOGO">
                    <NavbarUserProfileMobile />
                </Drawer>
            </Flex>
        </Box >
    )
}

export default Header