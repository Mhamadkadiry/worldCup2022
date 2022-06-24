import React from 'react'
import Layout from '../components/Layout'

function about() {
  return (
    <div>
    <Layout>
        <div className='max-w-7xl mx-auto mb-5 mt-5 p-2'>
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
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Qataris a country in Western Asia. It occupies the small Qatar Peninsula on the northeastern coast of the Arabian Peninsula, and shares its sole land border with neighbouring Gulf Cooperation Council monarchy Saudi Arabia to the south, with the rest of its territory surrounded by the Persian Gulf. The Gulf of Bahrain, an inlet of the Persian Gulf, separates Qatar from nearby Bahrain. The capital is Doha, home to over 80% of the nation's population.

                        Qatar has been ruled as a hereditary monarchy by the House of Thani since Mohammed bin Thani signed a treaty with the British in 1868 that recognised its separate status. Following Ottoman rule, Qatar became a British protectorate in the early 20th century until gaining independence in 1971. The current emir is Tamim bin Hamad Al Thani, who holds nearly all executive and legislative authority under the Constitution of Qatar, as well as controlling the judiciary.[14] He appoints the prime minister and cabinet. The partially-elected Consultative Assembly can block legislation and has a limited ability to dismiss ministers.

                        In early 2017, Qatar's total population was 2.6 million: 313,000 Qatari citizens and 2.3 million expatriates.[15] Its official religion is Islam.[16] In terms of income, the country has the fourth-highest GDP (PPP) per capita in the world,[17] and the sixth-highest GNI per capita (Atlas method).[18] Qatar has the third-highest HDI in the Arab world.[19] It is a high-income economy, backed by the world's third-largest natural gas reserves and oil reserves.[20] Qatar is the world's largest exporter of liquefied natural gas,[21] and the world's largest emitter of carbon dioxide per capita.[22]

                        In the 21st century, Qatar emerged as a middle power in the Arab world through its resource-wealth,[23][24] as well as its globally expanding media group, Al Jazeera Media Network, and reportedly supporting several rebel groups financially during the Arab Spring.[25][26][27] Qatar's human rights record has been regarded by academics and non-governmental organisations as being generally poor, with restrictions on civil liberties such as the freedoms of assocation, expression and the press, as well as its treatment of thousands of migrant workers amounting to forced labour for projects in the country.[28][29] The 2022 FIFA World Cup will be held in Qatar, making it the first Muslim and Arab country to host the event.[30] The 2030 Asian Games will also be held in Qatar,[31] as were the 2006 Asian Games</dd>
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