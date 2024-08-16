import React from 'react'

function Story() {
    return (
        <main className='flex flex-col items-center mt-20'>
            <div className='w-[80%]'>
                <p className='text-[#00DC66] text-[16px] font-[600]'>Our Story</p>
                <h1 className='text-[#101828] text-[36px] font-[600] mt-4'>We’re just getting started</h1>
                <h3 className='text-[#475467] text-[18px] font-[400] mt-4'>We’ve already helped over 4,000 companies achieve remarkable results.</h3>
                <div className='flex flex-col md:flex-row justify-between mt-6'>
                    <div className='md:w-[45%]'>
                        <p className='text-[#475467] text-[16px] font-[400]'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.</p>
                        <p className='text-[#475467] text-[16px] font-[400] my-4'>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat</p>
                        <p className='text-[#475467] text-[16px] font-[400]'>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orc</p>
                    </div>
                    <div className='md:w-[45%]'>
                        <p className='text-[#475467] text-[16px] font-[400]'>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis</p>
                        <div className='ml-4'>
                        <ul className='text-[#475467] text-[16px] font-[400] my-4 flex flex-col list-disc gap-2 pl-4'>
                                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ul>
                        </div>
                        <p className='text-[#475467] text-[16px] font-[400]'>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Story