export const truncateString = (input) => {
    const  maxLength = 30
    const words = input.split(' ');
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(' ') + ' ...';
    }
    return input;
}