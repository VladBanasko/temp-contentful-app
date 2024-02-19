import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem odit ad hic nostrum, pariatur nisi, eligendi et a quam soluta cumque fugiat ex totam vitae maiores repellat tempore eaque?</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className='image' />
        </div>
      </div>
    </section>
  )
}
export default Hero