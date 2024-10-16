import smallvscodeimage from "../assets/swimlane-copilot-light.png"
const CodewithGithub = () => {
  return (
    <div className="bg-dark-bg text-white pt-14">
        <div className=" px-10  flex flex-col   md:flex-row md:justify-around md:px-24 ">
<div className="md:pr-20">
<p className="text-2xl font-semibold ">Code with GitHub Copilot</p>
  <p className="text-gray-400 font-semibold text-[16px] mt-5">Write code faster and smarter with GitHub Copilot, your AI pair programmer.</p>
  <p className="underline text-blue-400 font-semibold text-sm mt-5">Try GitHub Copilot free for 30 days</p>
  <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold ">Completions</span> present suggestions automatically to help you code more efficiently.</p>
  <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold">Copilot Chat</span>  understands the context of your code, workspace, extensions, settings, and more.</p>
  <p className="text-[16px] text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold">Inline Chat</span> enables you to iteratively generate edits and get answers to quick questions, directly on your code.</p>
</div>

{/* image */}
<div className="mt-4">
  <img src={smallvscodeimage} alt="" width={1400} height={800} />
</div>
</div>
    </div>
  )
}

export default CodewithGithub