/**
 * Union of types as an array instead of list with pipes (|)
 *
 * @example
 * // string | number
 * type StringOrNumber = Either<[string, number]>;
 * */
export type Either<$Options extends unknown[]> = $Options[number];

/**
 * General purpose object with unknown value type.
 * Should mainly be used in generics.
 * */
export type ObjectAny = Record<string | number | symbol, unknown>;

/**
 * Function generic with support for multiple input params
 *
 * @example
 * // (firstName: string, secondName: string) => string;
 * type Hello = Fn<[firstName: string, secondName: string], string>;
 * */
export type Fn<$Input extends unknown[], $Output> = (
  ...props: $Input
) => $Output;

/**
 * Function with no input
 * */
export type Thunk<$Output> = Fn<[], $Output>;

/**
 * No-operation function with no input and output
 * */
export type Noop = Thunk<void>;

/**
 * Function which take $Input and outputs boolean
 * */
export type Predicate<$Input> = Fn<[$Input], boolean>;
