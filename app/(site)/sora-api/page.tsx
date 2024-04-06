
import FAQ from "@/components/FAQ";
import SoraVideo from "@/components/SoraAPIVideo/SoraVideo";
import SoraWaitlist from "@/components/SoraWaitlist/SoraWaitlist";
import soraFaqData from "./soraFAQData";


type Props = {}

const SoraAPi = (props: Props) => {
  
  return (
    <div className="pt-20">
      <SoraVideo/>
      <div className="max-w-5xl mx-auto">
      <SoraWaitlist/>
      <FAQ data={soraFaqData}/>
      </div>
    </div>
  )
}

export default SoraAPi