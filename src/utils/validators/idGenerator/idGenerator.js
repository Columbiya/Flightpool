function* generator() {
    let start = 1;

    while(true) {
        yield start++;
    }
}

export default generator;