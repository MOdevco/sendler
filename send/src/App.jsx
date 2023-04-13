import { useState } from "react" 
import axios from "axios"
import Modal from "./component/modal"
import { Header } from "./component"

export default function App() {

  const [tel , setTel] = useState()
  const [messg , setMessg] = useState()
  const [token , setToken] = useState()
  const [isError , setError] = useState()
  const [isOpen, setOpen] = useState(true)

  const sendler = async (e) => {
    e.preventDefault()
    
    if (tel) {
      await axios.post('https://notify.eskiz.uz/api/message/sms/send',
        {
          mobile_phone: tel,
          message: messg,
          from: 4546,
          callback_url: "http://0000.uz/test.php"
        },
        { headers: {Authorization: `Bearer ${token}`} },
        setTel(''),
        setMessg('')
      ).then(() => {
        setTel('')
        setMessg('')
      })
    } else {
      setError("Biron nima yozing...")
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }


  return (
    <div className="bg-[#2F2F2F] h-screen">
      <Header />

      
      <div className="flex justify-center items-center h-5/6">

      {

        isOpen ?
        <Modal>
          <div className="flex flex-col justify-center items-center min-h-full h-full relative">
            <form className=" flex flex-col w-full " >
              <label  htmlFor="" className="text-white text-[22px]">Eskiz.uz saytidan olingan token:</label><br />
              <input type="text" className="border-[2px] rounded-[8px] max-w-[409px] w-full h-[41px] bg-[#3C3C3C] btn border-[#4C4C4C] text-white flex items-center px-4 focus:ring-2 ring-gray-600 outline-0" value={token} onChange={e => setToken(e.target.value)} placeholder="Token...."/><br /><br />

              <button type="submit" onClick={() => setOpen(false)} className="text-white text-lg absolute -bottom-12 right-0  bg-[#3C3C3C] px-[40px] py-[10px] rounded-[8px] btn hover:bg-[#363535]" >kiyingi</button>

            </form>
          </div>
        </Modal>
        :
        <Modal>
          <div className=" relative flex flex-col justify-center items-start min-h-full h-full">
            <p className="text-xl text-white">{isError}</p>
            <form onSubmit={(e) => sendler(e)} className=" flex flex-col" >
              <label htmlFor="" className="text-white text-[22px]">Qabul qiluvchi foydalanuvchining telefon raqami:</label><br />
              <input type="number" className="border-[2px] rounded-[8px] max-w-[409px] w-full h-[41px] bg-[#3C3C3C] btn border-[#4C4C4C] text-white flex items-center px-4 focus:ring-2 ring-gray-600 outline-0" value={tel} onChange={e => setTel(e.target.value)} placeholder="Telefon Raqam...."/><br /><br />
              

              <label htmlFor="" className="text-white text-[22px]">Jo’natilishi kerak bo’lgan xabar:</label><br />
              <textarea  name="" id="" cols="30" rows="10" className="border-[2px] p-2 rounded-[8px] max-w-[409px] w-full h-[100px] md:h-[175px] bg-[#3C3C3C] btn border-[#4C4C4C] text-white flex items-center px-4 focus:ring-2 ring-gray-600 outline-0" value={messg} onChange={e => setMessg(e.target.value)} placeholder="Habar...."></textarea>

              <button type="submit" className="text-white text-lg absolute -bottom-12 right-0  bg-[#3C3C3C] px-[40px] py-[10px] rounded-[8px] btn hover:bg-[#363535]" >Jo’natish</button>


            </form>
          </div>
        </Modal>
      }
      </div>

    </div>
  )
}