import aboutImg from '../images/about.mp4'
import Title from './Title'

function about() {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='me'></Title>

      <div className='section-center about-center'>
        <div className='about-video'>
          <video
            src={aboutImg}
            autoPlay
            loop
            className='about-video'
            alt='mac mitts working out'
          />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            I'm a certified boxing coach with over 7 years of experience. I'm
            passionate about helping people reach their fitness and boxing
            goals. I offer personalized training courses that are tailored to
            each individual's needs and goals. Whether you're a beginner or a
            seasoned boxer, I can help you improve your technique, develop your
            strategic thinking, and get in peak physical condition.
          </p>
          <p>
            I believe that boxing is more than just a sport. It's a way to build
            confidence, discipline, and self-respect. It's also a great way to
            get in shape and improve your overall health.
          </p>
          <p>
            If you're looking for a challenging and rewarding workout, I
            encourage you to contact me today. I'd be happy to discuss your
            goals and create a personalized training program that's right for
            you.
          </p>
          <a href='https://www.instagram.com/mac_mitts/' className='btn'>
            learn more
          </a>
        </article>
      </div>
    </section>
  )
}
export default about
