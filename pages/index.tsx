import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";
import Image from 'next/image';

const HomePage: React.FC = () => {

    return (
        <Layout title="">
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className="mt-10 ml-10 text-4xl font-bold">
                        Welcome to <span className="text-red-600">SimpliHOM AI</span>
                    </h1>
                </div>
                <div className='mt-10 mr-10 bg-red-600 rounded-3xl'>
                    <Image src="/logo.png" alt="SimpliHOM AI" width="250" height="100"/>
                </div>
            </div>
            <h2 className="mt-5 ml-10 text-2xl font-light">
                Create amazing <strong className="text-red-600">listing descriptions</strong> and a
                lot more with ChatGPT.
            </h2>
            <CardGrid cards={TEMPLATES}/>
           
        </Layout>
    );
};

export default HomePage;
