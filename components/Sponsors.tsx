import Image from 'next/image'
import Sponsor1 from '../assets/images/sponsors/1.png';
import Sponsor2 from '../assets/images/sponsors/2.png';
import Sponsor3 from '../assets/images/sponsors/3.png';
import Sponsor4 from '../assets/images/sponsors/4.png';
import Sponsor5 from '../assets/images/sponsors/5.png';
import Sponsor6 from '../assets/images/sponsors/6.png';
import Sponsor7 from '../assets/images/sponsors/7.png';

function Sponsors() {
  return (
    <div className="max-w-7xl mx-auto mb-5 mt-5 p-2">
        <p className='font-extrabold text-[25px] lg:text-[40px] w-full border-l-2 bg-[#ffe2f1] border-b-2 border-[#9a074f] rounded-lg p-2 mb-5 mt-5 '>Sponsors</p>
        <section className='flex flex-col items-center'>
            <ul className='flex overflow-x-auto gap-40 snap-x snap-mandatory'>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor1} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor2} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor3} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor4} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor5} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor6} alt='sponsor' />
                </li>
                <li className='shrink-0 snap-center'>
                    <Image width={200} height={200} src={Sponsor7} alt='sponsor' />
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Sponsors