/* eslint-env mocha */

import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle()", () => {
  it("يجب أن يخلط المصفوفة", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);

    // يحتوي على نفس العناصر
    expect(result).to.have.members(input);

    // لكن بترتيب مختلف (احتمال فشل إذا التصادف رجع نفس الترتيب)
    expect(result).to.not.deep.equal(input);
  });
});
