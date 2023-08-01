import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';

export default function Home() {

    const [data, setData] = useState([]);
    const numLocations = data.length;
    function submitHandler(event) {
      event.preventDefault();
      const form = event.target;
      const id= data.length + 1;
      const entry = {
        location: form.location.value,
        minC: form.min.value,
        maxC: form.max.value,
        avgC: form.avg.value,
        hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
      };
      
      setData([...data, entry]);
      form.reset();
    }

    return (
        <>
        <Head >
          <title>Cookie Stand Admin</title>
        
        </Head>
  
        <div className="flex flex-col justify-between min-h-screen  ">
          <Header />
          <div className="flex flex-col items-center justify-center">
            <Form handler={submitHandler} />
            <ReportTable data={data} />
            </div>
          <Footer numLocations={data.length} />
  
        </div>
  
  
      </>
    );
  }
  