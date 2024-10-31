export const truncate = (lotNumber: string) => {
    return lotNumber.length > 10 ? lotNumber.slice(0, 10) + '...' : lotNumber;
};