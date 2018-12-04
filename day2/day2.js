const areSameLength = (str1, str2) => {

    if (!str1 || !str2) {
        return;
    }

    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return null;
    }
    return str1.length === str2.length;
};

module.exports = {
    areSameLength,
}