function encodeAndDecodeMessages() {
    const [buttonOne, buttonTwo] = document.querySelectorAll("#main button");
    const [textArea, recivedMassage] = document.querySelectorAll("#main textarea");

    buttonOne.addEventListener("click", encode);
    buttonTwo.addEventListener("click", decodeAndReadIt);

    let encoded = true;

    function encode(e) {

        const message = textArea.value;

        let encryptedMessage = "";

        for (let i = 0; i < message.length; i++) {

            const currentChar = message.charAt(i);
            let currentCharCode = currentChar.charCodeAt(0);
            let newChar = String.fromCharCode(++currentCharCode);
            encryptedMessage += newChar;
        }

        recivedMassage.value = encryptedMessage;
        textArea.value = "";
        encoded = true;
    }

    function decodeAndReadIt(e) {
        if (encoded) {

            let message = recivedMassage.value;

            let encryptedMessage = "";
            for (let i = 0; i < message.length; i++) {

                let currentChar = message.charAt(i);
                let currentCharCode = currentChar.charCodeAt(0);
                let newCharCode = currentCharCode - 1;
                let newChar = String.fromCharCode(newCharCode);
                encryptedMessage += newChar;
            }

            recivedMassage.value = encryptedMessage;
            encoded = false;
        }
    }

}