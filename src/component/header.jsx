import { Logo, Send } from "../images/img"


const Header = () => {
  return (
    <div className="headerShadow w-full">

        <div className="bg-[#2F2F2F]">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-center text-white justify-between">
                    <div className="flex items-center">
                        <img src={Logo} alt="" />
                        <h1 className="text-[32px] font-semibold">SENDLER</h1>
                    </div>
                    <div className="md:block hidden">
                        <a href="https://t.me/modevco" target="_blank"><img src={Send} className="absolute z-20 top-2" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Header