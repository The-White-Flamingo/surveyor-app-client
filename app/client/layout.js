import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// import ThemeProvider from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex max-h-screen overflow-hidden bg-gray-100">
      <ProtectedRoute roles={["client"]}>

        {/* Sidebar*/}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col max-h-screen">

          {/* Topbar*/}
          <Topbar />

          {/* Scrollable Content Area */}
          <main className="flex-1 overflow-y-auto px-4 py-2 max-sm:px-1 bg-gray-100">
              {children}
            {/* {children} */}
          </main>

        </div>
        </ProtectedRoute>

      </body>
    </html>
  );
}

// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="max-w-full max-h-screen lg:overflow-hidden flex max-ms:flex max-sm:flex-col">
//         <Sidebar />

//         <div className="flex-1">
//           <Topbar />
//           <div className="px-4 py-2 max-sm:px-0">
//             {children}
//           </div>
//         </div>

//       </body>
//     </html>
//   );
// }
