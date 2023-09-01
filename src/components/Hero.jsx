import videoBg from '../images/mac-cover.mp4'

function hero() {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <video src={videoBg} autoPlay loop preload='auto' controls />
        <div className='content-title'>
          <h1 data-text='MAC MITTS '>MASTERCLASS</h1>
          <p>Become the strongest in the room.</p>
          <a href='#courses' className='btn hero-btn'>
            explore courses
          </a>
        </div>
      </div>
    </section>
  )
}
export default hero
