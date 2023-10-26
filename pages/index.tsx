import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {

    return (
        <Layout title="">
            <h1 className="mt-10 ml-10 text-4xl font-bold">
                Welcome to <span className="text-red-600">SimpliHOM AI</span>
              
            </h1>
            <h2 className="mt-5 ml-10 text-2xl font-light">
                Create amazing <strong className="text-red-600">listing descriptions</strong> and a
                lot more with ChatGPT.
            </h2>
            <CardGrid cards={TEMPLATES}/>
            <a href="https://www.linkedin.com/in/yuval-suede/" target="_blank">
                <img
                    style={{ maxWidth: '800px', margin: '0 auto'}}
                    height="auto"
                    width="90%"
                    src="/images/newsletter.png" alt="Join my newsletter"/>
            </a>
        </Layout>
    );
};

export default HomePage;
