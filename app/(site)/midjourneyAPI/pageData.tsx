import { FAQType } from "@/types/faq";
import { PageHeroType } from "@/types/pageHero";

const midjourneyPageData: PageHeroType[] = [
  {
    heading1: 'Stable, cost-effective, and simple',
  heading2: 'Midjourney API',
  heading3: 'for your project!',
  paragraph1: "GoAPI provides simple, cost-effective, and easily-integrated  Midjourney API solutions, we haveve developed the API system to seamlessly integrate into your applications!",      
  paragraph2: '(a project started by indie developer, not affiliated with the official Midjourney)',  
  buttons: [
    {
      title: "Try API for free!",
      route: "/midjourney-api",
      newTab: true,
    },
    {
      title: "Documentation",
      route: "/gpt-api",
      newTab: true,
    },
    {
      title: "Join Discord",
      route: "/#",
      newTab: true,
    }, 

  ],
  image: '/images/features/cat.jpg', 
}
  
];

export default midjourneyPageData;


export const midjourneyFaqData: FAQType[] = [
  {
    id: 1,
    quest: "Does Midjourney have an API?",
    ans: "Midjourney does not have an API. GoAPI steps in as an effective tool, facilitating a streamlined interaction with Midjourney accounts to cater to your creative demands.",
  },
  {
    id: 2,
    quest: "Will Midjourney be releasing an official API?",
    ans: "It is expected that Midjourney will be releasing their own API. In the meantime, you can rely on GoAPI to work with Midjourney systematically.",
  },
  {
    id: 3,
    quest: "So how does GoAPI work?",
    ans: "With your permission (i.e. discord authorization token), we essentially call your Midjourney accounts on your behalf to generate pictures.",
  },
  {
    id: 4,
    quest: "How much of Midjourney functionality is supported?",
    ans: "We provide full access to all of Midjourney's features (even including inpainting!), and will keep updates to support any new features.",
  },
  {
    id: 5,
    quest: "How long does it take before I can make requests using GoAPI?",
    ans: "With our PPU option, you can try our service right after buying credits! With our BYOA option, you can start using our service after subscribing to a BYOA seat and connecting your Midjourney Account's Discord authorization token.",
  },
  {
    id: 6,
    quest: "Can I use the API to create Midjourney V6 images?",
    ans: "Yes you can - simply add the desired model info at the end of the prompt as you would with any other prompts.",
  },
  {
    id: 7,
    quest: "Can I receive an image seed through the API?",
    ans: "Yes you can! The seed endpoint from our Midjourney API gets the seed information in fetched result. Please see our documentation for more information.",
  },
  {
    id: 8,
    quest: "What is a webhook?",
    ans: "A webhook is a way for you to receive data from Midjourney in real time. You can use webhooks to receive data from Midjourney when a new image is created whether its an imagine, upscale, or variation command. Please see more details in our documentation.",
  },
  {
    id: 9,
    quest: "Do you offer technical support?",
    ans: "You can contact us via Discord and we can help you from there.",
  },
  {
    id: 10,
    quest: "What is your refund policy?",
    ans: "We do not offer refunds. However, you can sign up for our Dashboard and receive free quotas to generate up to 22 images to try our service before you make further purchases.",
  },
   
];