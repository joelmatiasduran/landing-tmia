import Link from "next/link";
import Faq from "../components/FAQ";
import Features from "../components/Features";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

const IndexPage = () => (
  <Layout title="Home | Terapia Mia">
    <div className="h-full min-h-full w-full">
      <Hero />
      <Features />
      <Grid />
      <Faq />
      <Newsletter />
    </div>
  </Layout>
);

export default IndexPage;
