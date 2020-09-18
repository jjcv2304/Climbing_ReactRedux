const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const locations = [
  { id: 1, name: "Lighthouse Park", desc: "p124" },
  { id: 2, name: "Sully´s Hangout", desc: "p210" },
  { id: 3, name: "The Lynn Boulders", desc: "p220" },
  { id: 4, name: "Greenwood PArk", desc: "p239" },
];
const grades = [
  { id: 1, name: "4b|5.6" },
  { id: 2, name: "4c|5.7" },
  { id: 3, name: "5a|5.8" },
  { id: 4, name: "5b|5.9" },
  { id: 5, name: "5c|5.10a" },
  { id: 6, name: "6a|5.10b" },
  { id: 7, name: "6a+|5.10c" },
  { id: 8, name: "6b|5.10d" },
  { id: 9, name: "6b+|5.11a" },
  { id: 10, name: "6c|5.11b" },
  { id: 11, name: "6c+|5.11c" },
  { id: 12, name: "7a|5.11d" },
  { id: 13, name: "7a+|5.12a" },
  { id: 99, name: "0a|Undefined" },
];
const routeTypes = [
  { id: 1, name: "Top rope" },
  { id: 2, name: "Lead Climbing" },
  { id: 3, name: "Traditional" },
];
const routes = [
  {
    id: 1,
    name: "Leftovers",
    bolts: 5,
    grade: grades[2],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 2,
    name: "Your Other Left",
    bolts: 7,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 3,
    name: "Lefty",
    bolts: 5,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 4,
    name: "A Bunch of BS",
    bolts: 4,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 5,
    name: "The Rookie",
    bolts: 6,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 6,
    name: "The Beginner",
    bolts: 6,
    grade: grades[0],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 7,
    name: "Beginner’s Luck",
    bolts: 6,
    grade: grades[1],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 8,
    name: "Little Lulu",
    bolts: 9,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 9,
    name: "3M",
    bolts: 9,
    grade: grades[3],
    meters: -1,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 10,
    name: "Lubo",
    bolts: 7,
    grade: grades[8],
    meters: 18,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 11,
    name: "Constant Gardener",
    bolts: 6,
    grade: grades[9],
    meters: 14,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 12,
    name: "Open Project",
    bolts: 6,
    grade: grades[13],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 13,
    name: "Closed Project",
    bolts: 7,
    grade: grades[13],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 14,
    name: "Speed Dial #8",
    bolts: 5,
    grade: grades[7],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 15,
    name: "Shake Your Lettuce",
    bolts: 7,
    grade: grades[6],
    meters: 16,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 16,
    name: "Serene",
    bolts: 10,
    grade: grades[11],
    meters: 25,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 17,
    name: "Special K",
    bolts: 7,
    grade: grades[10],
    meters: 18,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 18,
    name: "Hindu Variation",
    bolts: 7,
    grade: grades[11],
    meters: 18,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 19,
    name: "Hindu Two Routes",
    bolts: 7,
    grade: grades[9],
    meters: 18,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 20,
    name: "My One Muscle",
    bolts: 7,
    grade: grades[8],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 21,
    name: "Get Bent!",
    bolts: 7,
    grade: grades[9],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 22,
    name: "Wingman",
    bolts: 7,
    grade: grades[9],
    meters: 18,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 23,
    name: "Back Door Party",
    bolts: 7,
    grade: grades[12],
    meters: 16,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 24,
    name: "Moss Pit",
    bolts: 4,
    grade: grades[3],
    meters: 8,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 25,
    name: "Dynamic Duo",
    bolts: 8,
    grade: grades[5],
    meters: 19,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 26,
    name: "French Connection",
    bolts: 8,
    grade: grades[7],
    meters: 19,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 27,
    name: "Trekking to India",
    bolts: 9,
    grade: grades[10],
    meters: 20,
    type: routeTypes[1],
    location: locations[1],
  },
  {
    id: 28,
    name: "In the Bubble",
    bolts: 6,
    grade: grades[12],
    meters: 15,
    type: routeTypes[1],
    location: locations[1],
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  locations,
  grades,
  routeTypes,
  routes,
};
