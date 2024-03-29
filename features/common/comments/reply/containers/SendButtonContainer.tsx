import {INTL} from 'constants/intl'
import {useStoreMap} from 'effector-react'
import {$openedIndex} from 'features/common/comments/reply/model/stores'

import React from 'react'
import {Button} from 'ui/atoms/Button'
import {Stack} from 'ui/atoms/Stack'
import {intl} from 'utils/intl'

export const SendButtonContainer = React.memo(({id}: {id: string}) => {
  const isOpened = useStoreMap({
    store: $openedIndex,
    keys: [id],
    defaultValue: false,
    fn: (state, [id]) => state[id],
  })

  if (!isOpened) return null

  return (
    <Stack justifyContent="flex-end">
      <Button type="submit">{intl(INTL.COMMENT.ACTION.SEND)}</Button>
    </Stack>
  )
})
