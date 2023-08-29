import { NameSpace } from '../../const';
import { TState } from '../../types/state';

const getError = (state: TState) => state[NameSpace.App].error;

export { getError };
