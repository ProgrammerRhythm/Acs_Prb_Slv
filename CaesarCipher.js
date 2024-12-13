function caesarCipher(N, message) {
    N = N % 26;
    let result = "";
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char === " ") {
            result += " ";
        } else {
            const newCharCode = char.charCodeAt(0) - N;
            const wrappedCharCode = newCharCode < 97 ? newCharCode + 26 : newCharCode;
            result += String.fromCharCode(wrappedCharCode);
        }
    }
    return result;
}

const N = 2;
const message = "hello world";
console.log(caesarCipher(N, message));
