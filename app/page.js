import Feed from '@components/Feed'

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">Your Thoughts</span>
    </h1>
    <p className="desc text-center">
    Believe that you are capable and you will achieve anything you set your mind to.
        </p>

<Feed />
    </section>
  )
}

export default Home