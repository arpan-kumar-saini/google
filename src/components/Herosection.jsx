import React from 'react'

function Herosection() {
  return (
    <div className='h-[510px] bg-[#202124] '>
      <div className='text-[#9aa0a6] text-sm mt-2   ml-[254px]' >About 22,60,00,000 results (0.41 seconds)</div>
      <div className='h-[100px] mt-[30px]  ml-6 flex'>
        <div className='ml-[230px]' >
          <div className='text-white text-3xl'>
              Apan Saini
          </div>
          <div className=' mt-2 flex'>
            <div className='text-white text-sm'>A Front-end Developer</div>
            <div className=''><svg focusable="false" className='fill-white h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></div>
          </div>
        </div>
        <div className='flex ml-[380px] mt-[-10px]'>
          <a href=""><div className='border2 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px]  text-center pt-3 bg-[#3a3f50] text-white '>Overview</div></a>
          <a href=""> <div className='border1 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px] ml-[10px] text-center pt-3 bg-[#3a3f50] text-white '>Videos</div></a>
          <a href=""> <div className='border1 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px] ml-[10px] text-center pt-3 bg-[#3a3f50] text-white '>Relationships</div></a>
          <a href=""><div className='border1 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px] ml-[10px] text-center pt-3  bg-[#3a3f50] text-white'>Listen</div></a>
          <a href=""><div className='border1 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px] ml-[10px] text-center pt-3  bg-[#3a3f50] text-white'>Songs</div></a>
          <a href=""><div className='border1 px-5 text-sm  h-[45px] rounded-[25px] mt-[25px] ml-[10px] text-center pt-3  bg-[#3a3f50] text-white'>Products</div></a>                      
        </div>
      </div>
      <div className=' h-[365px] ml-[200px] mt-[-10px] bg-gradient-to-t from-[#80adf515] to-transparent bg-opacity-5  w-[1350px]'>
        <div className='flex ml-[50px]'>
          <div>
              <img src="/images/pic3.jpg" className='h-[340px] rounded-l-3xl' alt="" />
          </div>
          <div className=''>
            <div>
              <img src="/images/pic12.jpg" className='h-[170px] rounded-tr-3xl w-[240px] ml-1' alt="" />
            </div>
            <div >
              <img src="/images/pic10.jpg" className='h-[170px] rounded-br-3xl w-[240px] ml-1 mt-1' alt="" />
              <a href="">
                <div ><svg focusable="false" className='fill-white h-5 mt-[-30px] ml-[210px]' viewBox="0 0 24 24"><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path></svg></div>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Herosection