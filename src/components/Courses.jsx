import Title from './Title'
import { courses } from '../data'

const Courses = () => {
  return (
    <section className='section' id='courses'>
      <Title title='featured' subTitle='courses'></Title>
      <div className='section-center featured-center'>
        {courses.map((course) => {
          const { id, image, date, title, info, buy, cost } = course
          return (
            <article className='course-card' key={id}>
              <div className='course-img-container'>
                <img src={image} className='course-img' alt='' />
                <p className='course-date'>{date}</p>
              </div>
              <div className='course-info'>
                <div className='course-title'>
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className='course-footer'>
                  <label className='enroll-course'>
                    {' '}
                    <a
                      href='https://www.instagram.com/mac_mitts/'
                      target='_blank'
                    >
                      <span>
                        <i className='fas fa-cart-shopping'></i>
                      </span>{' '}
                      {buy}
                    </a>
                  </label>
                  {/* <p>{duration}</p> */}
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Courses
