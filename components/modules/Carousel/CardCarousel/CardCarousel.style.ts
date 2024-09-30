import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from "@/themes/Mantine/typography";

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        indicator: {
            width: "10px",
            height: "10px",
            background: theme.black,
            transition: 'width 250ms ease'
        },
        control: {
            transition: 'opacity 150ms ease',
            opacity: 0,
            display: "none",
            ":hover": {
                transition: 'opacity 150ms ease',
                opacity: 0,
            }
        },
        carouselCard: {
            background: theme.colors.gray[0],
            padding: "20px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent:'space-between',
            gap: "30px",
            borderRadius: "10px",
            [`@media (max-width: 400px)`]: {
                gap: "20px",
            }
        },
    }))
}