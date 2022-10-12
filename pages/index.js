import Forum from "./components/forum";
import Header from "./components/header";

export default function Home() {
  return (
   <div className='min-h-screen w-full  bg-zinc-800'>
    <div className="md:container md:mx-auto ">
        <Header/>
        <Forum/>
    </div>
   </div>
  )
}
