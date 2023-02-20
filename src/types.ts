import { NONE } from "./constants";

export type Either<$Options extends unknown[]> = $Options[number];

export type ObjectAny = Record<string | number | symbol, unknown>;

export type Fn<$Input extends unknown[], $Output> = (
  ...props: $Input
) => $Output;

export type Thunk<$Output> = Fn<[], $Output>;

export type Noop = Thunk<void>;

export type Predicate<$Input> = Fn<[$Input], boolean>;

export type Pattern<$Input, $Output> = [
  predicate: Predicate<$Input>,
  fn: Fn<[$Input], $Output>,
];

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
