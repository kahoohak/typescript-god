//求出斐波那契数列第几个位置的值 1, 1, 2, 3, 5, 8, 13, 21, 34
// type Fibonacci<Len extends number, Arr extends number[] = []> = Arr["length"] extends Len
//   ? Arr extends [...infer Rest, infer Last]
//     ? Last
//     : never
//   : Arr["length"] extends 0
//   ? Fibonacci<Len, [1]>
//   : Arr["length"] extends 1
//   ? Fibonacci<Len, [1, 1]>
//   : Arr extends [...infer Rest, infer SecLast, infer Last]
//   ? Fibonacci<Len, [...Arr, Add<SecLast & number, Last & number>] & number[]>
//   : never;

// type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]["length"];

// type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr["length"] extends Length
//   ? Arr
//   : BuildArray<Length, Ele, [...Arr, Ele]>;

type Fib<
  N extends number,
  Prev extends unknown[] = [unknown],
  Cur extends unknown[] = [],
  Idx extends unknown[] = []
> = Idx["length"] extends N ? Cur["length"] : Fib<N, Cur, [...Prev, ...Cur], [...Idx, unknown]>;

// 0 [] [1] 1 
// 1 [1] [1] 2
// 2 [1] [1, 1] 3
// 3 [1, 1] [1, 1, 1] 4

type Res = Fib<2>;

export {};
