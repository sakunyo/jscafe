

/**
 * hello
 *
 * @param v {?string}
 * @returns {string}
 */
function hello (v?: string) :string {
  return (v || "") + "hello";
}

console.log(hello());

console.log(hello("string"));

// console.log(hello(100));
