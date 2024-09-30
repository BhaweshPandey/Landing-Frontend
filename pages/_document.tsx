// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const schema = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'Krishna Business Solutions',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '4',
      },
      review: [
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Content Marketing Team',
          },
          author: {
            '@type': 'Organization',
            name: 'Pure Mountain Fun',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          datePublished: '2024-01-24',
          reviewBody:
            "I used to tackle social media solo, and then I found Krishna. What a game-changer! Their team took over content creation, scheduling, engagement – you name it. Now, I'm not just posting; I'm connecting. The difference is real, and their insightful analysis guides the way. Grateful for the collaboration – these guys know their stuff!",
        },
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Content Marketing Team',
          },
          author: {
            '@type': 'Organization',
            name: 'Batzawaj',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          datePublished: '2024-02-20',
          reviewBody:
            "Partnering with Krishna was definitely a game-changer for our business. SEO takes time but it was worth the effort and our search rankings have improved. We're seeing great results from the blog content and website changes made by Krishna team. Kudos to Vivek and his team for clear communication, tangible results and close collaboration.",
        },
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Content Marketing Team',
          },
          author: {
            '@type': 'Organization',
            name: 'ATBS',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          datePublished: '2024-01-14',
          reviewBody:
            'Big thanks to Krishna for boosting our online ads. Google, Facebook, Instagram – they’ve got it covered. From creating ad copies, to finalizing and reaching the target audiences, everything was handled well by the team. Seeing more clicks, more sales and less product returns. Can’t ask for more.',
        },
        {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Content Marketing Team',
          },
          author: {
            '@type': 'Organization',
            name: 'Sai Hospital Chains',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          datePublished: '2024-01-04',
          reviewBody:
            "Couldn't be happier with the content Krishna created. It's spot-on with what I had in mind, and it's doing the rounds on all our platforms. It's like they read my mind and turned it into content magic. Special thanks to Rajat and Shweta for adding a creative depth to our content. Definitely recommend their services!",
        },
      ],
    };

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Krishna',
      url: 'https://ikana.io/',
      logo: 'data:image/png;base64,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',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Krishna business solutions, marigold garden , Gas godam road Charrayal suyal, Haldwani',
        addressLocality: 'Nainital',
        addressRegion: 'Uttarakhand',
        postalCode: '263139',
        addressCountry: 'India',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'contact',
        telephone: '9759259905',
        email: 'Info@ikana.io',
      },
      sameAs: [
        'https://instagram.com/ikana_business_solutions',
        'https://www.linkedin.com/company/ikana-business-solutions/',
      ],
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What do you mean by content marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Content marketing is creating and sharing valuable content to attract and engage your audience. It's about informing, educating, and entertaining them, not just selling. This builds trust and positions you as an expert in your field.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why is content marketing king?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Content marketing reigns supreme because it offers a powerful way to attract and retain customers organically. By creating informative, engaging content, you establish yourself as a thought leader in your field, fostering trust with your audience. This valuable content keeps people coming back for more, and positions you as a reliable source when they're ready to make a purchase. It's a win-win for both you and your target audience.",
          },
        },
        {
          '@type': 'Question',
          name: 'What are the golden rules of content marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The golden rules of content marketing can be boiled down to three key principles:Know your audience: It all starts with understanding who you're creating content for. What are their interests, needs, and challenges? Tailor your content to resonate with them and provide solutions to their problems.Create high-quality content: This means informative, engaging, and well-written content that offers value to your audience. Whether it's blog posts, videos, infographics, or social media content, it should be clear, concise, and visually appealing.Promote and distribute your content: Great content needs to be seen! Utilize various channels to share your content, like social media, email marketing, and collaborating with influencers. Track your results and adapt your strategy based on what resonates with your audience.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is YouTube content marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes! YouTube content marketing is a powerful strategy. It uses engaging videos to reach a massive audience on YouTube, the second largest search engine globally. By creating valuable video content, you can build brand awareness and attract new customers.",
          },
        },
        {
          '@type': 'Question',
          name: ' Is content marketing paid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Content marketing itself isn't inherently paid. It focuses on creating valuable, informative content to attract an audience. This content can include blog posts, articles, social media content, videos, infographics, and more.However, there are paid aspects that can be incorporated into a content marketing strategy:Content promotion: You can pay to promote your content on social media platforms, search engines, or other websites to reach a wider audience.Content creation: While you can create content yourself, you can also pay freelance writers, videographers, or designers to create high-quality content for you.Influencer marketing: You can partner with influencers in your industry to promote your content to their audience.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I start content marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Start content marketing by:Setting goals (brand awareness, leads, sales?) Knowing your target audience Choosing content formats (blogs, videos, etc.) Brainstorming valuable content ideas Planning and creating high-quality content Promoting your content strategicallyTracking results and adapting your approach",
          },
        },
        {
          '@type': 'Question',
          name: 'How old is content marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Content marketing has a surprisingly long history, even though the term itself is relatively recent. Here's a quick breakdown: Roots in Early Advertising: Techniques like creating informative content to engage customers can be traced back centuries. Think of pamphlets or informative magazine articles from the 1800s promoting products. The Term Emerges: The phrase 'content marketing' is credited to John F. Oppedahl around 1996, coinciding with the rise of the internet. So, while the formal term is young, the core concept of using content to attract and engage an audience has been around for a long time.",
          },
        },
        {
          '@type': 'Question',
          name: 'How many types of content are there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:"The exact number of content types is difficult to pinpoint because new formats emerge all the time. It's safe to say there are well over 100 different content types. Here are some broad categories to give you an idea of the variety: Written content: Blog posts, articles, ebooks, white papers, case studies, press releases, email newsletters, etc. Visual content: Images, infographics, videos (including explainer videos, product demos, live streams), presentations, slide decks, etc. Audio content: Podcasts, interviews, audiobooks, webinars, etc. Interactive content: Quizzes, polls, contests, calculators, apps, etc. Social media content: Posts, stories, live videos, etc. Content can also be a hybrid, combining elements from different categories. For example, a blog post might include an infographic or video clip.",
          },
        },
      ],
    };
    return (
      <Html>
        <Head>
          {/* GTM container snippet */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),
                event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5XTRRH27');
              `,
            }}
          /> */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K3NJCFV');            
            `,
            }}
          />
        </Head>
        <body>
          {/* GTM noscript iframe */}
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-5XTRRH27`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K3NJCFV"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
