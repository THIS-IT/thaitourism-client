export const NAVBAR_MENUS = [
  { name: 'Book Trip', value: 'bookTrip' },
  { name: 'Thailand Tourism', value: 'thailandTourism' },
  { name: 'Travel Packages', value: 'travelPackages' },
  { name: 'Destinations', value: 'destinations' },
  { name: 'Login', value: 'login' },
  { name: 'Sign Up', value: 'signUp' },
] as const;

export type NavbarMenu = (typeof NAVBAR_MENUS)[number];
