import integraed from "../assets/integrated.svg"
import runcode from "../assets/runcode.svg"
import versioncontrol from "../assets/versioncontrol.svg"
import buildtask from "../assets/buildtask.svg"
import localhistory from "../assets/localhistory.svg"
import themes from "../assets/theme.svg"
import accessibility from "../assets/accessibility.svg"
import websupport from "../assets/websocket.svg"
export const Feature = () => {
  return (
    <div className="bg-dark-bg text-white pt-24 pb-6">
        <p className="text-3xl font-semibold text-center " >Code with rich features</p>
        <p className='text-center mt-5 font-semibold text-gray-400'>There's a lot more to an editor. Whether  <br/>rich extensions, there's something for everyone.</p>



     <div className="md:grid  md:grid-cols-4 md:gap-6 md:px-20 mt-5 grid grid-rows-1 px-5 gap-3 ">


      <div className="border-2 border-black-200 p-5 rounded-md">
        <img src={integraed} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Integrated terminal</p>
        <p className="text-gray-400">Use your favorite shell whether it's zsh, pwsh,or git bash, all inside the editor</p>
      </div>


      <div className="border-2 border-black-200 p-5 rounded-md">
        <img src={runcode} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Run Code</p>
        <p className="text-gray-400">Run and debug your code without leaving your editor</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={versioncontrol} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Version Control</p>
        <p className="text-gray-400">Built-in support for git and many other source control providers</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={buildtask} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Build Tasks</p>
        <p className="text-gray-400">Run tools and analyze their results form within VS code</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={localhistory} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Local History</p>
        <p className="text-gray-400">Never lose your changes with automatically tracked local history</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={themes} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Themes</p>
        <p className="text-gray-400">Use your favorite shell whether it's zsh, pwsh,or git bash, all inside the editor</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={accessibility} alt="" width={30} height={30}  className="pb-2" />
        <p className="font-semibold">Accessibility</p>
        <p className="text-gray-400">Use your favorite shell whether it's zsh, pwsh,or git bash, all inside the editor</p>
      </div>


      <div className="border-2 border-black-200` p-5 rounded-md">
        <img src={websupport} alt="" width={30} height={30}  className="pb-2"/>
        <p className="font-semibold">Web Support</p>
      <p className="text-gray-400">Whether you are on your phone tablets or desktop you can access your code from anywhere</p>
      </div>






     </div>


    </div>
  )
}

