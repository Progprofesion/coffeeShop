
export const useMask = (inputRef) => {
    let getInputNumbersValue = (input) => {
        return input.value.replace(/\D/g, "");
    }

    let onPhoneinput = (e) => {
        let input = inputRef.current,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "",
            selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length !== selectionStart) {
            if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            // Russian number
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSimbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
            formattedInputValue = firstSimbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }
        } else {
            // Not Russian phone number
            formattedInputValue = "+" + inputNumbersValue;
        }
        input.value = formattedInputValue;
    }

    let onPhoneKeyDown = (e) => {
        let input = inputRef.current;
        if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
            input.value = "";
        }
    }

    let onPhonePaste = (e) => {
        let pasted = e.clipboardData || window.Clipboard,
            input = inputRef.current,
            inputNumbersValue = getInputNumbersValue(input);

        if (pasted) {
            let pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }
    return { onPhoneinput, onPhoneKeyDown, onPhonePaste }
}

