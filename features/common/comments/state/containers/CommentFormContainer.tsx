import {INTL} from 'constants/intl';
import {useStore} from 'effector-react';
import {$appState} from 'features/app/model/stores';
import {FormContainer} from 'features/common/form/containers/FormContainer';
import React from 'react';
import {Button} from 'ui/atoms/Button';
import {Stack} from 'ui/atoms/Stack';
import {intl} from 'utils/intl';

export const CommentFormContainer = React.memo(() => {
    const state = useStore($appState);

    return state === 'AUTHORIZED' ? (
        <FormContainer>
            <Stack justifyContent="flex-end">
                <Button type="submit">{intl(INTL.COMMENT.ACTION.SEND)}</Button>
            </Stack>
        </FormContainer>
    ) : null;
});
