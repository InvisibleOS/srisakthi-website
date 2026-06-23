/*
 * Mock content for the Sri Sakthi Cinemas demo site.
 * All numbers, addresses and showtimes are illustrative placeholders.
 */

// Shared Unsplash imagery (verified, on-brand cinema/architecture stock).
export const img = {
  heroSeats:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80",
  auditorium:
    "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1600&q=80",
  seatingRows:
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1600&q=80",
  audience:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  marquee:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
  reels:
    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1600&q=80",
  foyer:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  skyline:
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=80",
} as const;

export type Location = {
  slug: string;
  name: string;
  city: string;
  district: string;
  tagline: string;
  established: number;
  screens: number;
  seats: number;
  footfallPerYear: string;
  sound: string;
  projection: string;
  catchment: string;
  address: string;
  amenities: string[];
  image: string;
  /** Format flags shown as pills on the property page. */
  formats: string[];
};

export const locations: Location[] = [
  {
    slug: "tiruppur",
    name: "Sri Sakthi Cinemas — Tiruppur",
    city: "Tiruppur",
    district: "Tiruppur District",
    tagline: "The flagship multiplex in the knitwear capital.",
    established: 2014,
    screens: 5,
    seats: 1420,
    footfallPerYear: "1.8M",
    sound: "Dolby Atmos",
    projection: "4K Laser",
    catchment: "9.2 lakh within 8 km",
    address: "Kumaran Road, Near Bus Stand, Tiruppur, Tamil Nadu 641601",
    amenities: ["Recliner Suites", "Gourmet Concessions", "Valet Parking", "Café Lounge"],
    formats: ["IMAX-class", "Dolby Atmos", "4K Laser", "Recliner"],
    image: img.auditorium,
  },
  {
    slug: "erode",
    name: "Sri Sakthi Cinemas — Erode",
    city: "Erode",
    district: "Erode District",
    tagline: "A turmeric-city landmark with five premium screens.",
    established: 2016,
    screens: 5,
    seats: 1310,
    footfallPerYear: "1.5M",
    sound: "Dolby Atmos",
    projection: "4K Laser",
    catchment: "7.6 lakh within 8 km",
    address: "Perundurai Road, Erode, Tamil Nadu 638011",
    amenities: ["Recliner Suites", "Family Lounge", "Ample Parking", "Snack Bar"],
    formats: ["Dolby Atmos", "4K Laser", "Recliner", "3D"],
    image: img.seatingRows,
  },
  {
    slug: "dharapuram",
    name: "Sri Sakthi Cinemas — Dharapuram",
    city: "Dharapuram",
    district: "Tiruppur District",
    tagline: "Bringing big-format cinema to a fast-growing town.",
    established: 2018,
    screens: 3,
    seats: 860,
    footfallPerYear: "0.9M",
    sound: "Dolby 7.1",
    projection: "4K Laser",
    catchment: "3.4 lakh within 10 km",
    address: "Palani Road, Dharapuram, Tamil Nadu 638656",
    amenities: ["Push-back Seating", "Snack Bar", "Two-wheeler Parking", "Box Office"],
    formats: ["Dolby 7.1", "4K Laser", "2D"],
    image: img.marquee,
  },
  {
    slug: "coimbatore",
    name: "Sri Sakthi Cinemas — Coimbatore",
    city: "Coimbatore",
    district: "Coimbatore District",
    tagline: "Our largest house, anchoring a premium retail district.",
    established: 2019,
    screens: 7,
    seats: 1980,
    footfallPerYear: "2.6M",
    sound: "Dolby Atmos",
    projection: "4K Laser RGB",
    catchment: "16 lakh within 10 km",
    address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    amenities: ["Luxe Recliners", "Premiere Lounge", "Multi-cuisine F&B", "Covered Parking"],
    formats: ["IMAX-class", "Dolby Atmos", "4K Laser RGB", "Recliner", "3D"],
    image: img.foyer,
  },
  {
    slug: "gobichettipalayam",
    name: "Sri Sakthi Cinemas — Gobichettipalayam",
    city: "Gobichettipalayam",
    district: "Erode District",
    tagline: "A modern multiplex serving the Gobi belt.",
    established: 2020,
    screens: 3,
    seats: 780,
    footfallPerYear: "0.8M",
    sound: "Dolby 7.1",
    projection: "4K Laser",
    catchment: "2.9 lakh within 12 km",
    address: "Sathy Road, Gobichettipalayam, Tamil Nadu 638452",
    amenities: ["Push-back Seating", "Snack Bar", "Parking", "Online Booking"],
    formats: ["Dolby 7.1", "4K Laser", "2D"],
    image: img.audience,
  },
  {
    slug: "pollachi",
    name: "Sri Sakthi Cinemas — Pollachi",
    city: "Pollachi",
    district: "Coimbatore District",
    tagline: "Gateway-town cinema with a loyal weekend crowd.",
    established: 2021,
    screens: 4,
    seats: 1020,
    footfallPerYear: "1.1M",
    sound: "Dolby Atmos",
    projection: "4K Laser",
    catchment: "4.1 lakh within 12 km",
    address: "Coimbatore Main Road, Pollachi, Tamil Nadu 642001",
    amenities: ["Recliner Suites", "Café", "Ample Parking", "Snack Bar"],
    formats: ["Dolby Atmos", "4K Laser", "Recliner", "2D"],
    image: img.reels,
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

// Now-showing films with mock showtimes — powers the booking module and the
// "now showing" marquee. Posters are rendered as tonal gradient tiles.
export type Movie = {
  id: string;
  title: string;
  language: string;
  rating: string;
  genre: string;
  runtime: string;
  formats: string[];
  /** Gradient tones for the poster tile. */
  poster: { from: string; to: string };
  showtimes: string[];
};

export const movies: Movie[] = [
  {
    id: "vaanam-paarthen",
    title: "Vaanam Paarthen",
    language: "Tamil",
    rating: "U/A",
    genre: "Drama",
    runtime: "2h 28m",
    formats: ["2D", "Dolby Atmos"],
    poster: { from: "#33406b", to: "#0d1326" },
    showtimes: ["10:15 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
  },
  {
    id: "kadal-raja",
    title: "Kadal Raja",
    language: "Tamil",
    rating: "U",
    genre: "Action",
    runtime: "2h 41m",
    formats: ["2D", "3D", "Dolby Atmos"],
    poster: { from: "#7a1f1f", to: "#260b0b" },
    showtimes: ["11:00 AM", "2:45 PM", "6:15 PM", "9:45 PM"],
  },
  {
    id: "sky-above",
    title: "Sky Above",
    language: "English",
    rating: "U/A",
    genre: "Sci-Fi",
    runtime: "2h 09m",
    formats: ["IMAX-class", "4K Laser"],
    poster: { from: "#155e57", to: "#06201f" },
    showtimes: ["10:45 AM", "1:50 PM", "7:20 PM", "10:30 PM"],
  },
  {
    id: "megha",
    title: "Megha",
    language: "Telugu",
    rating: "U",
    genre: "Romance",
    runtime: "2h 18m",
    formats: ["2D"],
    poster: { from: "#6d2748", to: "#2a0f1d" },
    showtimes: ["12:15 PM", "3:30 PM", "6:45 PM"],
  },
  {
    id: "the-long-night",
    title: "The Long Night",
    language: "English",
    rating: "A",
    genre: "Thriller",
    runtime: "1h 58m",
    formats: ["2D", "Dolby Atmos"],
    poster: { from: "#26352f", to: "#0a110f" },
    showtimes: ["1:15 PM", "4:20 PM", "9:10 PM"],
  },
  {
    id: "pathway-9",
    title: "Pathway 9",
    language: "Hindi",
    rating: "U/A",
    genre: "Adventure",
    runtime: "2h 34m",
    formats: ["2D", "3D"],
    poster: { from: "#6b4a1b", to: "#241808" },
    showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"],
  },
];

// Static mock dates for the booking date picker (week of 23 Jun 2026).
export const showDates = [
  { weekday: "Today", day: "23" },
  { weekday: "Tomorrow", day: "24" },
  { weekday: "Thu", day: "25" },
  { weekday: "Fri", day: "26" },
  { weekday: "Sat", day: "27" },
  { weekday: "Sun", day: "28" },
  { weekday: "Mon", day: "29" },
];

// The marquee only needs title / language / rating.
export const nowShowing = movies;

// Group-level stats used across the home / about / partner pages.
export const groupStats = [
  { label: "Cinema properties", value: "6" },
  { label: "Screens operated", value: "27" },
  { label: "Seats across the circuit", value: "7,300+" },
  { label: "Annual footfall", value: "8.7M" },
];

// Why builders / developers partner with Sri Sakthi.
export const partnerValues = [
  {
    title: "Footfall anchor",
    body: "A multiplex is the single strongest weekend traffic driver for a mall — pulling families across F&B, retail and parking.",
  },
  {
    title: "Turnkey fit-out",
    body: "We take the shell from your team and deliver a fully operational cinema — acoustics, projection, seating and branding.",
  },
  {
    title: "Flexible commercials",
    body: "Lease, revenue-share or hybrid structures shaped around your project's cashflow and tenant mix.",
  },
  {
    title: "Regional pull",
    body: "Two decades of brand equity across the Kongu belt means audiences travel to a Sri Sakthi screen.",
  },
];

// Simple step list for the partner page.
export const partnerSteps = [
  { step: "01", title: "Site assessment", body: "We evaluate catchment, access and the proposed floor plate." },
  { step: "02", title: "Design & layout", body: "Screen count, sightlines and F&B zones modelled to your shell." },
  { step: "03", title: "Fit-out & install", body: "Acoustics, projection, seating and brand build-out." },
  { step: "04", title: "Launch & operate", body: "We run day-to-day operations and shared marketing." },
];

// About-page milestones.
export const milestones = [
  { year: "2014", body: "First multiplex opens in Tiruppur." },
  { year: "2016", body: "Erode property brings the circuit to five screens." },
  { year: "2019", body: "Flagship seven-screen house opens in Coimbatore." },
  { year: "2021", body: "Pollachi launch takes the circuit to six cities." },
  { year: "2024", body: "Circuit-wide upgrade to 4K Laser and Dolby Atmos." },
];

// The four primary nav destinations.
export const navLinks = [
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About Us" },
  { href: "/partner", label: "Partner With Us" },
];
