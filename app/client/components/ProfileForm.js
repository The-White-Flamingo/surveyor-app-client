"use client"
import Image from "next/image"

export default function ProfileForm() {
  return (
    <div className="max-w-3xl bg-white rounded-lg px-3 py-1 max-sm:flex max-sm:flex-col mt-5 flex-1">
        <h3 className="font-bold">Profile Settings</h3>
        <div className="flex gap-4 items-center">
            <Image src="/profile1.png" alt="profile-pic" className="" width={100} height={100}/>
            <div className="flex flex-col">
                <p className="font-bold">Upload profile photo</p>
                <p className="text-sm text-gray-500">Profile image should be jpg,gif,png and size should not be more than 5mb</p>
                <button className="text-white max-sm:hidden rounded-lg self-start mt-2 bg-orange-600 px-4 py-2">Upload Photo</button>
            </div>
        </div>
        <button className="text-white rounded-lg self-start mt-2 bg-orange-600 px-4 py-2 lg:hidden max-sm:w-full">Upload Photo</button>
        
        <form action="" className="flex flex-col gap-4 mb-5">
            <div className="my-4 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first-name" className="font-bold">First name:</label>
                    <input type="text" name="firstname" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="first-name" className="font-bold">Last name:</label>
                    <input type="text" name="lastname" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <label htmlFor="email" className="font-bold">Email address</label>
            <input type="text" disabled className="bg-gray-100 text-gray-900 rounded-md py-1 px-4" placeholder="johndoe@example.com"/>

            <div className="mt-4 flex items-center justify-between gap-4  max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Country:</label>
                    <input type="text" name="firstname" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Phone number:</label>
                    <input type="text" name="lastname" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Residential address:</label>
                    <input type="text" name="firstname" className="border rounded-md px-3 border-gray-300"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first-name" className="font-bold">Postal address:</label>
                    <input type="text" name="lastname" className="border rounded-md px-3 border-gray-300"/>
                </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4 max-sm:flex max-sm:flex-col justify-end flex items-center gap-3">
                <span className="text-sm">Click save and update to make your changes</span>
                <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg max-sm:w-full">Save & Update</button>
            </div>
        </form>
    </div>
  )
}
