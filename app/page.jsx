import LeadsList from "@/components/LeadsList";
import Image from "next/image";

const Home = () => (
  <section className="container mx-auto px-4 py-10">
    <div className="flex flex-col items-center mb-2">
      <h1 className="text-7xl font-bold tracking-tight text-center hover:transform hover:scale-105 transition-transform">
        Discover & Share
        <br />
        <span className="text-7xl font-bold tracking-tight text-center orange_gradient ">
          Pipeline Sales
        </span>
      </h1>
      <p className="mb-8 mt-4 text-lg text-gray-200 max-w-2xl text-center hover:transform hover:scale-105 transition-transform">
        Welcome to Pipeline Sales, where we revolutionize the game for Name,
        Image, and Likeness (NIL) collectives seeking to connect with
        small-dollar donors. At Pipeline Sales, we understand the unique
        challenges faced by athletes and influencers navigating the NIL
        landscape, and we're here to bridge the gap between talent and support.
      </p>

      <div className="flex justify-center hover:transform hover:scale-105 transition-transform">
        <Image
          src="/assets/images/ncaa-1.svg"
          alt="logo"
          width={400}
          height={150}
          className="object-contain"
        />
      </div>

      <h1 className="orange_gradient text-7xl font-bold tracking-tight text-center mb-4 mt-4 max-w-lg hover:transform hover:scale-105 transition-transform">
        Our mission
      </h1>
      <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto p-4 text-center bg-gray-700 shadow-lg hover:transform hover:scale-105 transition-transform">
        At Pipeline Sales, our mission is to unlock the full potential of NIL
        collectives by providing a specialized platform for reaching and
        connecting with small-dollar donors. We believe that every athlete and
        influencer deserves the opportunity to build meaningful relationships
        with their supporters, and we're here to facilitate those connections.
      </p>
    </div>
  </section>
);

export default Home;
