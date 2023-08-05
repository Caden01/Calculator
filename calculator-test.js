it("should calculate the monthly rate correctly", function () {
  let values = {
    amount: 5000,
    years: 5,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("93.22");
});

it("should return a result with 2 decimal places", function () {
  // ..
  let values = {
    amount: 20000,
    years: 11,
    rate: 6.0,
  };
  expect(calculateMonthlyPayment(values)).toEqual("207.34");
});

/// etc
