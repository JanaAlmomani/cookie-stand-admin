import Link from 'next/link';
import { useAuth } from '../contexts/auth'

export default function Header() {

  const {logout} = useAuth()

  return (
    <header className=" bg-green-300 p-4 text-black flex justify-between ">
      <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
      <Link href="/overview">
        <p className="text-lg font-bold bg-green-200 px-4 py-2 rounded-lg shadow-md hover:bg-green-700">overview</p>
      </Link>
      <button className='text-lg font-bold px-4 py-2 rounded-lg shadow-md bg-green-500  hover:bg-green-700' onClick={()=>logout()}>Sign Out</button>
    </header>
    
  );
}
