// components/TestimonialSection.tsx
import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Woman from '../../../../public/images/woman.png'
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
  <main className='mt-20 flex justify-center items-center'>
      <section className="w-[80%] testimonial-section flex flex-col md:flex-row justify-between items-center p-6 bg-gray-50 rounded-lg">
      <div className="testimonial-image mr-6">
        <Image src={Woman} alt='efumania' className='rounded-[16px] md:w-[278px] md:h-[278px]'/>
      </div>
     <div className='w-full md:w-[55%]'>
     <div className="testimonial-content flex-1">
        <p className=" text-[20px] md:text-[38px] font-[500] mb-4 text-[#101828] mt-6">
          I was very impressed with NoorCoop and would shout it from the rooftops.
        </p>
        <p className="text-[#101828] font-[600] text-[18px] mt-6">
          &mdash; Eufemia<br />
          <span className="text-[14px] text-[#475467] font-[400]">Convenience store owner</span>
        </p>
      </div>
      <div className='w-full flex justify-between md:justify-end mt-6'>
        <button className="mr-2 p-2  rounded-full hover:bg-gray-300">
        <ArrowLeftOutlined />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-300">
        <ArrowRightOutlined />
        </button>
     
      </div>
     </div>
    </section>
  </main>
  );
};

export default TestimonialSection;
