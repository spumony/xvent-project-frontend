import { propOr, pathOr } from "ramda";

import { BOOLEAN, EMPTY_OBJECT } from "../constants";

export const propOrEmptyObject = propOr(EMPTY_OBJECT);
export const propOrFalse = propOr(BOOLEAN.FALSE);

export const pathOrEmptyObject = pathOr(EMPTY_OBJECT);
export const pathOrFalse = pathOr(BOOLEAN.FALSE);
