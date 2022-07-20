import {guard, sample} from 'effector';
import {createGate} from 'effector-react';
import {forward} from 'effector/effector.mjs';
import {setUser} from 'features/common/app/model/events';
import {$appState, setAppState} from 'features/common/app/model/stores';
import {$formElem} from 'features/common/form/model';
import {onReset, onSubmit} from 'features/common/form/model/events';
import {$form, $inputsApi} from 'features/common/form/model/stores';
import {toMain} from 'features/common/navigation/model/events';
import {createUserFx, signUpFx} from 'features/signup/model/effects';

export const Gate = createGate();

guard({
    clock: Gate.open,
    source: $appState,
    filter: state => state === 'AUTHORIZED',
    target: toMain,
});

forward({
    from: Gate.open,
    to: $inputsApi.setSignUpInputs,
});

sample({
    clock: onSubmit,
    source: $form,
    filter: Gate.status,
    fn: data => {
        if (data.password === data.confirmPassword) return {...data, displayName: `${data.firstName} ${data.lastName}`};
        throw new Error('no correct data');
    },
    target: signUpFx,
});

forward({
    from: signUpFx.doneData,
    to: [setAppState.authorize, toMain],
});

sample({
    clock: signUpFx.done,
    fn: ({result: {uid, admin}, params: {email, displayName}}) => ({email, photoUrl: null, displayName, uid, admin}),
    target: createUserFx,
});

forward({
    from: createUserFx.doneData,
    to: setUser,
});

sample({
    clock: Gate.open,
    source: $formElem,
    filter: Boolean,
    target: onReset,
});
