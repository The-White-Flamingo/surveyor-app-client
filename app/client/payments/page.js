"use client";
import { FiDollarSign, FiClock, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
// import ProtectedRoute from "../components/ProtectedRoute";

export default function Payments() {
  // const nums = [1,2,3,4,5,6,7];
  const payments = [
    {
      surveyId: "123456",
      amount: 1200,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Paid"
    },
    {
      surveyId: "234123",
      amount: 1500,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Pending"
    },
    {
      surveyId: "433456",
      amount: 1700,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Expired"
    },
    {
      surveyId: "233244",
      amount: 2400,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Pending"
    },
    {
      surveyId: "982223",
      amount: 6000,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Paid"
    },
    {
      surveyId: "233211",
      amount: 3500,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Paid"
    },
    {
      surveyId: "899221",
      amount: 2000,
      date: "Jan 12 2024",
      dueDate: "July 24 2024",
      status: "Paid"
    },
  ]
  return (
    // <ProtectedRoute roles={["client"]}>
    <div>
        <div className="flex justify-start items-center gap-4 max-sm:hidden">
          <Link href={"/client/payments/payment-due"} className="bg-white rounded-lg w-56 p-2 max-md:w-44">
            <div className="flex flex-col items-center gap-2">
              {/* icon */}
              <span className="bg-amber-100 p-2 rounded-md text-amber-300"><FiDollarSign size={30}/></span>
              <span className="text-gray-400">Payment Due</span>
              <span className="font-bold text-lg">$100</span>
            </div>
          </Link>
          <Link href={"/client/payments/pending-payment"} className="bg-white rounded-lg w-56 p-2 max-md:w-44">
            <div className="flex flex-col items-center gap-2">
              {/* icon */}
              <span className="rounded-md p-2 bg-red-100 text-red-300"><FiClock size={30}/></span>
              <span className="text-gray-400">Pending Payments</span>
              <span className="font-bold text-lg">2</span>
            </div>
          </Link>
          <Link href={"/client/payments/completed-payment"} className="bg-white rounded-lg w-56 p-2 max-md:w-44">
            <div className="flex flex-col items-center gap-2">
              {/* icon */}
              <span className="rounded-md p-2 bg-emerald-100 text-emerald-300"><FiCheckCircle size={30}/></span>
              <span className="text-gray-400">Completed Payments</span>
              <span className="font-bold text-lg">2</span>
            </div>
          </Link>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h3 className="font-bold max-sm:hidden">Payments and Receipts</h3>

          <div className="flex gap-3 items-center">
            <label htmlFor="category" className="font-bold">Filter by:</label>
            <select name="" id="" className="bg-white p-1 rounded-md">
              <option value="">Payed</option>
              <option value="">Pending</option>
              <option value="">Expired</option>
            </select>

            <select name="" id="" className="bg-white p-1 rounded-md">
              <option value="">Today</option>
              <option value="">Last Month</option>
              <option value="">Last Year</option>
            </select>
          </div>

        </div>

        <div className="bg-white rounded-lg py-2 px-4 mt-4 max-w-full max-sm:px-1 max-md:px-1">
          <div className="flex justify-between items-center bg-gray-200 font-bold p-2 rounded-lg max-sm:hidden max-md:hidden">
            <span>Survey ID</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Due Date</span>
            <span>status</span>
            <span>Action</span>
          </div>
          <div className="flex flex-col gap-2 px-2">
            {payments.map((payment)=>(
              <>
                <Link key={payment.surveyId} href={`/client/payments/${payment.surveyId}`} className="flex justify-between mt-1 hover:bg-gray-100 px-4 py-2 rounded-lg items-center text-sm font-bold max-sm:hidden max-md:hidden">
                  <span>{payment.surveyId}</span>
                  <span className="ml-5">${payment.amount}</span>
                  <span>{payment.date}</span>
                  <span>{payment.dueDate}</span>
                  <span className={`${payment.status === "Paid" ? "text-emerald-300 bg-emerald-100 py-1 px-2 rounded-lg" : payment.status === "Pending" ? "text-amber-300 bg-amber-100 py-1 px-2 rounded-lg" : payment.status === "Expired" ? "text-red-300 bg-red-100 py-1 px-2 rounded-lg" : ""}`}>{payment.status}</span>
                  <span>Action</span>
                </Link>  

                <Link key={payment.surveyId} href={`/client/payments/${payment.surveyId}`} className="lg:hidden">
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2 bg-gray-200 font-bold">
                    <span className="font-bold">Invoice#</span>
                    <span className="text-gray-600">{payment.surveyId}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2">
                    <span className="font-bold">Amout</span>
                    <span className="text-gray-600">${payment.amount}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2">
                    <span className="font-bold">Date</span>
                    <span className="text-gray-600">{payment.date}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2">
                    <span className="font-bold">Date Due</span>
                    <span className="text-gray-600">{payment.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2">
                    <span className="font-bold">Status</span>
                    <span className={`${payment.status === "Paid" ? "text-emerald-300 bg-emerald-100 py-1 px-2 rounded-lg" : payment.status === "Pending" ? "text-amber-300 bg-amber-100 py-1 px-2 rounded-lg" : payment.status === "Expired" ? "text-red-300 bg-red-100 py-1 px-2 rounded-lg" : ""}`}>{payment.status}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg gap-3 px-3 py-2">
                    <span className="font-bold">Action</span>
                    <span className="text-gray-600">Action</span>
                  </div>
                </Link>
              </>
            ))}
            
          </div>
        </div>

    </div>
    // </ProtectedRoute>
  )
}
