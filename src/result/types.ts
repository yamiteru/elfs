import { NONE } from "../constants";
import { Predicate, Fn, Either } from "../types";

export type Pattern<$Input, $Output> = [
  predicate: Predicate<$Input>,
  fn: Fn<[$Input], $Output>,
];

export type Patterns<$Input, $Outputs extends unknown[]> = {
  [$Key in keyof $Outputs]: Pattern<$Input, $Outputs[$Key]>;
};

export type None = typeof NONE;

export type ResultOk<$Ok = any> = [ok: $Ok, err: None];

export type ResultErr<$Err = any> = [ok: None, err: $Err];

export type Result<$Ok = any, $Err = any> = Either<
  [ResultOk<$Ok>, ResultErr<$Err>]
>;

export type InferResultOk<$Result extends Result> = $Result extends ResultOk<
  infer $Ok
>
  ? $Ok
  : never;

export type InferResultErr<$Result extends Result> = $Result extends ResultErr<
  infer $Err
>
  ? $Err
  : never;
