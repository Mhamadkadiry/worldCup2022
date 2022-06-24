import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout'
import { baseUrl, fetchApi } from "../utils/fetchApi";

function teams({teams}:any) {
    console.log(teams);
  return (
    <Layout>
<div>
        <div className="bg-white max-w-7xl mx-auto mb-5 mt-5 p-2">
        <p className='font-extrabold text-[25px] lg:text-[40px] w-full border-l-2 bg-[#ffe2f1] border-b-2 border-[#9a074f] rounded-lg p-2 mb-5 mt-5 '>Teams</p>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    teams.map((team:any) => 
                        <div  key={team.team.id}>
                            <Link href={`/team/${team.team.id}`} passHref>
                                <div className='group cursor-pointer'>
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-[#e7c6d6] rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <Image width={350} height={500} src={team.team.logo} alt="Logo" className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{team.team.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{team.team.code}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    </div>
    </Layout>
    
  )
}
export async function getStaticProps() {
    const teams = await fetchApi(
      `${baseUrl}/teams?league=1&season=2022`
    );
    return {
      props: {
        teams: teams?.response,
      },
    };
  }
  
export default teams
