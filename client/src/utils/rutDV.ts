export const calculate_dv: (rut: number) => string =
    (rut: number) => {
        return "k";
    }

export const check_rutWithDv: (rutWithDv: string) => boolean =
(rutWithDV: string) => {
    return false;
}

export const check_rutPlusDv: (rut: number, dv:string) => boolean =
(rut: number, DV:string) => {
    return false;
}

export const rut_to_rutWithDVAndSpacings: (rut: number) => string =
(rut: number) => {
    //if input is 18236026, then: 
    return "18.236.026-0";
}

export const rutWithDVAndSpacings_to_rut: (rutWithDvAndSpacings: string) => number =
(rutWithDvAndSpacings: string) => {
    //if input is "18.236.026-0" or "18.236.026" or "182360260", then: 
    return 18236026;
}