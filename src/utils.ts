import { NONE } from "./constants";
import { ResultErr, ResultOk, Result, Pattern, Fn } from "./types";

export const ok = <$Ok>(value: $Ok): ResultOk<$Ok> => [value, NONE];

export const err = <$Err>(value: $Err): ResultErr<$Err> => [NONE, value];

export const isOk = <$Result extends Result>(result: $Result) =>
  result[1] === NONE;

export const isErr = <$Result extends Result>(result: $Result) =>
  result[0] === NONE;

export const getOk = <$Result extends Result>(result: $Result) => result[0];

export const getErr = <$Result extends Result>(result: $Result) => result[1];

export function match<$Input, $Outputs extends unknown[]>(
  input: $Input,
  ...patterns: {
    [$Key in keyof $Outputs]: Pattern<$Input, $Outputs[$Key]>;
  }
): $Outputs[number] {
  const length = patterns.length;

  for (let i = 0; i < length; ++i) {
    const [predicate, output] = patterns[i];

    if (predicate(input)) return output(input);
  }
}
export const Ok = <$Input extends Result, $Output>(
  fn: Fn<[$Input], $Output>,
): Pattern<$Input, $Output> => [isOk, fn];

export const Err = <$Input extends Result, $Output>(
  fn: Fn<[$Input], $Output>,
): Pattern<$Input, $Output> => [isErr, fn];
