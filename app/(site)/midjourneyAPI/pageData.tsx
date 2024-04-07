import { FAQType } from "@/types/faq";
import { PageHeroType } from "@/types/pageHero";
import { BsCoin, BsCreditCard2FrontFill } from 'react-icons/bs'
import { FaServer } from 'react-icons/fa6'
import { PiCardsDuotone } from 'react-icons/pi'
import {  ReactNode } from 'react';



export interface OptionDataItem {
  title1: string;
  title2: string;
  title3: string;
  icon1:  ReactNode;
  icon2: ReactNode;
  icon3: ReactNode;
  icon1Text: string;
  icon2Text: string;
  icon3Text: string;
  list: string[];
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}



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

export const optionData: OptionDataItem[] = [
  {
    title1: 'Option 1: Use',
    title2: 'your',
    title3: "Midjourney accounts",
    icon1: <BsCreditCard2FrontFill/>,
    icon2: <PiCardsDuotone/>,
    icon3: <FaServer/>,
    icon1Text: "Sign up",
    icon2Text: "Bind your account",
    icon3Text: "Start using",
    list: ["Already have your own Midjourney account(s)?", "Want faster generation time?", "Want the best account banning prevention features?"],
    text1: "We can host your Midjourney accounts!",
    text2: "This is also called the ",
    text3: "BYOA (Bring-Your-Own Account) ",
    text4: "option. We run the largest BYOA operation in the market, with users ranging from indie-developers to large enterprise clients hosting over 50 accounts!",
  },
  {
    title1: 'Option 2: Use',
    title2: 'our',
    title3: "Midjourney accounts",
    icon1: <BsCreditCard2FrontFill/>,
    icon2: <BsCoin/>,
    icon3: <FaServer/>,
    icon1Text: "Sign up",
    icon2Text: "Top-up Credits",
    icon3Text: "Start using",
    list: ["Don't want to buy Midjourney account?", "Don't want to manage your own Midjourney accounts pool?", "Want to get started with your development work asap?"],
    text1: "Use our Midjourney accounts!",
    text2: "This is also called the ",
    text3: "PPU (pay-per-use)  ",
    text4: " option. We are the largest and most stable PPU service provider, with extensive experience in serving enterprise clients and large events.",
  },
]