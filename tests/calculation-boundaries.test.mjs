import test from "node:test";
import assert from "node:assert/strict";

function currencyRound(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

test("currency rounding handles fractional cents deterministically", () => {
  assert.equal(currencyRound(10.005), 10.01);
  assert.equal(currencyRound(99.994), 99.99);
});

test("tax lot assignment keeps FIFO ordering", () => {
  const lots = [
    { lotId: "lot-1", remaining: 50 },
    { lotId: "lot-2", remaining: 100 }
  ];
  const assignment = [];
  let sellQuantity = 75;

  for (const lot of lots) {
    const quantity = Math.min(lot.remaining, sellQuantity);
    assignment.push({ lotId: lot.lotId, quantity });
    sellQuantity -= quantity;
    if (sellQuantity === 0) break;
  }

  assert.deepEqual(assignment, [
    { lotId: "lot-1", quantity: 50 },
    { lotId: "lot-2", quantity: 25 }
  ]);
});
