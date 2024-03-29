import React from 'react'
import Layout from '../components/Layout'

function contact() {
  return (
    <div>
        <Layout>
            <div className='max-w-7xl mx-auto mt-5 p-2 mb-52'>
                <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
                </div>

                <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" name="first-name" id="first-name"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" name="last-name" id="last-name"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label  className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" name="email-address" id="email-address"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Country</label>
                                <select id="country" name="country"  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label  className="block text-sm font-medium text-gray-700">Street address</label>
                                <input type="text" name="street-address" id="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label  className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" id="city"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">State / Province</label>
                                <input type="text" name="region" id="region"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label  className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                <input type="text" name="postal-code" id="postal-code"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label  className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea   name="message" id="message"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#9a074f] hover:bg-[#470f2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default contact