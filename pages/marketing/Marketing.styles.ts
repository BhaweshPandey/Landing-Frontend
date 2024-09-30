import { createStyles, getStylesRef } from "@mantine/core";

export default createStyles((theme) => ({
    container: {
        width: "100%",
        height: "100%",
        // overflow: "hidden"
    },
    ikanaLogo: {
        justifyItems: 'flex-start',
        width: '100%',
        padding: '20px 0 0 50px'
    },
    heroSection: {
        padding: "20px 100px 0px 100px",
        // width: "950px",
        [`@media (max-width: 900px)`]: {
            width: "100%",
            padding: "30px",
        },
        [`@media (max-width: 600px)`]: {
            padding: "30px 10px",
        },
    },
    headingText: {
        [`@media (max-width: 900px)`]: {
            fontSize: "32px"
        },
        [`@media (max-width: 600px)`]: {
            fontSize: "22px"
        },
    },
    button: {
        // margin: "10px",
        background: theme.black,
        fontWeight: 700,
        fontSize: "15px",
        '&:not([data-disabled]):hover': {
            background: theme.black,
            borderColor: "none",
        }
    },
    mainImageBox: {
        padding: "15px 100px",
        alignItems: 'center',
        justifyContent: 'center',
        // background: theme.colors.gray[0],
        [`@media (max-width: 900px)`]: {
            width: "100%",
            padding: "30px",
        },
        [`@media (max-width: 600px)`]: {
            padding: "30px 10px",
        },
    },
    socialMediaSection: {
        padding: "60px 120px",
        width: "100%",
        background: `linear-gradient(${theme.colors.gray[0]}, transparent)`,
        [`@media (max-width: 900px)`]: {
            padding: "40px 20px",
        }
    },
    socialMediaSectionFirst: {
        gap: "20px",
        justifyContent: "space-between",
        width: "100%",
        padding: "20px 0",
        [`@media (max-width: 1157px)`]: {
            flexWrap: "wrap",
            justifyContent: "center"
        }
    },
    socialMediaTextBox: {
        width: "650px",
        padding: "30px 10px",
        [`@media (max-width: 700px)`]: {
            width: "100%",
        }
    },
    socialMediaSectionSecond: {
        gap: "20px",
        justifyContent: "space-between",
        width: "100%",
        // padding: "20px 0",
        // marginTop: "100px",
        [`@media (max-width: 1157px)`]: {
            flexWrap: "wrap",
            justifyContent: "center"
        }
    },
    reasonsSection: {
        padding: "60px 120px",
        width: "100%",
        background: `linear-gradient(${theme.colors.gray[0]}, transparent)`,
        [`@media (max-width: 900px)`]: {
            padding: "40px 20px",
        }
    },
    reasonsSectionThird: {
        gap: "20px",
        justifyContent: "space-between",
        width: "100%",
        padding: "20px 0",
        [`@media (max-width: 1157px)`]: {
            flexWrap: "wrap",
            justifyContent: "center"
        }
    },
    carouselHeading: {
        width: "600px",
        textAlign: "center",
        [`@media (max-width: 900px)`]: {
            fontSize: "32px"
        },
        [`@media (max-width: 700px)`]: {
            width: "100%",
        },
        [`@media (max-width: 600px)`]: {
            fontSize: "22px"
        },
    },
    carouselSubHeading: {
        width: "600px",
        textAlign: "center",
        [`@media (max-width: 700px)`]: {
            width: "100%",
        }
    },
    reviewSection: {
        padding: "30px 120px",
        width: "100%",
        [`@media (max-width: 700px)`]: {
            padding: "10px 20px",
        }
    },
    cardSection: {
        padding: "20px 120px",
        width: "100%",
        [`@media (max-width: 700px)`]: {
            padding: "10px 20px",
        }
    },
    touchSection: {
        padding: "10px 120px",
        width: "100%",
        background: theme.colors.gray[0],
        [`@media (max-width: 700px)`]: {
            padding: "10px 20px",
        }
    },
    card: {
        justifyContent: "space-between",
        width: "100%",
        height: "400px",
        background: theme.colors.gray[0],
        padding: "100px",
        alignItems: "center",
        borderRadius: "10px",
        gap: "20px",
        [`@media (max-width: 1200px)`]: {
            padding: "50px",
        },
        [`@media (max-width: 900px)`]: {
            justifyContent: "center",
            flexWrap: "wrap",
            height: "100%",
            padding: "30px",
        }
    },
    cardRightSection: {
        width: "650px"
    },
    headingTextBold: {
        color: theme.colors.indigo[8]
    },
    multipleExpertsBox: {
        width: "100%",
        padding: "15px 200px",
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.colors.gray[0],
        [`@media (max-width: 900px)`]: {
            padding: "30px",
        },
        [`@media (max-width: 600px)`]: {
            padding: "30px 10px",
        },
    },
    strategyBox: {
        width: "100%",
        padding: "15px 200px",
        alignItems: 'center',
        justifyContent: 'center',
        [`@media (max-width: 900px)`]: {
            padding: "30px",
        },
        [`@media (max-width: 600px)`]: {
            padding: "30px 10px",
        },
    },
    footer: {
        width: '100%',
        padding: '20px 20px 30px 20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    footerLinkBox: {
        [`@media (max-width: 700px)`]: {
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
    },
    containerSwiper: {
        width: '1400px',
        [`@media (max-width: 976px)`]: {
            width: '600px',
        },
        [`@media (max-width: 676px)`]: {
            width: '480px',
        },
        [`@media (max-width: 476px)`]: {
            width: '380px',
        },
        [`@media (max-width: 380px)`]: {
            width: '300px',
        },
    }
}));