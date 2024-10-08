import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';

export default function createStyle() {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            maxWidth: "100%",
            padding: 0,
        },
        homePage: {
            flexDirection: "column",
            justifyContent: "center",
            gap: "40px",
            padding: "0px 100px 50px 100px",
            [theme.fn.smallerThan('sm')]: {
                padding: "0px 50px 50px 50px",
            },
            [theme.fn.smallerThan('xs')]: {
                padding: "0px 30px 30px 30px",
            },
        },
        apparelIcon: {
            position: "relative",
            [theme.fn.smallerThan('xs')]: {
                width: "100%"
            },
        },
        heading: {
            position: "absolute",
            color: theme.white,
            zIndex: 10001,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            ...typography.headings[i18nStore.getCurrentLanguage()].h1,
            [theme.fn.smallerThan('md')]: {
                ...typography.headings[i18nStore.getCurrentLanguage()].h5,
            },
            [theme.fn.smallerThan('xs')]: {
                ...typography.headings[i18nStore.getCurrentLanguage()].h7,
            },
        },
        productCard: {
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "30px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('sm')]: {
                justifyContent: "center",
            },
        },
        productSectionsCard: {
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        },
        control: {
            width: "10px",
            height: "10px",
            margin: "-5px -50px 0px -30px",
            [theme.fn.smallerThan('xs')]: {
                margin: "-5px -30px 0px -30px",
            },
        },
        crouselSlide: {
            display: "flex",
            justifyContent: "center"
        },
        slideBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
            width: "150px",
        },
        productHeadings: {
            width: "100%",
            [theme.fn.smallerThan('sm')]: {
                justifyContent: "center",
            }
        }
    }))
}