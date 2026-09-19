# Impact Connect

Create a high-polish, modern web application called 'SocialCause' - a real-time community impact coordination platform.

Stack: React, TypeScript, Tailwind CSS, Lucide Icons, Leaflet map (using react-leaflet / openstreetmap tiles).

Theme: Fintech/Impact dashboard look — clean dark/light contrast, indigo/emerald accents, crisp typography, data-rich cards.

Build a top Navigation Bar:

- Logo: SocialCause (Heart/Shield icon)

- Metrics summary: 380 Impact Points | 240 Meals Coordinated | 520 People Reached

- Navigation tabs: Dashboard, Impact Map, Active Missions, My Impact

Main Dashboard layout:

1. Hero Card: 'URGENT IMPACT MISSION'

   - Organization: Hope Community Center

   - Need: 100 Prepared Meals for 120 People

   - Urgency Badge: URGENT (Red glowing tag)

   - Progress bar: 70 / 100 Meals Fulfilled (70%) — 30 Meals Remaining

   - Time Left: 5h 20m remaining | Deadline: Today 7:00 PM

   - Primary Action Button: 'FIND HOW I CAN HELP' (Glowing Primary CTA)

2. Interactive Impact Map:

   - Leaflet map centered at lat: 17.5169, lng: 78.3844 (Zoom level 13).

   - Add color-coded map markers:

     * Red Marker: Hope Community Center (Need: 30 meals gap)

     * Blue Marker: Restaurant A - FreshBite (60 meals available, 1.4 km)

     * Blue Marker: Restaurant B - Green Plate (40 meals available, 3.2 km)

     * Blue Marker: Restaurant C - Local Grocery (30 meals available, 2.1 km)

   - Clicking a marker opens a popup with org details and a 'View Details' button.

3. Activity Feed Sidebar:

   - Live timeline showing recent actions (e.g., 'Restaurant A listed 60 surplus meals', 'Hope Community Center updated need').

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/abc8eb98-bdd9-4e2d-9fa3-ef9f648f9d37).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
