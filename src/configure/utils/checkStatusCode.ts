export const checkStatusCode = (statusCode: number) => {
    switch (statusCode) {
        case 200:
            return true;
    
        default:
            return false;
    }
}