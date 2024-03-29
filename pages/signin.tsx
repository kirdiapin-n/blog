import {useGate, useStore} from 'effector-react'
import {$appState} from 'features/app/model/stores'
import {LinkContainer} from 'features/pages/signin/containers/LinkContainer'
import {Gate} from 'features/pages/signin/model'
import {FormContainer, FormFieldsContainer} from 'features/common/form/containers/FormContainer'
import React from 'react'
import {SubmitButtonContainer} from 'features/pages/signin/containers/SubmitButtonContainer'
import {SectionTemplate} from 'ui/templates/SectionTemplate'
import {Stack} from 'ui/atoms/Stack'

export default () => {
  useGate(Gate)
  const state = useStore($appState)

  if (state !== 'UNAUTHORIZED') return null

  return (
    <SectionTemplate title={<h1>{'SIGN IN PAGE'}</h1>}>
      <Stack maxWidth="344px" width="100%">
        <FormContainer>
          <FormFieldsContainer />

          <SubmitButtonContainer />
        </FormContainer>
      </Stack>

      <LinkContainer />
    </SectionTemplate>
  )
}
