test("map calls its argument with a non-null argument", () => {
  const mock = jest.fn();
  [1].map((x) => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

test("Testing forEach() using mock function", () => {
  const mock = jest.fn((x) => 42 + x);

  [1, 2, 3].forEach(mock);

  expect(mock.mock.results[0].value).toBe(43);
  expect(mock.mock.results[1].value).toBe(44);
  expect(mock.mock.results[2].value).toBe(45);
  expect(mock.mock.result[0].value).toBeCalledWith(expect.anything());
});

test("mock implementation", () => {
  const mock = jest.fn(() => "bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution", () => {
  const mock = jest.fn();
  mock.mockResolvedValue("bar");

  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});
