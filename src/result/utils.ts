import { Fn } from "../types";
import { NONE } from "../constants";
import { Pattern, Patterns, Result, ResultErr, ResultOk } from "./types";

/**
 * Returns Result with `$Ok` as value and `NONE` as error
 *
 * @example
 * // Result<number, NONE>
 * const result = ok(1);
 * */
export const ok = <$Ok>(value: $Ok): ResultOk<$Ok> => [value, NONE];

/**
 * Returns Result with `$Err` as error and `NONE` as value
 *
 * @example
 * // Result<NONE, string>
 * const result = err("this is error");
 * */
export const err = <$Err>(value: $Err): ResultErr<$Err> => [NONE, value];

/**
 * Checks whether result is `Ok`
 *
 * @example
 * const result = ok(1)
 * // true
 * const isResultOk = isOk(result);
 * */
export const isOk = <$Value, $Error>(result: Result<$Value, $Error>) =>
  result[1] === NONE;

/**
 * Checks whether result is `Err`
 *
 * @example
 * const result = err("this is error")
 * // true
 * const isResultOk = isErr(result);
 * */
export const isErr = <$Value, $Error>(result: Result<$Value, $Error>) =>
  result[0] === NONE;

/**
 * Returns `Ok` value of `Result`
 *
 * @example
 * const result = ok(1);
 * // 1
 * const resultOk = getOk(result);
 * */
export const getOk = <$Value, $Error>(result: Result<$Value, $Error>) =>
  result[0] as $Value;

/**
 * Returns `Err` value of `Result`
 *
 * @example
 * const result = err("this is error");
 * // "this is error"
 * const resultOk = getErr(result);
 * */
export const getErr = <$Value, $Error>(result: Result<$Value, $Error>) =>
  result[1] as $Error;

// TODO: Test with more patterns and finish types
export function match<$Input, $Outputs extends unknown[]>(
  input: $Input,
  ...patterns: Patterns<$Input, $Outputs>
): $Outputs[number] {
  const length = patterns.length;

  for (let i = 0; i < length; ++i) {
    const [predicate, output] = patterns[i];

    if (predicate(input)) return output(input);
  }
}

/**
 * Pattern matcher for `ResultOk`
 *
 * @example
 * // 2
 * match(ok(1), Ok((v) => v * 2))
 * */
export const Ok = <$Input extends Result, $Output>(
  fn: Fn<[$Input], $Output>,
): Pattern<$Input, $Output> => [isOk, fn];

/**
 * Pattern matcher for `ResultErr`
 *
 * @example
 * // 3
 * match(ok(1), ..., Err((v) => v * 3))
 * */
export const Err = <$Input extends Result, $Output>(
  fn: Fn<[$Input], $Output>,
): Pattern<$Input, $Output> => [isErr, fn];
