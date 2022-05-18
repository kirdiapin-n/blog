import {forward} from 'effector';
import {createGate} from 'effector-react';
import {checkAuthFx} from 'features/app/model/effects';
import {setAppState} from 'features/app/model/events';

export const Gate = createGate();

forward({
    from: Gate.open,
    to: checkAuthFx,
});

forward({
    from: checkAuthFx.doneData,
    to: setAppState.prepend(() => 'AUTHORIZED'),
});

forward({
    from: checkAuthFx.failData,
    to: setAppState.prepend(() => 'UNAUTHORIZED'),
});
