export type Either<$Options extends unknown[]> = $Options[number];

export type ObjectAny = Record<string | number | symbol, unknown>;

export type Fn<$Input extends unknown[], $Output> = (
  ...props: $Input
) => $Output;

export type Thunk<$Output> = Fn<[], $Output>;

export type Noop = Thunk<void>;

export type Predicate<$Input> = Fn<[$Input], boolean>;
