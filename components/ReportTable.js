// import React from 'react';
// import { hours } from '../data';

// export default function ReportTable(props) {
//   const { data } = props; 

//   return (
//     <div className="flex justify-center mb-4 w-3/5">
//       {data.length === 0 ? (
//         <h2 className="text-2xl font-bold text-black-600">No Cookie Stands Available</h2>
//       ) : (
//         <table className="w-full border-collapse border border-green-500">
//           <thead>
//             <tr>
//               <th className="bg-green-500 text-black text-left px-4 py-2 border border-green-500 font-bold">
//                 Location
//               </th>
//               {hours.map((hour) => (
//                 <th
//                   className="bg-green-500 text-black text-center border border-green-500 font-bold"
//                   key={hour}
//                 >
//                   {hour}
//                 </th>
//               ))}
//               <th className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
//                 Totals
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((report) => (
//               <tr key={report.id}>
//                 <td className="text-center border border-green-500">{report.location}</td>
//                 {report.hourly_sales.map((sales, i) => (
//                   <td key={i} className="text-center border border-green-500">
//                     {sales}
//                   </td>
//                 ))}
//                 <td className="text-center border border-green-500 font-bold">
//                   {report.hourly_sales.reduce((acc, sales) => acc + sales, 0)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td className="bg-green-500 text-black text-left px-4 py-2 border border-green-500 font-bold">
//                 Total
//               </td>
//               {hours.map((_, i) => (
//                 <td
//                   key={i}
//                   className="bg-green-500 text-black text-center border border-green-500 font-bold"
//                 >
//                   {data.reduce((acc, report) => acc + report.hourly_sales[i], 0)}
//                 </td>
//               ))}
//               <td className="bg-green-500 text-black text-center px-4 py-2 border border-green-500 font-bold">
//                 {data.reduce(
//                   (acc, report) =>
//                     acc + report.hourly_sales.reduce((a, b) => a + b, 0),
//                   0
//                 )}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       )}
//     </div>
//   );
// }
