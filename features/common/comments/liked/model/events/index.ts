import {createEvent} from 'effector'

export const onClick = createEvent<void>()

export const onLike = createEvent<string>()
export const onDislike = createEvent<string>()

export const setLike = createEvent<{key: string; value: string}>()
export const setDislike = createEvent<{key: string; value: string}>()

export const unsetLike = createEvent<{key: string; value: string}>()
export const unsetDislike = createEvent<{key: string; value: string}>()

export const updateCommentLikes = createEvent<{key: string; liked: string[]; disliked: string[]}>()
