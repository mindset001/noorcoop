// components/LendingFinanceSection.tsx
import React from 'react';
import { Button } from 'antd';

const LendingFinanceSection: React.FC = () => {
  return (
  <main className='flex justify-center items-center mt-20'>
      <section className="w-[80%] lending-finance-section">
      <div className="text-center mb-8">
        <span className="text-green-500 text-sm">Feature</span>
        <h2 className="text-4xl font-bold">Lending and finance</h2>
        <p className="text-gray-600">We finance organizations committed to making a positive impact</p>
      </div>

      <div className="flex justify-between space-x-4">
        {/* Card 1 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Business loans up to £1m</h3>
          <p className="text-gray-600 mb-4">Be part of the change</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Lending from £100k to £1 million</li>
            <li>✔️ Your own relationship manager</li>
            <li>✔️ Typically up to 70% loan to security value</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4">Get started</Button>
          <Button type="default" size="large" className="w-full">Talk to a specialist</Button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Business loans over £1m</h3>
          <p className="text-gray-600 mb-4">Building a positive future</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Loans from £1 million to £20 million</li>
            <li>✔️ Our own relationship manager</li>
            <li>✔️ Typically up to 70% loan to security value</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4">Get started</Button>
          <Button type="default" size="large" className="w-full">Talk to a specialist</Button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 shadow-md rounded-md flex-1">
          <h3 className="text-xl font-semibold">Get money from investors.</h3>
          <p className="text-gray-600 mb-4">Investment to help your organization grow</p>
          <ul className="mb-6 space-y-2">
            <li>✔️ Capital raising from £250k to £10m</li>
            <li>✔️ Access to a wide range of investors</li>
            <li>✔️ Unsecured debt, bond and share offers</li>
          </ul>
          <Button type="primary" size="large" className="w-full mb-4">Get started</Button>
          <Button type="default" size="large" className="w-full">Talk to a specialist</Button>
        </div>
      </div>
    </section>
  </main>
  );
};

export default LendingFinanceSection;
