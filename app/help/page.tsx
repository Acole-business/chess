'use client';

import React from 'react';

const HowToPlayChess: React.FC = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="container">
            <h1>How to Play Chess</h1>
            <br></br>
            <p>Welcome to the Chess tutorial! This page will guide you through the basic rules and strategies of chess.</p>
            <p>Chess is a two-player strategy game played on an 8x8 grid. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective is to checkmate your opponent's king.</p>

            <h2>Basic Rules</h2>
            <ul>
                <li><strong>King:</strong> Moves one square in any direction.</li>
                <li><strong>Queen:</strong> Moves any number of squares in any direction.</li>
                <li><strong>Rook:</strong> Moves any number of squares horizontally or vertically.</li>
                <li><strong>Bishop:</strong> Moves any number of squares diagonally.</li>
                <li><strong>Knight:</strong> Moves in an L-shape: two squares in one direction and then one square perpendicular.</li>
                <li><strong>Pawn:</strong> Moves one square forward (two squares on its first move) and captures diagonally.</li>
            </ul>

            <h2>Special Moves</h2>
            <ul>
                <li><strong>Castling:</strong> A move involving the king and a rook that moves the king two squares towards the rook and the rook to the square over which the king crossed.</li>
                <li><strong>En Passant:</strong> A special pawn capture that can occur immediately after a pawn moves two squares forward from its starting position and an enemy pawn could have captured it had it moved only one square forward.</li>
                <li><strong>Promotion:</strong> When a pawn reaches the far end of the board, it can be promoted to any other piece (except a king), usually a queen.</li>
            </ul>

            <h2>Winning the Game</h2>
            <p>The game is won by checkmating the opponent's king. Checkmate occurs when the king is in a position to be captured (in check) and there is no legal move to escape the threat.</p>

            <p>For more detailed rules and strategies, please refer to the following resources:</p>
            <ul>
                <li><a href="https://www.thechesswebsite.com/chess-rules/" target="_blank" rel="noopener noreferrer">Official Chess Rules</a></li>
                <li><a href="https://www.thechesswebsite.com/chess-strategy/" target="_blank" rel="noopener noreferrer">Chess Strategies</a></li>
                <li><a href="https://www.chess.com/lessons/" target="_blank" rel="noopener noreferrer">Chess Tutorials</a></li>
            </ul>

            <button onClick={goBack}>Back to Game</button>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: black;
                }
                p {
                    line-height: 1.6;
                    color: black;
                }
                a {
                    color: #007BFF;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                ul {
                    padding-left: 20px;
                    color: black;
                }
                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: white;
                    color: #007BFF;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: white;
                }
            `}</style>
        </div>
    );
}

export default HowToPlayChess;
