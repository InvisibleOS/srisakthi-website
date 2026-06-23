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

// "Now showing" placeholders for the marquee / embed area.
export type NowShowing = {
  title: string;
  language: string;
  rating: string;
  genre: string;
};

export const nowShowing: NowShowing[] = [
  { title: "Vaanam Paarthen", language: "Tamil", rating: "U/A", genre: "Drama" },
  { title: "Kadal Raja", language: "Tamil", rating: "U", genre: "Action" },
  { title: "Sky Above", language: "English", rating: "U/A", genre: "Sci-Fi" },
  { title: "Megha", language: "Telugu", rating: "U", genre: "Romance" },
  { title: "The Long Night", language: "English", rating: "A", genre: "Thriller" },
  { title: "Maalai Neram", language: "Tamil", rating: "U/A", genre: "Family" },
  { title: "Pathway 9", language: "Hindi", rating: "U/A", genre: "Adventure" },
];

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
