export const botConfig = {
    speed: 10000, // Speed in milliseconds
};

export function setBotSpeed(newSpeed: number): void {
    botConfig.speed = newSpeed;
}

export function getBotSpeed(): number {
    return botConfig.speed;
}