import Head from 'next/head';

const Heads = () => {
    return (
        <Head>
            <meta property="og:url" content="https://nextbench.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="NextBench | Innovative Web & Mobile Solutions" />
            <meta property="og:description" content="NextBench is a leading web and mobile solutions provider specializing in modern technologies like React.js, Next.js, Node.js, Express, MongoDB, GraphQL, TypeScript, and Flutter. We deliver fully customized, scalable, and high-performance applications tailored to your business needs." />
            <title>NextBench | Innovative Web & Mobile Solutions</title>
            <meta name="description" content="NextBench is a leading web and mobile solutions provider specializing in modern technologies like React.js, Next.js, Node.js, Express, MongoDB, GraphQL, TypeScript, and Flutter. We deliver fully customized, scalable, and high-performance applications tailored to your business needs." />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="author" content="NextBench Team" />
        </Head>
    );
};

export default Heads;
