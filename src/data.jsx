import course1 from './images/course-1.jpeg'
import course2 from './images/course-2.jpeg'
import course3 from './images/course-3.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#courses', text: 'courses' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-tiktok' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-instagram' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
]

export const services = [
  {
    id: 1,
    icon: 'fa-solid fa-graduation-cap',
    title: 'Technique Mastery',
    text: 'Learn the fundamentals of boxing technique from a certified coach.',
  },
  {
    id: 2,
    icon: 'fa-solid fa-brain',
    title: 'Strategic Fight IQ',
    text: 'Develop your strategic thinking and decision-making skills for boxing.',
  },
  {
    id: 3,
    icon: 'fa-solid fa-dumbbell',
    title: 'Conditioning & Agility',
    text: 'Get in shape and improve your boxing performance with tailored workouts.',
  },
]

export const courses = [
  {
    id: '1',
    image: course1,
    date: '4 WEEK PROGRAM',
    title: 'Beginner Training',
    info: 'Learn fundamentals, stance, punches, defense. Expert coaching, dynamic workouts. Build strength, confidence, and skills. Perfect for beginners seeking fitness and self-defense.',
    buy: 'Enroll now!',
    // duration: '6 days',
    cost: 'from $100',
  },
  {
    id: '2',
    image: course2,
    date: '8 WEEK PROGRAM',
    title: 'Intermediate Training',
    info: 'Elevate your boxing. Hone technique, amplify power, and refine defense through advanced drills and sparring, guided by Mac Mitts. Take your skills to the next level.',
    buy: 'Enroll now!',
    // duration: '11 days',
    cost: 'from $500',
  },
  {
    id: '3',
    image: course3,
    date: '12 WEEK PROGRAM',
    title: 'Advanced Training',
    info: 'The pinnacle of boxing mastery. Fine-tune precision, strategy, and agility in intense sparring and specialized exercises, under the expert tutelage of Mac Mitts. Unleash your full potential.',
    buy: 'Enroll now!',
    // duration: '8 days',
    cost: 'from $1000',
  },
]
