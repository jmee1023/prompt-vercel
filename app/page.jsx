import LeadsList from "@/components/LeadsList";

const Home = () => (
  <section className="container mx-auto px-4 py-16">
  <div className="flex flex-col items-center mb-12">
    <h1 className="text-7xl font-bold tracking-tight text-center">
      Discover & Share
      <br />
      <span className="text-7xl font-bold tracking-tight text-center orange_gradient">
        Pipeline Sales
      </span>
    </h1>
      <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto">
        Welcome to Pipeline Sales, where we revolutionize the game for Name,
        Image, and Likeness (NIL) collectives seeking to connect with
        small-dollar donors. At Pipeline Sales, we understand the unique
        challenges faced by athletes and influencers navigating the NIL
        landscape, and we're here to bridge the gap between talent and support.
      </p>
    </div>
    <LeadsList className="w-10" />
  </section>
);

export default Home;