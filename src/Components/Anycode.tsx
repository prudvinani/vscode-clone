import swimlanecustomized from "../assets/swimlane-customized-2.png"
const Anycode = () => {
  return (
    <div className="bg-dark-bg text-white pt-14">

    <div className=" px-10  flex flex-col   md:flex-row md:justify-around md:px-24 ">
    <div className="md:pr-24">
    <p className="text-2xl font-semibold ">Code anywhere</p>
      <p className=" text-gray-400 font-semibold text-[16px] mt-5">Code wherever you're most productive, whether you're <br/> connected to the cloud, a remote repository, or in the <br/> browser with VS Code for the Web (vscode.dev).</p>
      <p className="text-[16px] text-gray-400  font-semibold mt-5"><span className="underline text-blue-400 font-semibold ">Built-in Source Control </span>  empowers you with Git support out-of-the-box. Many other  source control providers <br/> are available through extensions.</p>
      <p className="text-[16px]  text-gray-400 font-semibold mt-5"><span className="underline text-blue-400 font-semibold">GitHub Codespaces </span>  provides cloud-powered development environments for any activity - whether <br/> it's a long-term project, or a short-term task like reviewing a pull request.</p>
    </div>
    
    {/* image */}
    <div className="mt-4">
      <img src={swimlanecustomized} alt="" width={1400} height={800} />
    </div>
    </div>
          </div>
  )
}

export default Anycode