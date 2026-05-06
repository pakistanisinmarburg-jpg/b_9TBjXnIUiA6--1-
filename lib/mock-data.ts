export const events = [
  {
    id: "1",
    title: "Sunday Football Match",
    date: "May 7",
    location: "Stadtpark",
    image: "/images/event-1.jpg",
    tag: "Sports",
    tagColor: "bg-green-500",
  },
  {
    id: "2",
    title: "Sprach Café - Language Exchange",
    date: "May 8",
    location: "Café Roter Stern",
    image: "/images/event-2.jpg",
    tag: "Social",
    tagColor: "bg-blue-500",
  },
  {
    id: "3",
    title: "International Food Festival",
    date: "May 12",
    location: "Marktplatz",
    image: "/images/event-3.jpg",
    tag: "Culture",
    tagColor: "bg-orange-500",
  },
]

export const communities = [
  {
    id: "international",
    name: "International Marburg",
    memberCount: 1250,
    image: "/images/community-international.jpg",
  },
  {
    id: "students",
    name: "Students",
    memberCount: 890,
    image: "/images/community-students.jpg",
  },
  {
    id: "jobs",
    name: "Jobs & Accommodation",
    memberCount: 620,
    image: "/images/community-jobs.jpg",
  },
]

export const housingPosts = [
  {
    id: "1",
    title: "Cozy room in shared apartment near Uni",
    type: "Room",
    price: 350,
    location: "Südviertel",
    image: "/images/housing-1.jpg",
    date: "2 days ago",
    author: "Anna M.",
  },
  {
    id: "2",
    title: "1-bedroom apartment available from June",
    type: "Apartment",
    price: 550,
    location: "Altstadt",
    image: "/images/housing-2.jpg",
    date: "3 days ago",
    author: "Thomas K.",
  },
  {
    id: "3",
    title: "Looking for flatmate - 3 room WG",
    type: "WG",
    price: 300,
    location: "Weidenhausen",
    image: "/images/housing-3.jpg",
    date: "1 week ago",
    author: "Maria S.",
  },
]

export const jobPosts = [
  {
    id: "1",
    title: "Working Student - Software Developer",
    company: "Tech Startup Marburg",
    type: "Part-time",
    salary: "15€/hour",
    location: "Remote/Hybrid",
    date: "1 day ago",
  },
  {
    id: "2",
    title: "Restaurant Staff Needed",
    company: "Pizzeria Italia",
    type: "Mini-job",
    salary: "12€/hour",
    location: "Marktplatz",
    date: "2 days ago",
  },
  {
    id: "3",
    title: "English Tutor for Kids",
    company: "Language School",
    type: "Freelance",
    salary: "20€/hour",
    location: "Marburg",
    date: "3 days ago",
  },
]

export const marketItems = [
  {
    id: "1",
    title: "IKEA Desk - Like New",
    price: 45,
    image: "/images/market-1.jpg",
    location: "Südviertel",
    date: "1 day ago",
  },
  {
    id: "2",
    title: "Bicycle - City Bike",
    price: 80,
    image: "/images/market-2.jpg",
    location: "Altstadt",
    date: "2 days ago",
  },
  {
    id: "3",
    title: "Winter Jacket Size M",
    price: 25,
    image: "/images/market-3.jpg",
    location: "Weidenhausen",
    date: "3 days ago",
  },
]

export const questions = [
  {
    id: "1",
    title: "How to register at Einwohnermeldeamt?",
    author: "NewInTown",
    replies: 5,
    date: "2 hours ago",
    tags: ["bureaucracy", "registration"],
  },
  {
    id: "2",
    title: "Best gym recommendations in Marburg?",
    author: "FitnessLover",
    replies: 12,
    date: "1 day ago",
    tags: ["sports", "recommendations"],
  },
  {
    id: "3",
    title: "Opening a bank account as international student",
    author: "StudentFromIndia",
    replies: 8,
    date: "2 days ago",
    tags: ["banking", "students"],
  },
]

export const messages = [
  {
    id: "1",
    name: "International Marburg",
    lastMessage: "Welcome to the community!",
    time: "2m ago",
    unread: 3,
    avatar: "/images/community-international.jpg",
    isGroup: true,
  },
  {
    id: "2",
    name: "Anna M.",
    lastMessage: "Is the room still available?",
    time: "1h ago",
    unread: 1,
    avatar: "/images/avatar-1.jpg",
    isGroup: false,
  },
  {
    id: "3",
    name: "Students Group",
    lastMessage: "Study session tomorrow at 3pm",
    time: "3h ago",
    unread: 0,
    avatar: "/images/community-students.jpg",
    isGroup: true,
  },
]

export const calendarEvents = [
  {
    id: "1",
    title: "Sunday Football",
    date: "2024-05-07",
    time: "14:00",
    location: "Stadtpark",
    color: "bg-green-500",
  },
  {
    id: "2",
    title: "Sprach Café",
    date: "2024-05-08",
    time: "18:00",
    location: "Café Roter Stern",
    color: "bg-blue-500",
  },
  {
    id: "3",
    title: "Food Festival",
    date: "2024-05-12",
    time: "12:00",
    location: "Marktplatz",
    color: "bg-orange-500",
  },
  {
    id: "4",
    title: "Career Workshop",
    date: "2024-05-15",
    time: "10:00",
    location: "Uni Marburg",
    color: "bg-purple-500",
  },
]

export const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/images/avatar-user.jpg",
  communities: ["International Marburg", "Students", "Jobs & Accommodation"],
  memberSince: "January 2024",
  isAdmin: false,
}
