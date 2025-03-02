export const botConfig = {
    speed: 5000, // Speed in milliseconds
};

export function setBotSpeed(newSpeed: number): void {
    botConfig.speed = newSpeed;
}

export function getBotSpeed(): number {
    return botConfig.speed;
}