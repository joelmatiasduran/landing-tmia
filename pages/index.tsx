import Link from "next/link";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Terapia Mia">
    <div className="bg-red-300">
      <h1>Future Landing Page Terapia Mia</h1>
      <Hero />
    </div>
  </Layout>
);

export default IndexPage;
