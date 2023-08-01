import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "../components/Home";
import Login from "../components/Login";
import { useAuth } from "../contexts/auth";


import useResource from '../hooks/useResource';


export default function startcode() {
  const {resource, loading, createResource, deleteResource} = useResource();
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <>
          <Header />
          <CreateForm onCreate={createResource} />
          <StandList data={resource} loading={loading} onDelete={deleteResource} />
          <Footer/>
        </>)
        : (<Login />)}
    </>
  );
}


function CreateForm({ onCreate }) {

  function handleSubmit(event) {
    event.preventDefault();
    const standInfo = {
      
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.min.value, 
      maximum_customers_per_hour: event.target.max.value,
      average_cookies_per_sale: event.target.avg.value,
    };
    onCreate(standInfo);
    event.target.reset();
  }
  return (
    <form
      className=" flex flex-col items-center w-3/5 p-4 m-8 bg-green-300 rounded-md shadow-2xl text-black-500"
      onSubmit={handleSubmit}>
      <h2 className="mb-8 font-serif text-2xl font-bold text-black-500">Create Cookie Stand</h2>

      <label className="flex w-full gap-2 mb-12 text-black-500 font-serif">
        <span className="font-bold">Location</span>
        <input className="w-full text-black-500" type="text" name="location" />
      </label>

      <div className="flex flex-col gap-8 lg:flex-row font-serif">
        <label className="flex flex-col text-black-500">
          <span className="font-bold">Minimum Customers per Hour</span>
          <input className="text-black-500" type="number" name="min" />
        </label>
        <label className="flex flex-col text-black-500 font-serif">
          <span className="font-bold">Maximum Customers per Hour</span>
          <input className="text-black-500" type="number" name="max" />
        </label>
        <label className="flex flex-col text-black-500 font-serif">
          <span className="font-bold">Average Cookies per Sale</span>
          <input className="text-black-500" type="number" name="avg" />
        </label>

        <button className="p-8 bg-green-500 shadow-2xl text-black-500 hover:bg-green-700 font-bold font-serif" type="submit">
          Create
        </button>
      </div>

    </form>

  );
}


function StandList({data, loading, onDelete}) {

  if(loading) return <p>Loading ...</p>
  return(
      <>
       <h3 className="text-xl">Cookies Stand List</h3>
      {data.map(item =>(
          <li key={item.id}>
              <span>{item.location}</span>
              <span onClick={() => onDelete(item.id)}>[X]</span>
          </li>
      ))}

      </>
  )
}


