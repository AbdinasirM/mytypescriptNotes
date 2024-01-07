// Type alias is a powerful feature in TypeScript, providing a way to define a custom type that can be reused throughout the codebase.
// It enhances code organization, readability, and maintainability by allowing developers to encapsulate complex structures.

// Without using type alias:
// The code becomes less readable and harder to manage as the structure of the song object is repeated in multiple function signatures.

// Function to calculate the payout for a song without using type alias
// function calculatePayout(song: { title: string, artist: string, numStreams: number, credits: { producer: string, writer: string} }): number {
//   return song.numStreams * 0.0033;
// }

// Function to print details of a song without using type alias
// function printSongDetails(mysong: { title: string, artist: string, numStreams: number, credits: { producer: string, writer: string } }): string {
//   return mysong.title + " - " + mysong.artist;
// }

// Example using type alias:

// Type alias for a Song object, providing a clear and concise representation of the structure
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
}

// Function to calculate the payout for a song using the Song type alias
function calculatePayout2(song: Song): number {
  return song.numStreams * 0.0033;
}

// Function to print details of a song using the Song type alias
function printSongdetails2(song: Song): string {
  return song.title + " - " + song.artist;
}

// Example usage of functions with type alias
console.log(calculatePayout2({ title: "test", artist: "test", numStreams: 10, credits: { producer: "test", writer: "test" } }));
console.log(printSongdetails2({ title: "gnos", artist: "unknown", numStreams: 30, credits: { producer: "Alex", writer: "John" } }));
