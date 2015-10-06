describe('A simple test:', function() {
  it('a is in fact a "Hello World"', function() {
    var a = 'Hello World!';
    expect(a).toBe('Hello World!');
  });

  it('the result must be a number', function() {
    var result = sum(1, 2);
    expect(typeof result).toBe('number');
  });

  it('the result must be 3', function() {
    var result = sum(1, 2);
    expect(result).toBe(3);
  });
});