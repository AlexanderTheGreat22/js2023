describe("helloWorld", () => {
    it("returns hello world", () => {
        var actual = helloWorld();
        expect(actual).toBe("hello world");
    });
});

describe("Inmultire intrebi", () => {
    it("return inm 5 si 3 = 15", () => {
        expect(inm(5,3)).toEqual(15);
    });
});

describe("math sum2", function(){
    //Spec for sum operation
    it("suma dintre 1.4 si 0.7", function() {
      expect(sum(1.40,0.70)).toEqual(2.10);
    });
});

describe("factorial", function(){
    //Spec for factorial operation for negative number
    it(" throw error in factorial ", function() {
      expect(function() { 
        calc.factorial(-7)
          }).toThrowError(Error);
    });
});