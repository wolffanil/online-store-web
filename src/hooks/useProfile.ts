import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

import { QUERY_KEY } from '@/shared/enums/queryKeys'

export function useProfile() {
	const { data: user, isLoading } = useQuery({
		queryKey: [QUERY_KEY.PROFILE],
		queryFn: () => userService.getProfile(),
		staleTime: 5 * 60 * 1000
	})

	return { user, isLoading }
}
