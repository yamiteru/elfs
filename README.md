# Elfs

## Result

Begone you devilish `try/catch`! Welcome the all mighty `Result<Ok, Err>`!

### create

```ts
const okResult = ok(1);
const errResult = err(2);
```

### check

```ts
const isResultOk = isOk(okResult);
const isResultErr = isErr(errResult);
```

### get

```ts
const okResultValue = getOk(okResult);
const errResultValue = getErr(errResult);
```
