import Image from "next/image"

type Props = {
  source: string;
  text: string
}

const FullImage = (props: Props) => {
  const { source, text } = props; 
  return (
        // {/* Full Div Image */}
    <div className='w-full relative h-80'>
      <Image
      src={source}
      height={400}
      width={400}
      alt='image'
      className='rounded-lg w-full object-cover h-full'
      /> 
      <div className='h-20 w-full bg-black rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 absolute top-0 flex justify-center items-center'>
        <p className='text-white'>{text}</p>
      </div>
    </div>
  )
}

export default FullImage