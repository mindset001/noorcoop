import React from 'react';
import Image from 'next/image';
import Bolt from '../../../../public/images/bolt.png'
import Light from '../../../../public/images/light.png'
import Feat from '../../../../public/images/feat.png'
import Sphere from '../../../../public/images/sphere.png'
import Glo from '../../../../public/images/glo.png'
import Niet from '../../../../public/images/niet.png'

const Partners = () => {
  return (
    <main className='mt-10 flex justify-center'>
        <div className="w-[80%] flex flex-col items-center my-10">
      <h3 className="text-green-500 text-sm">Our Partners</h3>
      <div className="flex justify-between w-full mt-10">
        <Image src={Bolt} alt="Boltshift" width={100} height={100} className="object-contain" />
        <Image src={Light} alt="Lightbox" width={100} height={100} className="object-contain" />
        <Image src={Feat} alt="FeatherDev" width={100} height={100} className="object-contain" />
        <Image src={Sphere} alt="Spherule" width={100} height={100} className="object-contain" />
        <Image src={Glo} alt="GlobalBank" width={100} height={100} className="object-contain" />
        <Image src={Niet} alt="Nietzsche" width={100} height={100} className="object-contain" />
      </div>
    </div>
    </main>
  );
};

export default Partners;
