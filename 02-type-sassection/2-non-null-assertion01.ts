function myFunc(maybeString: undefined | null | string) {
    // Type 'string | null | undefined' is not assignable to type  'string’.
    // Type 'undefined' is not assignable to type 'string’.
    const onlyString: string = maybeString; // Error
    const ignoreUndefinedAndNull: string = maybeString!; // Ok
}