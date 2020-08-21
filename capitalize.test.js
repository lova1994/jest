const { capitalize} = require('./capitalize.js')



// 3
// should capitalize "zoom" to "Zoom"
it('should capitalize "zoom" to "Zoom"', () => {
    // Arrange
    const string = 'lova';
    let expected = 'Lova';

    // Act
    let actual = capitalize(string);

    // Assert
    expect(actual).toBe(expected);
})

// it('should return "1234" for "1234" ', () => {
//     const string = '1234';
//     const expected = '1234';
//     let actual = capitalize(string);
//     expect(actual).toBe(expected);
// })

// it('should return "" for "" ', () => {
//     const string = '';
//     const expected = '';
//     let actual = capitalize(string);
//     expect(actual).toBe(expected);
// })