import React from 'react';
import { useObserver } from 'mobx-react'
import { MobXProviderContext } from 'mobx-react'

function useStores() {
  return React.useContext(MobXProviderContext)
}

export const useStoriesData = () => {
  const { store: { stories } } = useStores()
  return useObserver(() => stories)
}
