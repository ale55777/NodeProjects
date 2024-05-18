export function countWords(text, delimiter) {
    let wordCount = 0;
    let inWord = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (delimiter.test(char)) {
            inWord = false;
        }
        else if (!inWord) {
            wordCount++;
            inWord = true;
        }
    }
    return wordCount;
}
