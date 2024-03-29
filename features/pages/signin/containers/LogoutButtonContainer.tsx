import {INTL} from 'constants/intl'
import {useStore} from 'effector-react'
import {$appState} from 'features/app/model/stores'
import {signOut} from 'features/pages/signin/model/events'
import {Icons} from 'icons'
import React from 'react'
import {IconButton} from 'ui/atoms/IconButton'
import {intl} from 'utils/intl'

export const LogoutButtonContainer = React.memo(() => {
  const state = useStore($appState)
  const handleClick = React.useCallback(() => signOut(), [])

  if (state === 'UNAUTHORIZED') return null

  return (
    <IconButton aria-label={intl(INTL.SIGN_OUT)} onClick={handleClick} title={intl(INTL.SIGN_OUT)}>
      <Icons.Logout />
    </IconButton>
  )
})
