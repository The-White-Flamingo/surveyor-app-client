"use client"
export default function BillingInfo() {
  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
        <h3 className="font-bold">Billing Information</h3>
        <form action="" className="flex flex-col gap-4 mb-5">
            <div className="mt-4 flex items-center justify-between gap-4  max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">First name:</label>
                    <input type="text" name="firstname" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="last-name" className="font-bold">Last name:</label>
                    <input type="text" name="last-name" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="country" className="font-bold">Country:</label>
                    <select type="text" name="country" className="border rounded-md px-3 border-gray-300 p-1">
                        <option value="united state">United States</option>
                        <option value="united kingdom">United Kingdom</option>
                        <option value="canada">Canada</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="company-title" className="font-bold">Company title:</label>
                    <input type="text" name="company-title" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="city" className="font-bold">City:</label>
                    <input type="text" name="city" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="address" className="font-bold">Address:</label>
                    <input type="text" name="address" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="postal-code" className="font-bold">Postal Code:</label>
                    <input type="text" name="postal-code" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input type="text" name="email" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="phone-number" className="font-bold">Phone:</label>
                    <input type="text" name="phone-number" className="border w-1/2 rounded-md px-3 border-gray-300"/>
                </div>
                {/* <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Email:</label>
                    <input type="text" name="lastname" className="border rounded-md px-3 border-gray-300"/>
                </div> */}
            </div> 

            <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
                <span className="text-sm">Click save and update to make your changes</span>
                <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
            </div>
        </form>
    </div>
  )
}
