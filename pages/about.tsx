import React from 'react'
import Layout from '../components/Layout'

function about() {
  return (
    <div>
    <Layout>
        <div className="max-w-7xl mx-auto mb-24 mt-5 p-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">World Cup Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Host country details and general information.</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Country name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Qatar</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Role</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">WC2022 host country</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Money spent on WC2022</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$220 billion</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Stadiums average capacities</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">40000-8000</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Start date</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Monday, November 21</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">End date</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Sunday, December 18</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><p>
                    The 2022 FIFA World Cup is scheduled to be the 22nd running of the FIFA World Cup competition, the quadrennial international men football championship contested by the senior national teams of the member associations of FIFA. It is scheduled to take place in Qatar from 21 November to 18 December 2022. This will be the first World Cup ever to be held in the Arab world,[1] and it will be the second World Cup held entirely in Asia after the 2002 tournament was held in South Korea and Japan.[a] In addition, the tournament will be the last to involve 32 teams, with an increase to 48 teams scheduled for the 2026 tournament in the United States, Mexico, and Canada. Due to Qatar intense summer heat, this World Cup will be held from late-November to mid-December, making it the first tournament not to be held in May, June, or July; it is to be played in a reduced timeframe of around 28 days.[2] The first match played at the tournament will be contested between Senegal and the Netherlands at Al Thumama Stadium, Doha. The final is due to be held on 18 December 2022, which is also Qatar National Day. The reigning World Cup champions are France.
                        </p></dd>
                </div>

                </dl>
            </div>
            </div>

        </div>
    </Layout>
</div>
  )
}

export default about