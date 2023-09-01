import course1 from './images/course-1.jpeg'
import course2 from './images/course-2.jpeg'
import course3 from './images/course-3.jpeg'
import course4 from './images/course-4.jpeg'

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
// 18k 3days a week
// 21k 4 days
// 25k 5 days
// 30k 6 days a week
export const courses = [
  {
    id: '1',
    image: course1,
    date: '3 DAYS PER WEEK PROGRAM',
    title: 'Beginner Training',
    info: 'Learn fundamentals, stance, punches, defense. Expert coaching, dynamic workouts. Build strength, confidence, and skills. Perfect for beginners seeking fitness and self-defense.',
    buy: 'Enroll now!',
    // duration: '6 days',
    cost: 'Rs 18000/month',
  },
  {
    id: '2',
    image: course2,
    date: '4 DAYS PER WEEK PROGRAM',
    title: 'Intermediate Training',
    info: 'Elevate your boxing prowess this course. Hone technique, amplify power, and refine defense through advanced drills and sparring, guided by Mac Mitts. Take your skills to the next level.',
    buy: 'Enroll now!',
    // duration: '11 days',
    cost: 'Rs 21000/month',
  },
  {
    id: '3',
    image: course3,
    date: '5 DAYS PER WEEK PROGRAM',
    title: 'Advanced Training',
    info: 'For experienced boxers who want to fine-tune precision, strategy, and agility in intense sparring and specialized exercises, under the expert tutelage of Mac Mitts. Unleash your full potential.',
    buy: 'Enroll now!',
    // duration: '8 days',
    cost: 'Rs 25000/month',
  },
  {
    id: '4',
    image: course4,
    date: '6 DAYS PER WEEK PROGRAM',
    title: 'Expert Training',
    info: 'For those seeking the highest echelon of boxing excellence, this course is the ultimate training experience. This program is designed for elite fighters, aspiring professionals, and those with a deep passion for mastering the sweet science.',
    buy: 'Enroll now!',
    // duration: '8 days',
    cost: 'Rs 30000/month',
  },
]
