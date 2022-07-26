import {sample} from 'effector';
import {$uid} from 'features/common/app/model/stores';
import {
    onDislike,
    onLike,
    removeDislike,
    removeLike,
    setDislike,
    setLike,
    updateCommentLikes,
} from 'features/common/comments/liked/model/events';
import {$dislikedUsersIndex, $likedUsersIndex} from 'features/common/comments/liked/model/stores';

sample({
    clock: onLike,
    source: $uid,
    fn: (value, key) => ({key, value}),
    target: setLike,
});

sample({
    clock: onDislike,
    source: $uid,
    fn: (value, key) => ({key, value}),
    target: setDislike,
});

sample({
    clock: [setLike, setDislike, removeLike, removeDislike],
    source: {liked: $likedUsersIndex, disliked: $dislikedUsersIndex},
    fn: ({liked, disliked}, {key}) => ({key, liked: liked[key], disliked: disliked[key]}),
    target: updateCommentLikes,
});
