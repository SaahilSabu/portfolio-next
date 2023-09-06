import Head from 'next/head';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Saahil Sabu Hameed';

export const Meta = ({ title, description, prefix = name}) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />
    </Head>
  );
};
