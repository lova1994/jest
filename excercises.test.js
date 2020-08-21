const { store, retrieve, capitalizeFirstLetter } = require('./excercises.js')

// 2
it('should store a value', () => {
    // store ska returnera det sparade värdet
    // Arrange
    const value = [9, 5, 2];

    // Act
    let actual = store(value);

    // Assert
    expect(actual).toBe(value);
})


it('should store a value and return the most recently stored value', () => {
    //Arrange
    const value = 4

    //Act
    store(value)
    let expected = value;
    let actual = retrieve()

    //Assert
    expect(actual).toBe(expected)
})

// uppgift 3
it('should capitalize string to String', () => {
    // Arrange
    let string = "lova";
    let expected = "Lova"

    // Act
    let actual = capitalizeFirstLetter(string)

        // Assert
        expect(actual).toBe(expected)
})

// testar igen så att d funkar
it('should return "1234" for "1234" ', () => {
    const string = '1234';
    const expected = '1234';
    let actual = capitalizeFirstLetter(string);
    expect(actual).toBe(expected);
})
