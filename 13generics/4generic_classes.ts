// Define two interfaces: Song and Video
interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

// Create a generic class Playlist that can work with any type T
class Playlist<T> {
    // Initialize a queue of type T
    public queue: T[] = [];

    // Method to add an element of type T to the queue
    add(el: T) {
        this.queue.push(el);
    }
}

// Create a playlist of songs using the Playlist class with type Song
const songs = new Playlist<Song>();

// Create a playlist of videos using the Playlist class with type Video
const videos = new Playlist<Video>();

/*
Explanation:

    Two interfaces Song and Video define the structure for songs and videos.
    The Playlist class is a generic class that can work with any type T.
    It has a queue property initialized as an empty array of type T.
    The add method adds an element of type T to the queue.
    Instances songs and videos are created using the Playlist class with types Song and Video respectively. This allows the playlists to contain only songs or videos, ensuring type safety.
*/