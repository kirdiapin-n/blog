import {ThumbDown} from '@mui/icons-material';
import {useStore, useStoreMap} from 'effector-react';
import {$uid} from 'features/common/app/model/stores';
import {onDislike, onUndislike} from 'features/common/comments/liked/model/events';
import {$dislikedUsersIndex} from 'features/common/comments/liked/model/stores';

import React from 'react';
import {Badge} from 'ui/atoms/Badge';
import {IconButton} from 'ui/atoms/IconButton';

export const ButtonDislikeContainer = React.memo(({id}: {id: string}) => {
    const usersList = useStoreMap({
        store: $dislikedUsersIndex,
        keys: [id],
        defaultValue: [],
        fn: (state, [id]) => state[id],
    });

    const uid = useStore($uid);

    const isClicked = React.useMemo(() => usersList.includes(uid), [usersList, uid]);
    const color = React.useMemo(() => (isClicked ? 'primary' : 'secondary'), [isClicked]);

    const handleClick = React.useCallback(() => (isClicked ? onUndislike(id) : onDislike(id)), [id, isClicked]);

    return (
        <Badge badgeContent={usersList.length} color="primary">
            <IconButton color={color} onClick={handleClick} size="small">
                <ThumbDown fontSize="inherit" />
            </IconButton>
        </Badge>
    );
});
