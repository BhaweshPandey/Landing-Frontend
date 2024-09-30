import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';

export default function createStyle() {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            maxWidth: "100%",
            // width: "1520px",
            // margin: 0,
            padding: 0,
        },
        filterSectionsCard: {
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        },
        homePage: {
            flexDirection: "column",
            gap: "40px",
            padding: "50px 150px",
            [theme.fn.smallerThan('lg')]: {
                padding: "50px 100px",
            },
            [theme.fn.smallerThan('sm')]: {
                padding: "50px",
            },
            [theme.fn.smallerThan('xs')]: {
                padding: "30px",
            },
        },
        cursor: {
            cursor: "pointer"
        },
        control: {
            outline: "none",
            border: "none",
            outlineColor: theme.colors.dark[6],
            color: theme.colors.dark[6],
            backgroundColor: theme.white,
            "&[data-active]": {
                backgroundColor: "transparent",
                color: theme.colors.blue[6],
                fontWeight: 600,
                fontSize: "16px",
                "&:not([data-disabled]):hover": {
                    backgroundColor: "transparent"
                }
            },
            "&[data-disabled]": {
                backgroundColor: theme.colors.gray[4],
                color: theme.colors.dark[6]
            },
        },
        paginationGroup: {
            gap: "10px",
            [theme.fn.smallerThan('sm')]: {
                gap: "5px",
            },
            [theme.fn.smallerThan('xs')]: {
                gap: "0px",
            },
        },
        pagination: {
            justifyContent: "flex-end",
            // marginLeft: "400px",
            marginRight: "300px",
            marginLeft: "300px",
            [theme.fn.smallerThan('lg')]: {
                marginRight: "200px",
                marginLeft: "200px",
            },
            [theme.fn.smallerThan('md')]: {
                marginLeft: "150px",
                marginRight: "150px",
            },
            [theme.fn.smallerThan('sm')]: {
                marginLeft: "100px",
                marginRight: "100px",
            },
            [theme.fn.smallerThan('xs')]: {
                marginRight: "50px",
                marginLeft: "50px",
            },
        },
        paginationIcon: {
            backgroundColor: theme.colors.indigo[0],
            transform: `${i18nStore.isRTL ? `rotate(180deg)` : ""}`,
            color: theme.colors.blue[7]
        }
    }))
}