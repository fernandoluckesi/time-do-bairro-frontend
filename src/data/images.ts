// Placeholder photos from Unsplash (free license), hotlinked through their CDN.
// Replace with the product's own assets before launch.
const unsplash = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

export const images = {
  heroPlayer: unsplash('photo-1763775594018-4a84eeadd83d', 1100, 1000),
  friendsPlaying: unsplash('photo-1676444920926-c8a084ec4003', 1000, 700),
  nightGame: unsplash('photo-1630420598913-44208d36f9af', 500, 400),
  ballKick: unsplash('photo-1606925797300-0b35e9d1794e', 500, 400),
  footOnBall: unsplash('photo-1763775468707-573c7cd6b0da', 500, 400),
  futsalMatch: unsplash('photo-1763775594018-4a84eeadd83d', 500, 400),
  orangeVest: unsplash('photo-1630420598771-dd52ab08c8cb', 500, 400),
  aerialCourt: unsplash('photo-1759210720456-c9814f721479', 600, 360),
};
