// components/LendingFinanceSection.tsx
import React from 'react';
import { Button } from 'antd';

const LendingFinanceSection: React.FC = () => {
  return (
  <main className='flex justify-center items-center mt-20'>
      <section className="w-[80%] lending-finance-section">
      <div className="text-center mb-8">
        <span className="text-green-500 text-[16px] font-[600] mb-6">Feature</span>
        <h2 className=" text-[#101828] text-[30px] font-[600]">Lending and finance</h2>
        <p className="text-[#475467] mt-6 text-[18px] font-[400]">We finance organizations committed to making a positive impact</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 md:space-x-4 ">
        {/* Card 1 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Business loans up to £1m</h3>
          <p className=" mb-4 text-[13px] font-[400] text-[#475467]">Be part of the change</p>
          <ul className="mb-6 space-y-2 ">
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Lending from £100k to £1 million</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Your own relationship manager</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Typically up to 70% loan to security value</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4 bg-[#4F269F]">Get started</Button>
          <Button type="default" size="large" className="w-full ">Talk to a specialist</Button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Business loans over £1m</h3>
          <p className="text-[13px] font-[400] text-[#475467] mb-4">Building a positive future</p>
          <ul className="mb-6 space-y-2">
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Loans from £1 million to £20 million</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Our own relationship manager</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Typically up to 70% loan to security value</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4 bg-[#4F269F]">Get started</Button>
          <Button type="default" size="large" className="w-full">Talk to a specialist</Button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Get money from investors.</h3>
          <p className="text-[13px] font-[400] text-[#475467] mb-4">Investment to help your organization grow</p>
          <ul className="mb-6 space-y-2">
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Capital raising from £250k to £10m</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Access to a wide range of investors</li>
            <li className='text-[13px] font-[400] text-[#475467]'>✔️ Unsecured debt, bond and share offers</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4 bg-[#4F269F]">Get started</Button>
          <Button type="default" size="large" className="w-full">Talk to a specialist</Button>
        </div>
      </div>
    </section>
  </main>
  );
};

export default LendingFinanceSection;
