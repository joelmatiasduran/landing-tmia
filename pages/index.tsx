import Link from "next/link";
import Features from "../components/Features";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Terapia Mia">
    <div className="">
      <Hero />
      <Features />
      <Grid />
    </div>
  </Layout>
);

export default IndexPage;
