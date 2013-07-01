// hello Spec.


describe("function hello", function(){

  it("hello() to hello", function(){
    expect(hello()).toBe("hello");
  });

  it("hello('Bar') to helloBar", function(){
    expect(hello("Bar")).toBe("Barhello");
  });

});

