
type Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  
}

const ImagineApiReq = (props: Props) => {
  const { text1, text2, text3, text4, text5, text6 } = props
  return (
    <div className="front-card mx-10 sm:mx-0 ">
      <div className=" flex  items-start gap-2 text-sm  text-white overflow-x-scroll ">
      <div className="">
        <p>{text1}</p>
      </div>
      <div >
        <p>{text2}</p>
        <p>{text3} </p>
        <p>{text4}</p>
        <p>{text5}</p>
        <p>{text6}</p>
        </div>
      </div>
    </div>
  )
}

export default ImagineApiReq