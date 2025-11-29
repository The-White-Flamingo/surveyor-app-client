import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <nav className="flex items-center justify-around mt-4 text-white">
        <div class="logo text-2xl"> SURVEYOR APP</div>
        <div class="contact-us bg-orange-600 px-4 py-2 hover:bg-orange-700"> <Link href={"/login"}>Login</Link></div>
      </nav>
      <div class="hero-heading bg-black text-white">
          <h1>Welcome</h1>
          <p>Surveyor App is a digital platform that delivers a holistic and seamless 
              solution to develop, deploy and operate space 
              infrastructure in a time and cost-effective manner</p>
          <Link href={"/signup"} className="bg-orange-600 px-4 py-2 hover:bg-orange-700">Sign UP</Link>
      </div>
    </div>
  );
}
