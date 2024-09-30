import React, { useState } from 'react';
import { Container, Title, Accordion, Text } from '@mantine/core';
import classes from './Faq.module.css';

const Faq = () => {
  //   const placeholder =
  //     'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';
  const [openItemId, setOpenItemId] = useState(null);
  const FaqItems = [
    {
      id: 1,
      value: '1',
      question: 'What do you mean by content marketing?',
      answer:
        "Content marketing is creating and sharing valuable content to attract and engage your audience. It's about informing, educating, and entertaining them, not just selling. This builds trust and positions you as an expert in your field.",
    },
    {
      id: 2,
      question: 'Why is content marketing king?',
      value: '2',
      answer:
        "Content marketing reigns supreme because it offers a powerful way to attract and retain customers organically. By creating informative, engaging content, you establish yourself as a thought leader in your field, fostering trust with your audience. This valuable content keeps people coming back for more, and positions you as a reliable source when they're ready to make a purchase. It's a win-win for both you and your target audience.",
    },
    {
      id: 3,
      value: '3',
      question: 'What are the golden rules of content marketing?',
      answer: `The golden rules of content marketing can be boiled down to three key principles:
        Know your audience: It all starts with understanding who you're creating content for. What are their interests, needs, and challenges? Tailor your content to resonate with them and provide solutions to their problems.
        Create high-quality content: This means informative, engaging, and well-written content that offers value to your audience. Whether it's blog posts, videos, infographics, or social media content, it should be clear, concise, and visually appealing.
        Promote and distribute your content: Great content needs to be seen! Utilize various channels to share your content, like social media, email marketing, and collaborating with influencers. Track your results and adapt your strategy based on what resonates with your audience.
        `,
    },
    {
      id: 4,
      value: '4',
      question: 'Is YouTube content marketing?',
      answer:
        'Yes! YouTube content marketing is a powerful strategy. It uses engaging videos to reach a massive audience on YouTube, the second largest search engine globally. By creating valuable video content, you can build brand awareness and attract new customers.',
    },
    {
      id: 5,
      value: '5',
      question: 'Is content marketing paid?',
      answer: `Content marketing itself isn't inherently paid. It focuses on creating valuable, informative content to attract an audience. This content can include blog posts, articles, social media content, videos, infographics, and more.
        However, there are paid aspects that can be incorporated into a content marketing strategy:
        Content promotion: You can pay to promote your content on social media platforms, search engines, or other websites to reach a wider audience.
        Content creation: While you can create content yourself, you can also pay freelance writers, videographers, or designers to create high-quality content for you.
        Influencer marketing: You can partner with influencers in your industry to promote your content to their audience.`,
    },
    {
      id: 6,
      value: '6',
      question: 'How do I start content marketing?',
      answer: `Start content marketing by:
        1.Setting goals (brand awareness, leads, sales?)
        2.Knowing your target audience
        3.Choosing content formats (blogs, videos, etc.)
        4.Brainstorming valuable content ideas
        5.Planning and creating high-quality content
        6.Promoting your content strategically
        7.Tracking results and adapting your approach
        `,
    },
    {
      id: 7,
      value: '7',
      question: 'How old is content marketing?',
      answer: `Content marketing has a surprisingly long history, even though the term itself is relatively recent. Here's a quick breakdown:
        Roots in Early Advertising: Techniques like creating informative content to engage customers can be traced back centuries. Think of pamphlets or informative magazine articles from the 1800s promoting products.
        The Term Emerges: The phrase "content marketing" is credited to John F. Oppedahl around 1996, coinciding with the rise of the internet.
        So, while the formal term is young, the core concept of using content to attract and engage an audience has been around for a long time.`,
    },
    {
      id: 8,
      value: '8',
      question: 'How many types of content are there?',
      answer: `The exact number of content types is difficult to pinpoint because new formats emerge all the time. It's safe to say there are well over 100 different content types.
        Here are some broad categories to give you an idea of the variety:
        Written content: Blog posts, articles, ebooks, white papers, case studies, press releases, email newsletters, etc.
        Visual content: Images, infographics, videos (including explainer videos, product demos, live streams), presentations, slide decks, etc.
        Audio content: Podcasts, interviews, audiobooks, webinars, etc.
        Interactive content: Quizzes, polls, contests, calculators, apps, etc.
        Social media content: Posts, stories, live videos, etc.
        Content can also be a hybrid, combining elements from different categories. For example, a blog post might include an infographic or video clip.
        `,
    },
  ];
  return (
    <Container size="sm" className={classes.wrapper}>
      <h2>
        <Text ta="center" className={classes.title} fz={40} fw={700}>
          Frequently Asked Questions
        </Text>
      </h2>
      <Accordion variant="separated" defaultValue="1">
        {FaqItems.map((faqItemsData) => {
          return (
            <Accordion.Item
              className={classes.item}
              value={faqItemsData.value}
              key={faqItemsData.id}
            >
              <Accordion.Control style={{ lineHeight: '20px' }}>
                {faqItemsData.question}
              </Accordion.Control>
              <Accordion.Panel>{faqItemsData.answer}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Faq;
