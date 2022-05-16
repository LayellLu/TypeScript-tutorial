let res: unknown = 'tom';

function concatName(param: string) {
    return `User name : ${param}`;
}

concatName(<string>res);