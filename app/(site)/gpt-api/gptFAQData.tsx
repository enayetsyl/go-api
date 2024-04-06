import { FAQType } from "@/types/faq";

const gptFaqData: FAQType[] = [
  {
    id: 1,
    quest: "Is this the official GPT API from OpenAI?",
    ans: "No, OpenAI does not have a GPTs API. Thus GoAPI steps in as an effective tool between GPTs and the developers who are looking to integrate its capabilities into their own platform.",
  },
  {
    id: 2,
    quest: "If I integrate your API, can all the users on my platform chat with any GPTs without their own ChatGPT Plus Account?",
    ans: "Yes, your users can absolutely create new conversations with any GPTs without an active OpenAI account after you integrate our API.",
  },
  {
    id: 3,
    quest: "How do I chat with the GPTs created by other people?",
    ans: "All you need to do is to find GPT ID from their URL, and append that into your API call as you can creating a new conversations.",
  },
  {
    id: 4,
    quest: "How many active conversations can I have under the PPU option?",
    ans: "If you are on the Developer Plan ($8/month), you can have 10 active conversations. If you are on the Premium Plan ($50/month) you can have 500 active conversations. Note 'active' just means you can continue send prompts in the conversation. If you are on Developer Plan and created 11th conversation, you will still be able to see your conversation history from the 1st conversation but you will no longer be able to send prompts in this conversation.",
  },
  {
    id: 5,
    quest: "How many active conversations can I have under the BYOA option?",
    ans: "There is no limit on active conversations for users on the BYOA plan.",
  },
  {
    id: 6,
    quest: "What is the concurrent usage limit under the BYOA option?",
    ans: "Each of your Plus Account is limited by OpenAI to 40 messages per 3 hours (with no additional limit from GoAPI). You can increase this limit by purchasing multiple Plus Accounts and bind them to multiple BYOA seats.",
  },
  {
    id: 7,
    quest: "What is the concurrent usage limit under the PPU option?",
    ans: "There is no concurrent usage limit under the PPU option. However, if you are trying to continue an existing conversation in an account that just happened to reach the 40 messages per 3 hours limit, you will be notified as such and won't be able to do so. You could either try again after some time, or start a new conversation.",
  },
  {
    id: 8,
    quest: "Do you offer technical support?",
    ans: "You can contact us via Discord and we can help you from there.",
  },
   
];

export default gptFaqData;
