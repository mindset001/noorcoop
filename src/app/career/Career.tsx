import React from 'react';
import Image from 'next/image';
import Pple from '../../../public/images/pple.png'

const Careers = () => {
  const jobListings = [
    {
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      content: 'We’re looking for a mid-level product designer to join our team.',
      salaryRange: '80k - 100k',
      imageUrl: '/images/product-designer.jpg',
    },
    {
      title: 'UX Designer',
      department: 'Design',
      type: 'Full-time',
      content: 'We’re looking for a mid-level product designer to join our team.',
      salaryRange: '80k - 100k',
      imageUrl: '/images/ux-designer.jpg',
    },
  
  ];
  const jobListings2 = [
    {
      title: 'Engineering Manager',
      department: 'Software',
      type: 'Full-time',
      content: 'We’re looking for a mid-level product designer to join our team.',
      salaryRange: '80k - 100k',
      imageUrl: '/images/product-designer.jpg',
    },
    {
      title: 'Frontend Developer',
      department: 'Software',
      type: 'Full-time',
      content: 'We’re looking for a mid-level product designer to join our team.',
      salaryRange: '80k - 100k',
      imageUrl: '/images/ux-designer.jpg',
    },

    {
        title: 'Backend Beveloper',
        department: 'Software',
        type: 'Full-time',
        content: 'We’re looking for a mid-level product designer to join our team.',
        salaryRange: '80k - 100k',
        imageUrl: '/images/ux-designer.jpg',
      },
  
  ];

  const jobListings3 = [
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      type: 'Full-time',
      content: 'We’re looking for a mid-level product designer to join our team.',
      salaryRange: '80k - 100k',
      imageUrl: '/images/product-designer.jpg',
    },
  
  
  ];


  return (
   <main className='flex flex-col justify-center items-center'>
     <section className="w-[90%] md:w-[80%] py-16 bg-gray-50 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-green-500 text-sm font-semibold mb-4">Careers</h2>
        <h1 className="text-4xl font-bold mb-6">We’re looking for talented people</h1>
        <p className="text-lg mb-12 max-w-2xl mx-auto">Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.</p>
        <div className="flex justify-center mb-12">
          <Image
            src={Pple}
            alt="Team Meeting"
            width={800}
            height={400}
            className="w-full"
          />
        </div>
   
      </div>

      <div className='md:w-[70%]'>
        <h1 className='text-[#101828] text-[20px] font-[500] mb-6'>Design</h1>
      <div className="space-y-12">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white rounded-lg  p-6 border">
              <div className='flex flex-col md:flex-row gap-2'>
              <h3 className="text-[18px] font-[500] text-left text-[#101828]">{job.title}</h3>
                <div className="text-indigo-600 font-semibold bg-[#EFF8FF] rounded-[16px] p-[5px] flex gap-2 items-center">
                    <div className='bg-[#2E90FA] font-[500] rounded-full h-[6px] w-[6px]'></div>
                    {job.department}
                    </div>
              </div>
              <div>
                <p className='text-[#475467] text-[16px] font-[400]'>{job.content}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-left flex gap-4 items-center">
                 
                  <p className="text-gray-500">{job.type}</p>
                  <p className="text-gray-500">{job.salaryRange}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='md:w-[70%] mt-10'>
        <h1 className='text-[#101828] text-[20px] font-[500] mb-6'>Software Development</h1>
      <div className="space-y-12">
          {jobListings2.map((job, index) => (
            <div key={index} className="bg-white rounded-lg  p-6 border">
              <div className='flex flex-col md:flex-row  gap-2'>
              <h3 className="text-[18px] font-[500] text-left text-[#101828]">{job.title}</h3>
                <div className="text-[#C11574] font-semibold bg-[#FDF2FA] rounded-[16px] p-[5px] flex gap-2 items-center">
                    <div className='bg-[#EE46BC] font-[500] rounded-full h-[6px] w-[6px]'></div>
                    {job.department}
                    </div>
              </div>
              <div>
                <p className='text-[#475467] text-[16px] font-[400]'>{job.content}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-left flex gap-4 items-center">
                 
                  <p className="text-gray-500">{job.type}</p>
                  <p className="text-gray-500">{job.salaryRange}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='md:w-[70%] mt-10'>
        <h1 className='text-[#101828] text-[20px] font-[500] mb-6'>Customer Success</h1>
      <div className="space-y-12">
          {jobListings3.map((job, index) => (
            <div key={index} className="bg-white rounded-lg  p-6 border">
              <div className='flex flex-col md:flex-row gap-2'>
              <h3 className="text-[18px] font-[500] text-left text-[#101828]">{job.title}</h3>
                <div className="text-[#027A48] font-semibold bg-[#ECFDF3] rounded-[16px] p-[5px] flex gap-2 items-center">
                    <div className='bg-[#12B76A] font-[500] rounded-full h-[6px] w-[6px]'></div>
                    {job.department}
                    </div>
              </div>
              <div>
                <p className='text-[#475467] text-[16px] font-[400]'>{job.content}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-left flex gap-4 items-center">
                 
                  <p className="text-gray-500">{job.type}</p>
                  <p className="text-gray-500">{job.salaryRange}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </main>
  );
};

export default Careers;
