import { useState } from "react";

const AleatoryPhrase = () => {
    const [newPhrase, setNewPhrase] = useState({})
    const phrases = [
        { id: 1, content: "The piano keys are black and white, but they sound like a million colors in your mind.", author: "Maria Cristina Mena" },
        { id: 2, content: "The piano ain’t got no wrong notes.", author: "Thelonious Monk" },
        { id: 3, content: "To play a wrong note is insignificant; to play without passion is inexcusable.", author: "Ludwig van Beethoven" },
        { id: 4, content: "Life is like a piano. What you get out of it depends on how you play it.", author: "Tom Lehrer" },
        { id: 5, content: "The piano is able to communicate the subtlest universal truths by means of wood, metal, and vibrating air.", author: "Kenneth Miller" },
        { id: 6, content: "Sometimes I can only groan, and suffer, and pour out my despair at the piano.", author: "Frédéric Chopin" },
        { id: 7, content: "I tell my piano the things I used to tell you.", author: "Frédéric Chopin" },
        { id: 8, content: "When you play, never mind who listens to you.", author: "Robert Schumann" },
        { id: 9, content: "There are eighty-eight keys on a piano and within that, an entire universe.", author: "James Rhodes" },
        { id: 10, content: "The piano is the easiest instrument to play in the beginning and the hardest to master in the end.", author: "Vladimir Horowitz" },
        { id: 11, content: "Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings.", author: "Wassily Kandinsky" },
        { id: 12, content: "I believe in using the entire piano as a single instrument capable of expressing every possible musical idea.", author: "Oscar Peterson" },
        { id: 13, content: "The piano is always true to me. In times of despair, happiness, and joy, its mood is always my own.", author: "Ignacy Jan Paderewski" },
        { id: 14, content: "I sit down to the piano regularly at 11 PM, and I think of it as a laboratory.", author: "John Cage" },
        { id: 15, content: "A piano is like no other instrument. You can hide in it and still be found.", author: "Tori Amos" },
        { id: 16, content: "The piano is not an instrument for me. It’s my best friend, my soul, my muse, my lover, my protector, and my therapist.", author: "Tori Amos" },
        { id: 17, content: "I describe myself as a big kid at a piano. It’s a way of being in the world.", author: "Rufus Wainwright" },
        { id: 18, content: "I just sit down at the piano and let things come to me.", author: "James Taylor" },
        { id: 19, content: "The piano keys are not black and white, they are the earth, the sky, the air, and everything in between.", author: "Lang Lang" },
        { id: 20, content: "You write to become immortal, or because the piano happens to be open, or you've looked into a pair of beautiful eyes.", author: "Robert Schumann" }
    ];

    const handlePhrase = () => {
        const randomRhrase = phrases[Math.round(Math.random() * phrases.length)];
        setNewPhrase(randomRhrase);
    }
    return (
        <section>
            <h2>✨🎹 Your piano phrase 🎹✨</h2>
                {
                    newPhrase.content 
                    ?
                        <>
                            <p>{newPhrase.content}</p>
                            <i>{newPhrase.author}</i>
                        </>
                    : <p>Click to generate a phrase</p>
                }
            <button onClick={handlePhrase}> New </button>
        </section>
    )
}

export default AleatoryPhrase;