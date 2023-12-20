import LeadsList from "@/components/LeadsList"

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> PipeLine Sales</span>
      </h1>
      <p className='desc text-center'>
      Welcome to Pipeline Sales, where we revolutionize the game for Name, Image, and Likeness (NIL) collectives seeking to connect with small-dollar donors. At Pipeline Sales, we understand the unique challenges faced by athletes and influencers navigating the NIL landscape, and we're here to bridge the gap between talent and support
      </p>
        <LeadsList />

    </section>
  )


export default Home