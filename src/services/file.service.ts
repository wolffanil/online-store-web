import { axiosWithAuth } from '@/api/api.interceptors'

import { getFileUrl } from '@/config/api.config'

interface IFile {
	url: string
	name: string
}

class FileService {
	async upload(file: FormData, folder?: string) {
		const { data } = await axiosWithAuth<IFile[]>({
			url: getFileUrl(''),
			method: 'POST',
			data: file,
			params: {
				folder
			},
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		return data
	}
}

export const fileService = new FileService()
