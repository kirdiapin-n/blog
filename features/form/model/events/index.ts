import {createEvent} from 'effector';
import {createPostInputs, signInInputs, signUpInputs} from 'features/form/model/stores';
import React from 'react';

export const fieldSet = createEvent<{key: string; value: string}>();

type TInputs = typeof signInInputs | typeof signUpInputs | typeof createPostInputs;
export const setInputs = createEvent<TInputs>();

export const setButtonText = createEvent<string>();

export const onChange = createEvent<React.ChangeEvent<HTMLInputElement>>();

export const onReset = createEvent<HTMLFormElement>();
export const onSubmit = createEvent();
