import { get } from 'lodash'

import useApi from 'shared/hooks/api'

const useCurrentUser = ({ cachePolicy = 'cache-only' } = {}) => {
  const [{ data }] = useApi.get('/current-user', {}, { cachePolicy })

  return {
    currentUser: get(data, 'currentUser'),
    currentUserId: get(data, 'currentUser.id'),
  }
}

export default useCurrentUser