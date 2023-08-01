import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "../components/Login";
import { useAuth } from "../contexts/auth";
import { hours } from '../data';
import useResource from '../hooks/useResource';

export default function startcode() {
  const {resource, loading, createResource, deleteResource, numLocations } = useResource();
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <>
          <Header />
          <CreateForm onCreate={createResource} />
          <StandList data={resource} loading={loading} onDelete={deleteResource} />
          <Footer numLocations={numLocations} />
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
      // minimum_customers_per_hour: event.target.min.value, 
      // maximum_customers_per_hour: event.target.max.value,
      // average_cookies_per_sale: event.target.avg.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    };
    onCreate(standInfo);
    event.target.reset();
  }
  return (
    <form
      className=" flex flex-col items-center w-3/5 p-4 m-8 bg-green-300 rounded-md shadow-2xl text-black-500 ml-60"
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

function StandList({ data = [], loading, onDelete }) {
  if (loading) return <p>Loading ...</p>;

  return (
    <div className="flex justify-center mb-4 w-3/5 ml-60">
      <div className="w-full">
        {data.length === 0 ? (
          <h2 className="text-2xl font-bold text-black-600">No Cookie Stands Available</h2>
        ) : (
          <table className="w-full border-collapse border border-green-500">
            <thead>
              <tr>
                <th className="bg-green-500 text-black text-left px-4 py-2 border border-green-500 font-bold">
                  Location
                </th>
                {hours.map((hour) => (
                  <th
                    className="bg-green-500 text-black text-center border border-green-500 font-bold"
                    key={hour}
                  >
                    {hour}
                  </th>
                ))}
                <th className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
                  Totals
                </th>
                <th className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((report) => (
                <tr key={report.id}>
                  <td className="text-center border border-green-500">{report.location}</td>
                  {report.hourly_sales.map((sales, i) => (
                    <td key={i} className="text-center border border-green-500">
                      {sales}
                    </td>
                  ))}
                  <td className="text-center border border-green-500 font-bold">
                    {report.hourly_sales.reduce((acc, sales) => acc + sales, 0)}
                  </td>
                  <td className="text-center border border-green-500 px-4 py-2">
                    <button
                      className="text-red-600"
                      onClick={() => onDelete(report.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="bg-green-500 text-black text-left px-4 py-2 border border-green-500 font-bold">
                  Total
                </td>
                {hours.map((_, i) => (
                  <td
                    key={i}
                    className="bg-green-500 text-black text-center border border-green-500 font-bold"
                  >
                    {data.reduce((acc, report) => acc + report.hourly_sales[i], 0)}
                  </td>
                ))}
                <td className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
                  {data.reduce(
                    (acc, report) => acc + report.hourly_sales.reduce((a, b) => a + b, 0),
                    0
                  )}
                </td>
                <td className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
                  {/* Empty cell for Delete column in footer */}
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}



