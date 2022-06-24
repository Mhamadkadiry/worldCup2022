import Image from 'next/image';
import React from 'react'
import Layout from '../../components/Layout';
import { baseUrl, fetchApi } from '../../utils/fetchApi';

function teamDetails({fixtures,teamStats}:any) {
  return (
    <div>
        <Layout>
            <div className='max-w-7xl mx-auto mb-5 mt-5 p-2'>
                <div className='font-extrabold text-[25px] lg:text-[40px] w-full border-l-2 bg-[#ffe2f1] border-b-2 border-[#9a074f] rounded-lg p-2 mb-5 mt-5 items-center flex'><Image width={80} height={80} src={teamStats.team.logo} /><p>{teamStats.team.name}</p></div>
                <div className="grid md:grid-cols-2 md:grid-rows-1 gap-4 mb-5">
                    <div className="rounded-lg text-center bg-green-200 p-5 border-t-2 border-green-700 border-l-2">
                        <p className='text-3xl '>Goals Scored in WC2018</p>
                        <p className='text-4xl font-bold'>{teamStats.goals?.for.total.total}</p>
                    </div>
                    <div className="rounded-lg text-center bg-red-200 p-5 border-t-2 border-red-700 border-l-2">
                        <p className='text-3xl '>Goals Against in WC2018</p>
                        <p className='text-4xl font-bold'>{teamStats.goals?.against.total.total}</p>
                    </div>
                </div>
                <p className='text-2xl font-bold'>Fixtures</p>
                <div className="grid mb-52">
                    {
                        fixtures?.map((match:any) => (
                    <div className='flex items-center md:space-x-52' key={match.fixture.id}>
                        <div className='p-3'>{new Date(match.fixture.date).toLocaleDateString("en-US")}</div>
                        <div className='p-3'><Image width={60} height={60} src={match.teams.home.logo} /><p>{match.teams.home.name}</p></div>
                        <div className='p-3'>X</div>
                        <div className='p-3'><Image width={60} height={60} src={match.teams.away.logo} /><p>{match.teams.away.name}</p></div>
                    </div>
                        ))
                    }
                    
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default teamDetails
export async function getServerSideProps({ params: { id } }:any) {
    const fixtures = await fetchApi(`${baseUrl}/fixtures?team=${id}&from=2022-06-24&to=2023-01-31&league=1&season=2022`);
    const teamStats = await fetchApi(`${baseUrl}/teams/statistics?league=1&season=2018&team=${id}`);

    return {
      props: {
        fixtures: fixtures.response,
        teamStats: teamStats.response,
      },
    };
  }