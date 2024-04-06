import { SupportedModesType } from "@/app/(site)/stable-diffusion/pageData"
import Image from "next/image"
import Link from "next/link"



const StableSupportedModes = ({card}: {card: SupportedModesType}) => {
  const {image, heading, description, linkText, link, textAfterLink } = card

  if (!link) {
    console.error("Link is missing:", card);
    return null; // Or handle the missing link in some other way
  }
  return (
    <div>
      <div
      
      className="animate_top z-40 rounded-lg border border-white bg-white px-7.5 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark lg:p-5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image src={image} width={36} height={36} alt={heading}/>
      </div>
      <h3 className="my-3  text-xl font-semibold text-black dark:text-white md:mb-10 xl:text-itemtitle">
        {heading}
      </h3>
      <p>
        <span>{description} </span><Link href={link} target="_blank" className="underline text-blue-700">{linkText}</Link><span> {textAfterLink}</span>
      </p>
      
    </div>

    </div>
  )
}

export default StableSupportedModes