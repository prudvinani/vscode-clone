import swimlaneanywhere from "../assets/swimlane-anywhere-2.png"
const FullyCustomized = () => {
  return (
    <div className="bg-dark-bg text-white w-full pt-24  ">


    <div className=" px-10  flex flex-col   md:flex-row md:justify-around md:px-24  ">
    <div className="md:pr-20">
    <p className="text-2xl font-semibold ">Fully customizable</p>
      <p className="text-gray-400 font-semibold text-[16px] mt-5">Customize your VS Code UI and layout so that it fits your coding style.</p>
      <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold ">Color themes</span> let you modify the colors in VS Code's user interface to suit your preferences and work environment.
    
    </p>
      <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold">Settings Sync</span> enables you to share your user settings across your VS Code instances with the Settings Sync feature..</p>
      <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold">Profiles </span>let you create sets of customizations and quickly switch between them or share them with others.</p>
    </div>
    
    {/* image */}
    <div className="mt-4">
      <img src={swimlaneanywhere} alt="" width={1400} height={800} />
    </div>
    </div></div>
  )
}

export default FullyCustomized