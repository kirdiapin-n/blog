import {guard, sample} from 'effector'
import {createGate} from 'effector-react'
import {getComments} from 'features/pages/post/comments/models/get/events'
import {getPostFx} from 'features/pages/post/state/model/effects'
import {setMode} from 'features/pages/post/state/model/events'

export const Gate = createGate<{id?: string}>()
export const $id = Gate.state.map(x => x?.id)

sample({
  clock: [
    Gate.open,
    guard({
      source: $id,
      filter: Boolean,
    }),
  ],
  source: $id,
  filter: Boolean,
  target: [getPostFx, setMode.prepend(() => 'LOADING')],
})

sample({
  clock: getPostFx.doneData,
  filter: ({comments_count}) => !!comments_count,
  fn: () => void 0,
  target: getComments,
})
