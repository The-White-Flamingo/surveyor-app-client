"use client"
export default function AccountSettings() {
  return (
    <div className="max-w-3xl bg-white rounded-lg p-3 mt-5 flex-1">
        <h3 className="font-bold">Change Password</h3>
        <form className="my-4 flex flex-col gap-3">   
            <div className="border-t-2 border-b-2 border-gray-300 flex flex-col gap-4 py-4">
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="current-password" className="text-sm font-bold">Current password:</label>
                    <input type="password" name="currentPassword" id="password" className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Enter password"/>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="" className="text-sm font-bold">New password:</label>
                    <input type="password" name="newPassword" id="password" className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Enter new password"/>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <label htmlFor="" className="text-sm font-bold">Confirm password:</label>
                    <input type="password" name="confirmPassword" id="password" className="border px-3 py-1 rounded-lg text-gray-500 flex-1" placeholder="Re-enter new password"/>
                </div>
            </div>

            <div className="flex justify-end gap-4 items-center max-sm:flex max-sm:flex-col">
                <span className="text-sm">Click save and update to make your changes</span>
                <button className="text-white bg-orange-600 px-4 py-2 rounded-lg max-sm:w-full">Save & Update</button>
            </div>

            <h3 className="font-bold">Manage Notifications</h3>
            <div className="border-t-2 border-gray-300 flex flex-col gap-5">
                <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-sm">In-app notifications</span>
                    <input type="radio" name="" id="" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">Email notifications</span>
                    <input type="radio" name="" id="" className=""/>
                </div>
            </div>
        </form>
    </div>
  )
}
