
type Props = {}

const PostAPIBox = ({api}: {api: string}) => {
  return (
    <div className="flex justify-start gap-2 items-center  overflow-x-scroll pb-3">
      <button className="bg-slate-950 px-3 py-2 rounded-md pointer-events-none text-sm text-white">POST</button>
      <p className="text-lg to-white">{api}</p>
    </div>
  )
}

export default PostAPIBox