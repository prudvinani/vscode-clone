import x from "../assets/x-icon.svg"
import github from "../assets/github-icon.svg"
import youtube from "../assets/youtube-icon (1).svg"
import microsoft from "../assets/microsoft.svg"
const Footer = () => {
  return (
    <div className="flex justify-between px-24  pb-20 bg-dark-bg text-white pt-10">
        <div className="flex">
            <img src={x} alt="" width={20} height={20} className="mr-3 cursor-pointer" />
            <img src={github} alt="" width={30} height={30}  className="mr-3 cursor-pointer"   />
            <img src={youtube} alt="" width={30} height={30} className="mr-3 cursor-pointer"  />

          


        </div>

        <div>

            <img src={microsoft} alt="" />

        </div>
    </div>
  )
}

export default Footer